# Week 4 - Werken met data in een mySQL database in PHP

[Hier](/files/cheatsheet_sql.pdf) kan je een cheatsheet voor SQL terugvinden ter ondersteuning van taken, toetsen, projecten en werkplekleren.

## Een oefendatabase aanmaken en CRUD testen

Voor alle database gerelateerde acties kan je teruggrijpen naar de cursus Databases.

We starten met de aanmaak van een database op onze web server.

Open vervolgens de **PHPMyAdmin** web interface en maak een nieuwe tabel aan:

```sql
CREATE TABLE subjects (id INT(11) NOT NULL AUTO_INCREMENT,
menu_name VARCHAR(255),
position INT(3),
visible TINYINT(1),
PRIMARY KEY (id)
);
```

De meest voor de hand liggende interacties met een database zullen Create, Read, Update en Delete query's zijn. Hier zal vaak verwezen worden naar **CRUD** queries.

Laten we even enkele CRUD queries uitvoeren op onze tabel:

```sql
/* Create */
INSERT INTO subjects(menu_name, position, visible) VALUES ('About global bank', 1 , 1);
INSERT INTO subjects(menu_name, position, visible) VALUES ('Payments', 2 , 1);
INSERT INTO subjects(menu_name, position, visible) VALUES ('Loans', 3 , 1);
INSERT INTO subjects(menu_name, position, visible) VALUES ('Contact', 4 , 1);
/* Read */
SELECT * FROM subjects WHERE id=2;
/* Update */
UPDATE subjects SET position='3', visible='0' WHERE id=2;
/* Delete */
DELETE FROM subjects WHERE id=4 LIMIT 1;
```
:::tip Tip
Voeg bij een delete steeds `LIMIT 1` toe aan de query. Zo kan max 1 record gewist worden, zo vermijd je dat je volledig tabel gewist wordt door een foutieve query.
:::

## De basisinteractie met een database vanuit PHP

Een typische interactie met een database vanuit PHP ziet er als volgt uit:

1. Connecteren met de database
2. Een query uitvoeren op de database
3. De ontvangen resultaten gebruiken
4. De ontvangen resultaten loslaten
5. De verbinding met de database afsluiten

```php
<?php
    // de database login gegevens
    $dbhost = '***';
    $dbuser = '***';
    $dbpass = '***';
    $dbname = '***';

    // 1. Verbinden met de database
    $connection = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);

    // 2. Een query uitvoeren
    $query = "SELECT * FROM subjects";
    $result_set = mysqli_query($connection, $query);

    // 3. De ontvangen resultaten gebruiken
    while($subject = mysqli_fetch_assoc($result_set)) {
      echo $subject["menu_name"] . "<br />";
    }

    // 4. De ontvangen resultaten loslaten
    mysqli_free_result($result_set);

    // 5. De verbinding met de database afsluiten
    mysqli_close($connection);
?>
```

Je kan de ontvangen data ook in JSON formaat weergeven:

```php
// De query uitvoeren
$query = "SELECT * FROM subjects";
$result_set = mysqli_query($connection, $query);
// De data in een associatieve array plaatsen
$data=mysqli_fetch_all($result_set,MYSQLI_ASSOC);
// De data in een JSON formaat plaatsen
echo json_encode($data);
```

## Een PHP form en een database

We maken een form waarmee we data kunnen toevoegen aan de tabel. Noem dit bestand `mysqli_form.php`.

```php
<?php
    // de database login gegevens
    $dbhost = '***';
    $dbuser = '***';
    $dbpass = '***';
    $dbname = '***';

    // Verbinden met de database
    $connection = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);

    // Een query uitvoeren
    $query = "SELECT * FROM subjects";
    $result_set = mysqli_query($connection, $query);

    // De ontvangen resultaten gebruiken
    while($subject = mysqli_fetch_assoc($result_set)) {
      echo $subject["menu_name"] . "<br />";
    }

    // De ontvangen resultaten loslaten
    mysqli_free_result($result_set);

    // De verbinding met de database afsluiten
    mysqli_close($connection);
?>

<form action="mysqli_form.php" method="POST">
    Menu Name: <input name="menu_name" /><br />
    position: <input type="number" name="position" /><br />
    visible: <input type="number" min="0" max="1" name="visible" /><br/>
    <input type="submit" />
</form>
```

Bij een HTTP POST request roepen we dezelfde pagina op als bij een HTTP GET request. We zullen het type request dus op een of andere manier moeten onderscheppen om zo een onderscheid te kunnen maken tussen de twee.

We plaatsen deze code onder de verbinding met de database, zodat de nieuwe data ook onmiddellijk weergegeven worden op de pagina:

```php
// Is het een POST request?
if($_SERVER['REQUEST_METHOD']=='POST')
{
  $menu_name=mysqli_real_escape_string($connection,$_POST['menu_name']);
  $position=mysqli_real_escape_string($connection,$_POST['position']);
  $visible=mysqli_real_escape_string($connection,$_POST['visible']);
  $insert = "INSERT INTO subjects (menu_name, position, visible) VALUES ('{$menu_name}','{$position}','{$visible}');";
  mysqli_query($connection,$insert);
}
```
We gebruiken hierbij `mysqli_real_escape_string()` om te vermijden dat hackers een `;` zouden plaatsen in de input gevolgd door een SQL commando waardoor ongewenste interactie met onze database zou kunnen ontstaan. Dit soort aanval wordt ook wel een **SQL injectie** genoemd.

We zijn nu in staat om nieuwe records aan onze tabel toe te voegen. Vervolgens willen we ook records kunnen wissen vanuit dezelfde pagina.

Hiervoor maken we een tweede form op onze pagina, we doen dit net na het uitvoeren van de query en voor het gebruiken van de resultaten. Hiervoor onderbreken we even onze PHP code om een HTML tag te gebruiken:

```php
?>

<form action="mysqli_form.php" method="POST">

<?php
```

Om te kunnen aanduiden welke record gewist moet worden plaatsen we na elk record een checkbox, we doen dit in de while-lus.

Pas de code als volgt aan:

```php
    // De ontvangen resultaten gebruiken
    while($subject = mysqli_fetch_assoc($result_set)) {
      echo $subject["menu_name"];
      echo "<input type='checkbox' name='checkboxes[]' value={$subject['id']} /><br/>";
    }
```

Net voor we de verbinding met de database afsluiten, onderbreken we opnieuw de php code om via HTML een submit button te plaatsen en onze form te sluiten.

```php
?>
    <input type="submit" value="delete"/><br/>
</form>
<?php
```

Tot slot moeten we in het geval van een HTTP POST request nu kunnen onderscheiden of het om een **Insert** of een **Delete** gaat. Hiervoor gebruiken we een trucje, we plaatsen een verborgen veld in het formulier.

In het geval van een delete plaatsen we dit voor de submit button:

```php
<input type="hidden" name="action" value="delete" />
```

Wanneer we een insert willen uitvoeren, plaatsen we dit voor de submit button:

```php
<input type="hidden" name="action" value="insert" />
```

Bij een HTTP POST request zal er dus een verborgen veld `action` gepost worden met de waarde `insert` of `delete`. Hiermee onderscheiden we een insert van een delete.

Wijzig het POST gedeelte als volgt:

```php
// Is het een POST request?
if($_SERVER['REQUEST_METHOD']=='POST')
{
    // Is het een DELETE actie ?
    if($_POST["action"]=='delete') {
        for($i=0; $i < count($_POST['checkboxes']); $i++){
            $delete = "DELETE FROM subjects WHERE id='{$_POST['checkboxes'][$i]}';";
            mysqli_query($connection,$delete);
        }
    }   
    // Is het een INSERT actie ?
    if($_POST["action"]=='insert') {
        $menu_name=mysqli_real_escape_string($connection,$_POST['menu_name']);
        $position=mysqli_real_escape_string($connection,$_POST['position']);
        $visible=mysqli_real_escape_string($connection,$_POST['visible']);
        $insert = "INSERT INTO subjects (menu_name, position, visible) VALUES ('{$menu_name}','{$position}','{$visible}');";
        mysqli_query($connection,$insert);
    }
}
```

Zo, nu hebben we een PHP pagina waarmee we records kunnen toevoegen en wissen in onze tabel.

## Project

::: tip Deel 4

Werk verder aan je project. Je bezit nu de vaardigheden om deel 4 (Database) tot een goed einde te brengen.

:::