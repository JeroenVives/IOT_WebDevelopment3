# Week 2 - Gebruik van WEB-API's in PHP

## Een WEB-API raadplegen vanuit PHP

Het verschil met wat we in javascript hebben gedaan is hier dat de client geen verbinding meer hoeft te maken met een andere server. Het is de server die dit nu zal doen en het resultaat gewoon naar de client browser sturen.

We gebruiken hiervoor cURL (client URL library), een techniek die veel gebruikt wordt in LINIX/UNIX en de protocols FTP, HTTP, telnet, ... ondersteunt.

Meer informatie kan je steeds terugvinden op [PHP.net](https://www.php.net/manual/en/book.curl.php) of [PHPPOT.com](https://phppot.com/php/php-curl/).

### De techniek even uitproberen

We gebruiken terug httpbin.org om cURL even te testen:

Maak het bestand **curl.php**:
```php
<?php
    $url = "https://httpbin.org/get?a=1&b=test";
    $content = curlRequest($url);
    print $content;
    
    function curlRequest($url)
    {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
        curl_setopt($ch, CURLOPT_VERBOSE, 0);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        $response = curl_exec($ch);
        curl_close($ch);
        return $response;
    }
?>
```

Je stelt vast dat de variabele $content nu een string bevat met naast de data ook allerhande header informatie.
Je kan deze string als volgt decoderen naar een JSON formaat:

```php
$data = json_decode($content);
```

Om de informatie nu op je webpagina te krijgen kan je als volgt tewerk gaan: 

```php
echo "<div>a is {$data->args->a}<div>";
echo "<div>b is {$data->args->b}<div>";
```

### Deze techniek even toepassen op een WEB-API die we reeds kennen

We gebruiken terug cURL om via openweathermap het weer op te vragen:

```php
<?php
    // variabelen
    $stad = "brugge";
    $apiid = "plaats hier je eigen api id voor openweathermap";
    $url = "https://api.openweathermap.org/data/2.5/weather?q=".$stad."&appid=".$apiid."&units=metric&lang=nl";

    // functie curl
    function curlRequest($url)
    {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
        curl_setopt($ch, CURLOPT_VERBOSE, 0);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        $response = curl_exec($ch);
        curl_close($ch);
        return $response;
    }

    // Curl request
    $content = curlRequest($url);
    $data = json_decode($content);

    // Visualiseren
    echo "<div>temperatuur is {$data->main->temp}</div>";
    echo "<div>de weersomschrijving: \"{$data->weather[0]->description}\"</div>";
    echo "<img id=\"icoon\" src=\"http://openweathermap.org/img/wn/{$data->weather[0]->icon}@2x.png\"></img>";
?>
```
## Zelf een WEB-API schrijven in PHP

Als we een WEB-API gebruiken sturen we een HTTP GET request naar een url en krijgen een JSON response terug.

### Opvangen van een HTTP GET request

Maak hiervoor een file `testapi.php` aan. Dat zal tevens onze url zijn.

Laat ons een WEB-API maken waar we 2 cijfers aan kunnen geven en die als response alle gehele getallen tussen die cijfers geeft.

Onze HTTP GET Request zou er dus als volgt kunnen uitzien: `testapi.php?start=1&eind=10`.

Om die twee getallen uit de GET request te halen gaan we als volgt te werk:

```php
<?php
    // GET input ontvangen
    $start = (int)$_GET["start"];
    $eind = (int)$_GET["eind"];
    var_dump($start,$eind);
?>
```
We gebruiken `(int)` om zeker te zijn dat we integers definiëren i.p.v. strings.

### De array van cijfers maken 

We werken het gemakkelijkst met een array in PHP, je kan deze ook eenvoudig omvormen naar JSON.

```php
<?php
    // Array opbouwen
    $output = array();
    $index = 0;
    for ($i = $start; $i <= $eind; $i++) {
        $key = "getal_".$index;
        $output[$key]=$i;
        $index++;
    }
    var_dump($output);
?>
```

### Een JSON response versturen

Tot slot zetten we de header voor ons antwoord juist en geven we een response via `echo`.
M.b.v. `json_encode` kunnen we eenvoudig de array omvormen tot een JSON object.

```php
<?php
    // Response aanmaken
    // header instellen
    header('Content-Type: application/json');
    // response
    echo json_encode($output);
?>
```

## Project

::: tip Deel 2

Implementeer deel 2 (API) van het project.

:::

## Take-home opdracht

::: tip Voorbereiding Form validation via PHP

Om de leerstof van de volgende les nog beter te begrijpen bekijk je alvast hoofdstukken 1 t.e.m. 4 van de videotutorial [PHP with mySQL essential training 1 the basics](https://www.linkedin.com/learning/php-with-mysql-essential-training-1-the-basics) op LinkedIn Learing

:::