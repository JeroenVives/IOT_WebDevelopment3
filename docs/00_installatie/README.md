# Installatie software

Om de PHP taal lokaal te kunnen hosten hebben we Apache en PHP nodig en om data te gebruiken ook MySQL.
Om dit operating systeem onafhankelijk te maken is er gekozen om te werken met het installatiepakket XAMPP.

Ga naar [de website van XAMPP](https://www.apachefriends.org/download.html) en download de hoogste PHP versie voor jou operating systeem.
Installeer vervolgens met alle default waarden.

::: warning Installatie path
Zorg er voor dat je installatie path `c:\xampp` is.
:::

Configuratie's kan je doen via het XAMPP controle panel.

Wat als poort 80 reeds bezet is? Je kan jou Apache server ook via een andere poort laten werken.
Ga via het XAMPP control panel naar de `httpd.conf` file en maak onderstaande aanpassingen:

```conf
Servername localhost:80 // wijzig de 80 naar bv 8000
...
listen 80 // wijzig ook hier de 80 naar dezeflde poort als je hierboven hebt gekozen
```
Om te controleren dat je Apache server en PHP goed werken kan je het volgende testbestand `phpinfo.php` aanmaken in de folder `C:\xampp\htdocs`:

```php
<?php
    phpinfo();
?>
```
Tik vervolgens in je browser `localhost[:jouw poort]/phpinfo.php`(het : met jouw poort is enkel nodig als je niet met poort 80 werkt).
Als alles goed is krijg je nu een overzicht van PHP. 

<!-- TODO: uittesten en debugging extensie toevoegen -->

Om een mail te kunnen versturen vanuit onze localhost moeten we enkele instellingen juist zetten.

1. Een google account voorbereiden

* Je maakt hiervoor best een nieuw GMail-account aan die voor ontwikkelingsdoeleinden kan gebruiken.
* Log via een incognitovenster in op het nieuwe GMail-account.
* Kies in je accountbeheer voor dubbele authenticatie (Zorg er voor dat je jouw gsm bij de hand hebt).
* Kies voor App-wachtwoorden, als app kies je email en als apparaat windows computer.
* Klik vervolgens op genereren en kopieer de toegangscode zodat je die straks kan gebruiken.

2. Open het bestand `php.ini` via het XAMPP control panel en pas volgende regels aan:

```ini
[mail function] 
SMTP=smtp.gmail.com
smtp_port=587
sendmail_from = YourGmailId@gmail.com
sendmail_path = "\"C:\xampp\sendmail\sendmail.exe\" -t"
```

3. Ga naar de folder `C:\xampp\sendmail`, open er het bestand `sendmail.ini` en pas volgende regels aan (gewoon de ~ verwijderen):

```ini
[sendmail]
smtp_server=smtp.gmail.com
smtp_port=587
error_logfile=error.log
debug_logfile=debug.log
auth_username=YourGmailId@gmail.com
auth_password=Your-Gmail-app-pasword
force_sender=YourGmailId@gmail.com
```
::: warning Restart Apache server
Je zal de apache server moeten herstarten, je kan dit via XAMPP control panel doen.
:::