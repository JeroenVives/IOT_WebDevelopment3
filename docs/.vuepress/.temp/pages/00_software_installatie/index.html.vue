<template><div><h1 id="installatie-van-software-gebruikt-in-deze-cursus-moet-nadien-weg" tabindex="-1"><a class="header-anchor" href="#installatie-van-software-gebruikt-in-deze-cursus-moet-nadien-weg"><span>Installatie van software gebruikt in deze cursus (moet nadien weg)</span></a></h1>
<p>Voor het vak webdevelopment heb je eveneens behoefte aan ontwikkelingssoftware.</p>
<h2 id="visual-studio-code" tabindex="-1"><a class="header-anchor" href="#visual-studio-code"><span>Visual Studio Code</span></a></h2>
<p><img src="@source/00_software_installatie/images/codeicon.png" alt="download"></p>
<p>Om alle files voor een webpagina aan te maken, te visualiseren en te debuggen gebruiken we Visual Studio Code en Chrome.</p>
<p>We veronderstellen even dat Chrome reeds op je laptop geïnstalleerd staat.</p>
<p>Voor de installatie van Visual Studio code ga je naar <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">https://code.visualstudio.com/</a> en klik je op <strong>download for windows</strong>.</p>
<p>Volg de standaard installatie maar vink volgende 2 vinkjes zeker aan:</p>
<p><img src="@source/00_software_installatie/images/afbeelding1.png" alt="download"></p>
<h3 id="extensies" tabindex="-1"><a class="header-anchor" href="#extensies"><span>Extensies</span></a></h3>
<p>Na de installatie start je Visual Studio Code op en installeer je de volgende extensies:</p>
<ul>
<li>'Live Server'</li>
<li>'PHP Extension Pack'</li>
</ul>
<h3 id="php-debugging" tabindex="-1"><a class="header-anchor" href="#php-debugging"><span>PHP debugging</span></a></h3>
<p>Eenmaal Apache en PHP op je systeem geïnstalleerd zijn open je de folder <code v-pre>C:\Apache\htdocs</code> in Visual Studio Code.</p>
<p>Je gaat vervolgens naar het tabblad RUN (CTRL-SHIFT-D), en klikt op <code v-pre>create a launch.json file</code>, kies voor PHP als envirenment.</p>
<h2 id="node-js" tabindex="-1"><a class="header-anchor" href="#node-js"><span>Node.js</span></a></h2>
<p><img src="@source/00_software_installatie/images/nodeicon.png" alt="download"></p>
<p>Node.js is een applicatie die toelaat om JavaScript uit te voeren.</p>
<p>Om dit te installeren ga je naar <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">Nodejs.org</a> en kies je voor de <strong>LTS</strong> versie.</p>
<p>Tijdens de installatie gebruik je gewoon de default settings.</p>
<div class="hint-container caution">
<p class="hint-container-title">Let op</p>
<p>Node.js beschikt over een eigen console, gebruik die nooit, we gebruiken steeds powershell.</p>
</div>
<h2 id="node-red" tabindex="-1"><a class="header-anchor" href="#node-red"><span>Node-red</span></a></h2>
<p><img src="@source/00_software_installatie/images/redicon.png" alt="download"></p>
<div class="hint-container warning">
<p class="hint-container-title">Merk op</p>
<p>Node.js moet reeds op je systeem geïnstalleerd staan voor je Node-red kan installeren.</p>
</div>
<p>Open een powershell venster en tik het volgende in:</p>
<div class="language-powershell line-numbers-mode" data-highlighter="prismjs" data-ext="powershell" data-title="powershell"><pre v-pre><code><span class="line">npm install <span class="token operator">-</span>g node-red</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Na de installatie kan je node-red opstarten door in het powershell venster het volgende in te tikken:</p>
<div class="language-powershell line-numbers-mode" data-highlighter="prismjs" data-ext="powershell" data-title="powershell"><pre v-pre><code><span class="line">node-red</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Om te werken in node-red kan je gewoon naar <a href="http://127.0.0.1:1880" target="_blank" rel="noopener noreferrer">http://127.0.0.1:1880</a> surfen.</p>
<h2 id="apache" tabindex="-1"><a class="header-anchor" href="#apache"><span>Apache</span></a></h2>
<p><img src="@source/00_software_installatie/images/apache.png" alt="download"></p>
<h3 id="visual-studio-2019-redistributable" tabindex="-1"><a class="header-anchor" href="#visual-studio-2019-redistributable"><span>Visual Studio 2019 Redistributable</span></a></h3>
<p>Voor je Apache kan installeren moet je <strong>Visual Studio 2019 Redistributable</strong> downloaden en installeren.</p>
<p>In google tik je de zoekterm &quot;Visual Studio 2019 Redistributable&quot; en kies je de bovenste link van Microsoft.</p>
<p>Download nu het <strong>vc_redist.x64.exe</strong> bestand en installeer het.
Mogelijks moet je hierna je computer heropstarten.</p>
<h3 id="apache-installeren" tabindex="-1"><a class="header-anchor" href="#apache-installeren"><span>Apache installeren</span></a></h3>
<p>Je kan de laatste versie van Apache voor Windows <a href="https://www.apachelounge.com/download" target="_blank" rel="noopener noreferrer">hier</a> downloaden.</p>
<p>Kies de laatste versie <strong>Apache x.x.xx Win64</strong> ( Zip-bestand).</p>
<p>Open het ZIP-bestand en kopieer de map <code v-pre>Apache24</code> naar <code v-pre>C:\</code> en hernoem vervolgens deze map naar <code v-pre>Apache</code>.</p>
<h3 id="configureren-en-starten-van-apache" tabindex="-1"><a class="header-anchor" href="#configureren-en-starten-van-apache"><span>Configureren en starten van Apache</span></a></h3>
<p>Open het bestand <a href="c:%5CApache%5Cconf%5Chttpd.conf" target="_blank" rel="noopener noreferrer">C:\Apache\conf\httpd.conf</a> en zoek naar :</p>
<ul>
<li><code v-pre>Define SRVROOT &quot;C:/Apache24&quot;</code> en wijzig dit in <code v-pre>Define SRVROOT &quot;C:/Apache&quot;</code></li>
<li><code v-pre>#ServerName www.example.com:80</code> en wijzig dit in <code v-pre>ServerName localhost</code></li>
</ul>
<p>Bewaar het bestand en sluit jou editor af.</p>
<p>Om te testen of de Apache server werkt starten we deze even op:</p>
<ul>
<li>
<p>Open powershell als admin en ga naar de folder <code v-pre>C:\Apache\bin</code></p>
</li>
<li>
<p>Start de server op door <code v-pre>.\httpd.exe</code> in te tikken gevolgd door enter (mogelijks moet je toestemming geven in je firewall).</p>
<blockquote>
<p>Als je een foutmelding krijgt omtrent de gebruikte poort 80 zal je in de <code v-pre>httpd.conf</code> file volgende aanpassingen moeten maken :</p>
<ul>
<li>listen 8000</li>
<li>ServerName localhost:8000</li>
</ul>
</blockquote>
</li>
<li>
<p>Met de powershell nog steeds open ga je naar je browser en surf je naar http://localhost. Als je &quot;It works!&quot; ziet verschijnen dan draait de Apache server.</p>
</li>
<li>
<p>Om de server te stoppen ga je terug naar powershell en druk je <code v-pre>CTRL+C</code>.</p>
</li>
</ul>
<h3 id="apache-als-een-windows-service-starten" tabindex="-1"><a class="header-anchor" href="#apache-als-een-windows-service-starten"><span>Apache als een Windows Service starten</span></a></h3>
<p>In plaats van de server telkens te starten via powershell kunnen we hier ook een windows service van maken die we kunnen starten en stoppen.</p>
<p>Om de service te installeren openen we terug powershell en gaan we naar de folder <code v-pre>C:\Apache\bin</code> en tikken we <code v-pre>.\httpd.exe -k install</code> in gevolgd door enter.</p>
<p>Via het configuratiescherm kan je nu naar <strong>services</strong> gaan, de Apache24 Service lokaliseren en de service starten.</p>
<p>Je kan op dezelfde wijze de service stoppen door op stop te klikken.</p>
<p>Indien je later geen behoefte meer hebt aan de service kan je die verwijderen door terug powershell te openen, naar de folder <code v-pre>C:\Apache\bin</code> te gaan en <code v-pre>.\httpd.exe -k uninstall</code> in te tikken gevolgd door enter.</p>
<h4 id="troubleshooting" tabindex="-1"><a class="header-anchor" href="#troubleshooting"><span>Troubleshooting</span></a></h4>
<p>Wat als poort 80 reeds bezet is? Je kan jou Apache server ook via een andere poort laten werken. Ga naar <code v-pre>C:\Apache\conf\httpd.conf</code> en wijzig daar het volgende:</p>
<div class="language-conf line-numbers-mode" data-highlighter="prismjs" data-ext="conf" data-title="conf"><pre v-pre><code><span class="line">Servername localhost:80 // wijzig de 80 naar bv 8000</span>
<span class="line">...</span>
<span class="line">listen 80 // wijzig ook hier de 80 naar dezeflde poort als je hierboven hebt gekozen</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Na elke wijziging aan deze file moet je de Apacheserver herstarten om de nieuwe instellingen te implementeren.</p>
<h3 id="videotutorials" tabindex="-1"><a class="header-anchor" href="#videotutorials"><span>Videotutorials</span></a></h3>
<ul>
<li><a href="https://www.linkedin.com/learning/installing-apache-mysql-and-php-3/install-apache-on-windows" target="_blank" rel="noopener noreferrer">Installatie</a></li>
<li><a href="https://www.linkedin.com/learning/installing-apache-mysql-and-php-3/configure-and-run-apache-on-windows" target="_blank" rel="noopener noreferrer">Configuratie</a></li>
<li><a href="https://www.linkedin.com/learning/installing-apache-mysql-and-php-3/run-apache-as-a-windows-service" target="_blank" rel="noopener noreferrer">Apache service</a></li>
</ul>
<h2 id="php-with-apache" tabindex="-1"><a class="header-anchor" href="#php-with-apache"><span>PHP with Apache</span></a></h2>
<p><img src="@source/00_software_installatie/images/php.png" alt="download"></p>
<h3 id="php-installeren" tabindex="-1"><a class="header-anchor" href="#php-installeren"><span>PHP installeren</span></a></h3>
<p>Je kan de laatste versie van PHP voor Windows <a href="https://windows.php.net/download" target="_blank" rel="noopener noreferrer">downloaden</a>, kies de versie <strong>X64 Thread Safe</strong> en download het ZIP bestand.</p>
<p>Pak nu het ZIP bestand uit naar <code v-pre>C:\PHP</code>.</p>
<h3 id="php-instellen-in-apache" tabindex="-1"><a class="header-anchor" href="#php-instellen-in-apache"><span>PHP instellen in Apache</span></a></h3>
<p>Open het bestand <a href="c:%5CApache%5Cconf%5Chttpd.conf" target="_blank" rel="noopener noreferrer">C:\Apache\conf\httpd.conf</a> en voeg hetvolgende onderaan het bestand toe:</p>
<div class="language-conf line-numbers-mode" data-highlighter="prismjs" data-ext="conf" data-title="conf"><pre v-pre><code><span class="line">LoadModule php_module &quot;C:/PHP/php8apache2_4.dll&quot;  #correct this to your version of php</span>
<span class="line">AddHandler application/x-httpd-php .php</span>
<span class="line">PHPIniDir &quot;C:/PHP&quot;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="php-debugging-extensie-installeren" tabindex="-1"><a class="header-anchor" href="#php-debugging-extensie-installeren"><span>PHP debugging extensie installeren</span></a></h3>
<p>Je kan de XDebug extensie <a href="https://xdebug.org/download" target="_blank" rel="noopener noreferrer">hier</a> downloaden, kies voor de hoogste versie voor windows 64 bit.</p>
<p>Plaats het bestand vervolgens in <code v-pre>C:\PHP\ext</code>.</p>
<h3 id="php-ini-file" tabindex="-1"><a class="header-anchor" href="#php-ini-file"><span>PHP ini-file</span></a></h3>
<p>Maak een kopie van het bestand <code v-pre>C:\PHP\php.ini-development</code> en noem het <code v-pre>C:\PHP\php.ini</code>.</p>
<p>Open het bestand in jou favoriete editor en voeg onderaan het volgende toe:</p>
<div class="language-ìni line-numbers-mode" data-highlighter="prismjs" data-ext="ìni" data-title="ìni"><pre v-pre><code><span class="line">[XDebug]</span>
<span class="line">zend_extension=[naam van de xdebug extensie file]</span>
<span class="line">xdebug.mode = debug</span>
<span class="line">xdebug.start_with_request = yes</span>
<span class="line">xdebug.discover_client_host = 1</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ga nu op zoek naar <code v-pre>;extension=curl</code> en verwijder de <code v-pre>;</code> zodat de cURL module actief wordt.</p>
<p>Ga op zoek naar <code v-pre>;extension=mysqli</code> en verwijder de <code v-pre>;</code> zodat de mysqli module actief wordt.</p>
<p>Ga op zoek naar <code v-pre>;extension=openssl</code> en verwijder de <code v-pre>;</code> zodat de openssl module actief wordt.</p>
<p>Start of herstart de Apache service in Windows zodat de nieuwe instellingen van kracht worden.</p>
<p>Maak nu een testbestand <code v-pre>C:\Apache\htdocs\phpinfo.php</code> aan met volgende inhoud:</p>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre><code><span class="line"><span class="token php language-php"><span class="token delimiter important">&lt;?php</span></span>
<span class="line">    <span class="token function">phpinfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token delimiter important">?></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In jou browser surf je nu naar <code v-pre>localhost\phpinfo.php</code>, de informatiepagina van php zou moeten verschijnen.</p>
<h4 id="troubleshooting-1" tabindex="-1"><a class="header-anchor" href="#troubleshooting-1"><span>Troubleshooting</span></a></h4>
<p>Soms werken bepaalde bibliotheken zoals XDebug en cURL niet omdat Windows de exe of dll niet weet staan. Windows gebruikt hiervoor de <code v-pre>path</code> environment variable. Om ontbrekende folders hieraan toe te voegen druk je op start en tik je <code v-pre>environment variable</code> of <code v-pre>omgevingsvariabelen</code> in. Daarna vindt je een variable <code v-pre>path</code> die je kan bewerken en er de folders <code v-pre>C:\PHP</code> en <code v-pre>C:\PHP\ext</code> aan toevoegen.</p>
<p>Mocht dit voor cURL geen afdoende oplossing zijn kan je ook het bestand <code v-pre>C:\PHP\libssh2.dll</code> kopieren naar de map <code v-pre>C:\Apache\bin</code>.</p>
<h3 id="videotutorial" tabindex="-1"><a class="header-anchor" href="#videotutorial"><span>Videotutorial</span></a></h3>
<ul>
<li><a href="https://www.linkedin.com/learning/installing-apache-mysql-and-php-3/install-php-with-apache-on-windows" target="_blank" rel="noopener noreferrer">Installatie</a></li>
</ul>
<h2 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql"><span>MySQL</span></a></h2>
<p><img src="@source/00_software_installatie/images/mysql.png" alt="download"></p>
<h3 id="installatie" tabindex="-1"><a class="header-anchor" href="#installatie"><span>Installatie</span></a></h3>
<p>De installatie van MySQL is iets minder voor de hand liggend, hieronder vindt je een korte beschrijving van het installatie proces, doe je dit liever a.d.h.v. een video kan je dit <a href="https://www.linkedin.com/learning/installing-apache-mysql-and-php-3/install-php-with-apache-on-windows" target="_blank" rel="noopener noreferrer">hier</a> bekijken.</p>
<p>Download MySQL voor Windows <a href="https://dev.mysql.com/downloads/mysql/" target="_blank" rel="noopener noreferrer">hier</a>, kies de MySQL Installer MSI en vervolgens het grootste bestand van de twee beschikbare opties.</p>
<p>Start de installatie door op het bestand te dubbelklikken en kies voor de optie <strong>Developer Default</strong>.</p>
<p>Als er meldingen komen van &quot;Failing requirements&quot; kan je die gewoon negeren en op &quot;Next&quot; klikken (klik &quot;Yes&quot; als je een popup venster krijgt).</p>
<p>Vervolgens klik je gewoon op &quot;Execute&quot;.</p>
<p>Als dit klaar is klik je op &quot;Next&quot; om de MySQL server te configureren. Laat de default optie &quot;Standalone MySQL Server&quot;staan en klik terug &quot;Next&quot; tot je aan de pagina met &quot;Root Account Password&quot; komt.</p>
<p>Tik hier een paswoord in dat je zeker kan onthouden!</p>
<p>Klik vervolgens terug &quot;Next&quot; tot je op &quot;Execute&quot; kan klikken en vervolgens 2x op &quot;Finish&quot;.</p>
<p>Klik nu &quot;Next&quot; tot je &quot;Connect To Server&quot; krijgt en log in door je paswoord in te voeren en op &quot;Check&quot; te klikken.</p>
<p>Klik terug op &quot;Execute&quot; en dan &quot;Finish&quot;.</p>
<p>Op het venster &quot;Installation Complete&quot; verwijder je de vinkjes bij beide opties en klik vervolgens op &quot;Finish&quot;.</p>
<h3 id="management" tabindex="-1"><a class="header-anchor" href="#management"><span>Management</span></a></h3>
<h4 id="mysql-workbench" tabindex="-1"><a class="header-anchor" href="#mysql-workbench"><span>MySQL Workbench</span></a></h4>
<p>Bekijk <a href="https://www.linkedin.com/learning/installing-apache-mysql-and-php-3/use-mysql-workbench-on-windows" target="_blank" rel="noopener noreferrer">hier</a> even kort hoe je de meegeleverde MySQL Workbench kan gebruiken.</p>
<h4 id="phpmyadmin" tabindex="-1"><a class="header-anchor" href="#phpmyadmin"><span>phpMyAdmin</span></a></h4>
<p>Je kan phpMyAdmin eenvoudig installeren via Composer, indien je die nog niet hebt staan kan je die <a href="https://getcomposer.org/download/" target="_blank" rel="noopener noreferrer">hier</a> downloaden.</p>
<p>Open vervolgens je Powershell in de folder <code v-pre>C:\Apache\htdocs</code> en start het volgend commando om phpMyAdmin te installeren:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">composer</span> create-project phpmyadmin/phpmyadmin</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Na de installatie kan je nu phpmyadmin gebruiken door in browser te surfen naar <code v-pre>localhost/phpmyadmin/index.php</code>.</p>
<h2 id="wordpress" tabindex="-1"><a class="header-anchor" href="#wordpress"><span>Wordpress</span></a></h2>
<p><img src="@source/00_software_installatie/images/wordpress.png" alt="download"></p>
<h3 id="installatie-1" tabindex="-1"><a class="header-anchor" href="#installatie-1"><span>Installatie</span></a></h3>
<p>Download Worpress van <a href="https://wordpress.org/download/" target="_blank" rel="noopener noreferrer">wordpress.org</a> en pak de bestanden uit naar <code v-pre>C:\Apache\htdocs\wordpress</code>.</p>
<p>Maak een nieuwe database aan via jou favorite tool.</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> wordpress<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">USE</span> wordpress<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">CREATE</span> <span class="token keyword">USER</span> <span class="token string">'webuser'</span><span class="token variable">@'localhost'</span> IDENTIFIED <span class="token keyword">BY</span> <span class="token string">"secretpassword"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">GRANT</span> <span class="token keyword">ALL</span> <span class="token keyword">ON</span> wordpress<span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">TO</span> <span class="token string">'webuser'</span>@'localhost’<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Hernoem het bestand <code v-pre>wp-config-sample.php</code> naar <code v-pre>wp-config.php</code> en wijzig de database details.</p>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre v-pre><code><span class="line"><span class="token doc-comment comment">/** The name of the database for WordPress */</span></span>
<span class="line"><span class="token function">define</span><span class="token punctuation">(</span> <span class="token string single-quoted-string">'DB_NAME'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'wordpress'</span> <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/** MySQL database username */</span></span>
<span class="line"><span class="token function">define</span><span class="token punctuation">(</span> <span class="token string single-quoted-string">'DB_USER'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'webuser'</span> <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/** MySQL database password */</span></span>
<span class="line"><span class="token function">define</span><span class="token punctuation">(</span> <span class="token string single-quoted-string">'DB_PASSWORD'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'secretpassword'</span> <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/** MySQL hostname */</span></span>
<span class="line"><span class="token function">define</span><span class="token punctuation">(</span> <span class="token string single-quoted-string">'DB_HOST'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'localhost'</span> <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ga naar <code v-pre>localhost/wordpress/wp-admin/install.php</code> en volg de instructies om de installatie af te ronden.</p>
<p>Je kan je blog nu opzetten via <code v-pre>http://localhost/wordpress/wp-admin/index.php</code>.</p>
<p>Meer info over het gebruik van Wordpress kan je terugvinden op de LinkedIn Learning:</p>
<ul>
<li><a href="https://www.linkedin.com/learning/wordpress-5-essential-training" target="_blank" rel="noopener noreferrer">Wordpress 5 essential traning</a></li>
</ul>
</div></template>


