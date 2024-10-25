# Week 5 - PHP en mail

We maken gebruik van de mail service van onze web host.

De basis van het sturen van een mail ziet er als volgt uit:

```php
<?php
    $to_email = "recipient@mail.com";
    $subject = "Simple Email Test via PHP";
    $body = "Hi, This is test email send by PHP Script";
    $headers = "From: sender@mail.com";

    if (mail($to_email, $subject, $body, $headers)) {
        echo "Email successfully sent to $to_email...";
    } else {
        echo "Email sending failed...";
    }
?>
```

Test dit uit zodat je zeker bent dat de configuratie van je mail service in orde is.

## Een bevestigingsmail versturen

We starten met [een eenvoudige pagina](/files/mailform.zip) die een formulier bevat waar je een voornaam, naam en email adres kan ingeven.

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

We zullen een html mail versturen, hiervoor zullen we een css opmaak gebruiken. Plaats onderstaande styling in een bestand `mail_style.css` onder de folder `styles`.

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

We laten de APIkey even voor wat het is en starten nu met de opbouw van de mail om die vervolgens te versturen. We doen dit a.d.h.v. twee functies. We maken bovendien gebruik van een [extern CSS bestand](/files/mail_style.css) en een [logo in PNG formaat](/files/mail_logo.png).

```php
<?php
    function generateEmailContent(string $firstName, string $innerHtmlContent): string {
        $style = file_get_contents("./mail_style.css");
        $img = file_get_contents('./mail_logo.png');
        $imgdata = base64_encode($img);
        $content = "
            <html>
                <head>
                    <style>
                        {$style}
                    </style>
                </head>
                <body>
                    <div id=\"banner\">
                        <img id=\"logo\" src=\"data:image/png;base64,{$imgdata}\">
                        <div id=\"maintext\">
                            <h1>Internet of Things</h1>
                            <p>Design your future</p>                
                        </div>        
                    </div>
                    <div id=\"header\">
                        <p>Hi {$firstName}!</p>
                    </div>
                    <br>
                    <div id=\"inner\">
                        {$innerHtmlContent}
                    </div>
                    <br>
                    <div id=\"footer\">
                        <p>Regards,<p>
                        <p>The VIVES IoT team</p>
                    </div>                          
                </body>
            </html>";
        return $content;
    }

    function sendEmail($firstName, $subject, $toEmail, $innerHtmlContent): bool{
        $fromEmail = "mijn-domein@webhosting.be";
        $content = generateEmailContent($firstName, $innerHtmlContent);
        $headers = "MIME-Version: 1.0" . "\r\n"; 
        $headers .= "Content-type: text/html;charset=UTF-8" . "\r\n";
        $headers .= "From: {$fromEmail}" . "\r\n";
        $success = mail($toEmail, $subject, $content, $headers);
        return $success;
    }
?>
```

Deze laatste functie kunnen we nu als volgt oproepen:

```php
    $firstName = $_POST['first-name'];
    $lastName = $_POST['last-name'];
    $email = $_POST['email'];

    echo "<p>Thank you, {$firstName} {$lastName}!</p>";

    $innerHtmlContent = "
        <p>Thank you for participating in our quiz!</p>
        <p>Your score is ...<p>
    ";

    $toEmail = $email;
	$subject = "Your quiz score";

    $emailSent = sendEmail($firstName, $subject, $toEmail, $innerHtmlContent);

	if ($emailSent) {
		echo "<p>Please check your email to see the score...</p>";
	} else {
		echo "<p>Your score is ...</p>";
	}
```

## Een APIkey genereren

Bij het gebruik van een WEB API zal veelal een APIkey worden aangemaakt. Deze zal jouw user en wachtwoord combinatie vervangen om de API te gebruiken.

Een APIkey is een onleesbare stringcombinatie van tekens die als volgt kan gegenereerd worden (dit is slecht 1 van de mogelijkheden om dit te doen).

```php
    $uuid = vsprintf( '%s%s-%s-%s-%s-%s%s%s', str_split(bin2hex(random_bytes(16)), 4) );
```

## Project

::: tip Deel 5

Implementeer deel 5 (Mail) van het project.

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