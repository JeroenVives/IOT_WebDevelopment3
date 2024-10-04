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
    $connection = new mysqli($dbhost, $dbuser, $dbpass, $dbname);
    if ($mysqli->connect_error) {
        die("Connect Error ({$mysqli->connect_errno}) {$mysqli->connect_error}");
    }

    // 2. Een query uitvoeren
    $query = "SELECT * FROM subjects";
    $result_set =$connection->execute_query($query);

    // 3. De ontvangen resultaten gebruiken
    while($subject = $result_set->fetch_assoc()) {
      echo $subject["menu_name"] . "<br />";
    }

    // 4. De ontvangen resultaten loslaten
    $result_set->free();

    // 5. De verbinding met de database afsluiten
    $connection->close();
?>
```

Je kan de ontvangen data ook in JSON formaat weergeven:

```php
// De query uitvoeren
$query = "SELECT * FROM subjects";
$result_set = $connection->execute_query($query);
// De data in een associatieve array plaatsen
$data = $result_set->fetch_all(MYSQLI_ASSOC);
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
    $connection = new mysqli($dbhost, $dbuser, $dbpass, $dbname);
    if ($connection->connect_error) {
        die("Connect Error ({$connection->connect_errno}) {$connection->connect_error}");
    }

    // Een query uitvoeren
    $query = "SELECT * FROM subjects";
    $result_set = $connection->execute_query( $query);

    // De ontvangen resultaten gebruiken
    while($subject = $result_set->fetch_assoc()) {
      echo $subject["menu_name"] . "<br />";
    }

    // De ontvangen resultaten loslaten
    $result_set->free();

    // De verbinding met de database afsluiten
    $connection->close();
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
  $insert = "INSERT INTO subjects (menu_name, position, visible) VALUES (?, ?, ?)";
  $connection->execute_query($insert, [$_POST['menu_name'], $_POST['position'], $_POST['visible']]);
}
```
We gebruiken hier een prepared statement waarbij de input parameters in de query vervangen worden door vraagtekens. Tijdens het uitvoeren van de code worden deze vraagtekens vervangen door de elementen van een array die als argument meegegeven kan worden aan de **execute_query** methode. Dit alles doen we om te vermijden dat hackers een `;` zouden plaatsen in de input gevolgd door een SQL commando,  waardoor ongewenste interactie met onze database zou kunnen ontstaan. Dit soort aanval wordt ook wel een **SQL injectie** genoemd.

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
    while($subject = $result_set->fetch_assoc()) {
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
            $connection->execute_query($delete);
        }
    }   
    // Is het een INSERT actie ?
    if($_POST["action"]=='insert') {
        $insert = "INSERT INTO subjects (menu_name, position, visible) VALUES (?, ?, ?)";
        $connection->execute_query($insert, [$_POST['menu_name'], $_POST['position'], $_POST['visible']]);
    }
}
```

Zo, nu hebben we een PHP pagina waarmee we records kunnen toevoegen en wissen in onze tabel.

## Project

::: tip Deel 4

Werk verder aan je project. Je bezit nu de vaardigheden om deel 4 (Database) tot een goed einde te brengen.

:::