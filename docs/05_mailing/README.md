# Week 5 - PHP en mail

We maken gebruik van de intern voorziene mailservice van XXAMP.

De basis van het sturen van een mail ziet er als volgt uit:

```php
<?php
    $to_email = "receipient@gmail.com";
    $subject = "Simple Email Test via PHP";
    $body = "Hi, This is test email send by PHP Script";
    $headers = "From: sender email";

    if (mail($to_email, $subject, $body, $headers)) {
        echo "Email successfully sent to $to_email...";
    } else {
        echo "Email sending failed...";
    }
?>
```

Test dit uit zodat je zeker bent dat je email configuratie in orde is.

## Een bevestigingsmail versturen

We starten met [een eenvoudige pagina](/files/mailform.zip) met een form waar je een voornaam, naam en email adres kan ingeven.

Bij een geldige submit kunnen we nu in het bestand `mailconfirm.php` een berichtje naar dat email adres sturen.

We starten met het ophalen van de POST data:

```php
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>form confirmation</title>
    </head>
    <body>
        <?php
            // Post data ophalen
            $firstname = $_POST['firstname']; 
            $name = $_POST['name']; 
            $email = $_POST['email']; 

            //debug: komt de info binnen ?
            echo "<p>Firstname = ".$firstname." Name = ".$name." Email = ".$email."</p>"; // mag straks terug weg

            // Genereren APIkey

            // Mail versturen
           
            // Content op pagina plaatsen
            
        ?>
    </body>
</html>
```

We zullen een html mail versturen, hiervoor zullen we een css opmaak gebruiken. Plaats onderstaande styling in een bestand `mailstyle.css` onder de folder `styles`.

```css
html{
    background-color: lightgray;
}

body{
    width: 800px;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: white;
    padding: 20px;
    font-family: Calibri;
    font-size: 18px;
}

#banner{
    margin: 0px;
    border-bottom: 2px solid;
    border-color:  rgb(224,0,32);
}

#logo {
    margin: 5px;
    height: 50px;
    float: left;
}

.nobullet {
    list-style-type: none;
}

#maintext h1 {
    margin: 0px;
    color: rgb(224,0,32);
    font-family: aller;
    font-size: 38px;
    width: 100%;
    text-align: center;
}

#maintext p {
    margin: 0px;
    margin-bottom: 50px;
    color: black;
    width: 100%;
    text-align: center;
}

#info{
    margin: 10px;
    margin-bottom: 40px;
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-color: rgb(255, 255, 255);
    box-shadow: 10px 8px 16px 0px rgba(224,0,32,0.4);
}
```

We laten de APIkey even voor wat het is en starten nu met de opbouw van de mail om die vervolgens te versturen.

```php
    // Genereren APIkey
    $apikey = "voorlopige test";

    // subject definieren
    $subject = "Copy of your contact request";

    // server bestanden inladen
    $content = file_get_contents("./styles/mailstyle.css");
    $img = file_get_contents('./images/logo.png');
    $imgdata = base64_encode($img);

    // html body definieren                
    $body = <<<EOF
            <html>
            <head>
            <style>
            $content
            </style>
            </head>
            <body>
            <div id="banner">
                <img id="logo" src='data:image/x-icon;base64,$imgdata'>
                <div id="maintext">
                    <h1>VIVES Internet of Things</h1>
                    <p>Design your future</p>                
                </div>        
            </div>
    
            <p>Hello $firstname,</p>
            <p>Thank you for registering on the VIVES IoT page!</p>
            <p>We have registered the following credentials:<p>
            <ul>
                <li>Firstname: <b>$firstname</b></li>
                <li>Name: <b>$name</b></li>
                <li>Email: <b>$email</b></li>                                    
            </ul>
            
            <div id="info">
                <p>You can use your personal APIkey for IoT purposes.</p>
                <ul>
                    <li>Your <b>APIkey</b> = $apikey</li>
                </ul>
            </div>

            <p>Regards,<p>
            <p>The VIVES IoT team.</p>                                
            </body>
            </html>
            EOF;

            // Set content-type header for sending HTML email 
            $headers = "MIME-Version: 1.0" . "\r\n"; 
            $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n"; 

            // Mail versturen
            $result=mail($email, $subject, $body, $headers);   
```
Tot slot kunnen we de confirmatie tekst voorzien:

```php
    // Content op pagina plaatsen
    echo "<div class=\"response\" style=\"background-color:#b3e6b3;color:#267326;border-radius:5px;width:90%;padding:12px 20px;margin:10px\">";
    echo "<p>".$firstname.", you succesfully registrated.</p>";
    echo "<p>A confirmationmail has been send to ".$email." with your APIkey</p>";
    echo "</div>"; 
```

## Een APIkey genereren

Bij het gebruik van een WEB API zal veelal een APIkey worden aangemaakt. Deze zal jou user en wachtwoord combinatie vervangen om de API te gebruiken.

Een APIkey is een onleesbare stringcombinatie van tekens die als volgt kan gegenereerd worden (dit is slecht 1 van de mogelijkheden om dit te doen).

```php
    // functie om een APIkey te genereren
    function getGUID(){
        if (function_exists('com_create_guid')){
            return com_create_guid();
        }else{
            mt_srand((double)microtime()*10000);//optional for php 4.2.0 and up.
            $charid = strtoupper(md5(uniqid(rand(), true)));
            $hyphen = chr(45);// "-"
            $uuid =
                substr($charid, 0, 8).$hyphen
                .substr($charid, 8, 4).$hyphen
                .substr($charid,12, 4).$hyphen
                .substr($charid,16, 4).$hyphen
                .substr($charid,20,12);
            return $uuid;
        }
    }
```

Je kan nu in de PHP code de APIkey met deze functie genereren:
```php
// Genereren APIkey
    $apikey = getGUID();
```

## Klasopdracht

::: tip Back-end IoT applicatie

Verder werken aan de info pagina en WEBApi van de klassikale opdracht

:::

## Take-home opdracht

::: tip Voorbereiding PHP en cookies & sessions

Om de leerstof van de volgende les nog beter te begrijpen bekijk je alvast hoofdstuk 4 van de videotutorial [PHP with mySQL essential training 2 build a CMS](https://www.linkedin.com/learning/php-with-mysql-essential-training-2-build-a-cms/work-with-cookies-14247738) op LinkedIn Learing.

Andere relevantie informatiebronnen zijn:

* [TutorialRepublic - PHP cookies](https://www.tutorialrepublic.com/php-tutorial/php-cookies.php)
* [TutorialRepublic - PHP sessions](https://www.tutorialrepublic.com/php-tutorial/php-sessions.php)
* [Guru99 - cookies and sessions](https://www.guru99.com/cookies-and-sessions.html)
* Hoofdstuk 4 van de videotutorial [PHP with mySQL essential training 2 build a CMS](https://www.linkedin.com/learning/php-with-mysql-essential-training-2-build-a-cms) op LinkedIn Learing.

:::