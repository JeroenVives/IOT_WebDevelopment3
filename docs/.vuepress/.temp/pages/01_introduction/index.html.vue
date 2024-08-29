<template><div><h1 id="introductie-in-web-development" tabindex="-1"><a class="header-anchor" href="#introductie-in-web-development"><span>Introductie in web development</span></a></h1>
<h2 id="hoe-werkt-internet" tabindex="-1"><a class="header-anchor" href="#hoe-werkt-internet"><span>Hoe werkt internet ?</span></a></h2>
<p>We maken met onze PC een verbinding met het internet via een Internet Service Provider (ISP). Als we in onze browser (bv. Google Chrome) een domein naam intikken om een website te bezoeken dan gebeuren er verschillende zaken:</p>
<ul>
<li>Je browser zal eerst een Domain Name System (DNS) raadplegen die de door jou ingetikte domein naam zal vertalen naar een IP adres.</li>
<li>Nu kan je browser de juiste webserver die de website hosts contacteren om de betreffende webpagina op te vragen.</li>
<li>Die webserver zal op zijn beurt de files (HTML, CSS en JS) aanleveren om de website op te bouwen.</li>
<li>Je browser zal nu de ontvangen files gebruiken om je webpagina te tonen.</li>
</ul>
<p><img src="@source/01_introduction/images/afbeelding2.jpg" alt="download"></p>
<p>Laten we hier even dieper op inzoemen.</p>
<h2 id="wat-is-het-internet-eigenlijk" tabindex="-1"><a class="header-anchor" href="#wat-is-het-internet-eigenlijk"><span>Wat is 'het internet' eigenlijk ?</span></a></h2>
<p>We kunnen stellen dat 'het internet' een infrastructuur is die we gebruiken om web informatie van een server tot bij een gebruiker te krijgen.</p>
<p>Die infrastructuur ziet er als volgt uit:</p>
<p><img src="@source/01_introduction/images/internet.png" alt="download"></p>
<p>Internet is eigenlijk een netwerk van netwerken. Om deze informatiestroom op gang te krijgen zijn enkele afspraken (protocollen) van kracht.</p>
<h2 id="hoe-vind-een-browser-de-juiste-weg-in-het-internet" tabindex="-1"><a class="header-anchor" href="#hoe-vind-een-browser-de-juiste-weg-in-het-internet"><span>Hoe vind een browser de juiste weg in het internet ?</span></a></h2>
<h3 id="domain-name-server" tabindex="-1"><a class="header-anchor" href="#domain-name-server"><span>Domain Name Server</span></a></h3>
<p><strong>D</strong>omain <strong>N</strong>ame <strong>S</strong>ervers zijn zoals het adressboek voor websites. Als je een domain naam in je browser intikt, dan raadpleegt de browser een DNS server om het werkelijke adres (IP-adres) van de server die de website hosts te weten. Nu kan de browser naar dat adres een vraag (HTTP boodschap) sturen.</p>
<h3 id="ip-adres" tabindex="-1"><a class="header-anchor" href="#ip-adres"><span>IP adres</span></a></h3>
<p>Net zoals je thuisadres is dit een uniek nummer voor elk toestel die op een netwerk gekoppeld is.</p>
<h4 id="ipv4" tabindex="-1"><a class="header-anchor" href="#ipv4"><span>IPv4</span></a></h4>
<p>Momenteel wordt er voornamelijk gebruik gemaakt van IPv4. Deze is 32 bits en bestaat uit vier getallen tussen de 0 en 255 gescheiden door een punt. Een voorbeeld van een IPv4 adres is: “192.168.1.1”. Met deze constructie zijn er iets meer dan vier miljard adressen mogelijk.</p>
<h4 id="ipv6" tabindex="-1"><a class="header-anchor" href="#ipv6"><span>IPv6</span></a></h4>
<p>Echter door de groei van het aantal apparaten dat verbinding maakt met het internet zijn er te weinig adressen beschikbaar. Om dit probleem op te lossen is IPv6 in het leven geroepen welke veel meer adressen beschikbaar heeft. Ipv6 is 128 bits waardoor er triljoenen adressen beschikbaar zijn per aardbewoner. Een voorbeeld notatie van een IPv6 adres is: “fdb5:3682:01d0:6648:0000:0000:0000:0001” overigens kan dit verkort worden genoteerd tot: “fdb5:3682:01d0:6648::1”. IPv6 wordt gefaseerd ingevoerd en kan naast IPv4 gebruikt worden. Sommige apparaten maken al gebruik van IPv6 maar de meeste maken nog gebruik van IPv4.</p>
<h2 id="welke-protocollen-gebruikt-internet" tabindex="-1"><a class="header-anchor" href="#welke-protocollen-gebruikt-internet"><span>Welke protocollen gebruikt internet ?</span></a></h2>
<h3 id="ip-protocol" tabindex="-1"><a class="header-anchor" href="#ip-protocol"><span>IP-protocol</span></a></h3>
<p>Het <strong>I</strong>nternet <strong>P</strong>rotocol definieerd de manier waarop informatie is verzonden d.m.v pakketjes langs een willekeurige weg naar de ontvanger. Die informatie kan allerhande data bevatten. Dit protocol gebruikt de 'best-effort' techniek om die data te bezorgen zonder enige vorm van fout- of datastroom controle.</p>
<p><img src="@source/01_introduction/images/afbeelding2.png" alt="download"></p>
<h3 id="tcp-protocol" tabindex="-1"><a class="header-anchor" href="#tcp-protocol"><span>TCP-protocol</span></a></h3>
<p>Het <strong>T</strong>ransmission <strong>C</strong>ontrol <strong>P</strong>rotocol verzekerd het aanleveren van IP pakketjes zonder verlies van pakketjes en zorgt er ook voor dat deze in de juiste volgorde aangeleverd worden. De tijd nodig om de data te versturen is onderschikt aan de zekerheid dat alle data correct aangeleverd wordt.</p>
<p><img src="@source/01_introduction/images/afbeelding3.png" alt="download"></p>
<h3 id="http-protocol" tabindex="-1"><a class="header-anchor" href="#http-protocol"><span>HTTP-protocol</span></a></h3>
<p><strong>H</strong>yper<strong>T</strong>ext <strong>T</strong>ransfer <strong>P</strong>rotocol is een applicatie protocol dat de taal definieerd om clients en servers te laten communiceren. De browser speelt hier de rol van HTTP-client en de webserver de HTTP-server. De communicatie tussen beiden
bestaat uit een of meerdere request bericht(en) en (verstuurd door de browser) en met telkens (hopelijk)
een bijbehorend response bericht van de server.</p>
<p>Elke request die de browser naar de server stuurt bevat een URL waarmee een resource
geïdentificeerd wordt (bv. een document, een video, een afbeelding, ...) waarin de browser
geïnteresseerd is. De respons wordt teruggestuurd op basis van het IP‐adres van de client computer.</p>
<p><img src="@source/01_introduction/images/afbeelding4.png" alt="download"></p>
<div class="hint-container tip">
<p class="hint-container-title">Oefening</p>
<p>Duid de verschillende onderdelen van de volgende URL aan.</p>
<p>https://www.bol.com/nl/p/hoe‐werkt‐dat‐nou/9200000057347012/?country=BE&amp;suggestionType=browse#product_alternatives</p>
</div>
<p>Elke response die de server terugstuurt bevat een status code die aangeeft om wat voor soort response het gaat (alles ok, server overbelast, toegang tot resource verboden, etc).</p>
<div class="hint-container tip">
<p class="hint-container-title">Oefening</p>
<p>Zoek onderstaande HTTP status codes op die in een response kunnen voorkomen en schrijf hun betekenis op. Omcirkel deze die je al eens bent tegengekomen bij het surfen. Schrijf ook een gepaste hoofding boven de kolommen.</p>
<table>
<thead>
<tr>
<th></th>
<th></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>200</td>
<td>301</td>
<td>400</td>
<td>500</td>
</tr>
<tr>
<td>204</td>
<td>302</td>
<td>401</td>
<td>503</td>
</tr>
<tr>
<td></td>
<td>303</td>
<td>404</td>
<td></td>
</tr>
</tbody>
</table>
</div>
<h2 id="wat-is-nu-web-development" tabindex="-1"><a class="header-anchor" href="#wat-is-nu-web-development"><span>Wat is nu web development ?</span></a></h2>
<p>Onder web development verstaan we het aanmaken van files die content zal beschikbaar stellen aan de gebruiker en interactie mogelijk zal maken.
We onderscheiden hier <strong>Front-end</strong> webdevelopment en <strong>Back-end</strong> webdevelopment.</p>
<p><img src="@source/01_introduction/images/afbeelding6.png" alt="download"></p>
<h3 id="front-end-web-development" tabindex="-1"><a class="header-anchor" href="#front-end-web-development"><span>Front-end web development</span></a></h3>
<p>Front-end of client-side is een term gebruikt om duidelijk te maken dat de verwerking door de browser van de client gebeurt.</p>
<p>We onderscheiden hier:</p>
<ul>
<li>Een <strong>HTML</strong> bestand die zorgt voor de structuur van de pagina</li>
<li>Een <strong>CSS</strong> bestand die zorgt voor de opmaak van de pagina</li>
<li>Een <strong>JS</strong> bestand die zorgt voor dynamische mogelijkheden van de pagina</li>
</ul>
<h3 id="back-en-web-development" tabindex="-1"><a class="header-anchor" href="#back-en-web-development"><span>Back-en web development</span></a></h3>
<p>Back-end of server-side is een term gebruikt om duidelijk te maken dat de verwerking door de webserver gebeurt.</p>
<p>We onderscheiden hier:</p>
<ul>
<li>Een <strong>PHP</strong> bestand die zorgt voor het genereren van HTML, CSS en JS bestanden die dan aan de browser kunnen aangeleverd worden.</li>
<li>Een <strong>Database</strong> bv MYSQL die er voor zorgt dat data bewaard en geraadpleegd kan worden.</li>
</ul>
</div></template>


