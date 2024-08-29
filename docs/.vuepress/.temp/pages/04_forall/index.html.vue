<template><div><h1 id="een-webpagina-voor-iedereen" tabindex="-1"><a class="header-anchor" href="#een-webpagina-voor-iedereen"><span>Een webpagina voor iedereen</span></a></h1>
<p>Responsive design is een methode binnen webdesign die ervoor zorgt dat je webcontent meeverandert met de verschillende afmetingen van schermen van apparaten of vensters op die apparaten.</p>
<p>Zo kan je content op een desktopscherm bijvoorbeeld worden gesplitst in verschillende kolommen, aangezien zo’n scherm breed genoeg is om meerdere kolommen leesbaar weer te geven.</p>
<p>Maar als je dezelfde content in meerdere kolommen op een smartphone wil tonen, kan dit er voor zorgen dat de content voor de bezoekers lastig leesbaar is.</p>
<p>Responsive design maakt het mogelijk om verschillende lay-outs van je content en bijbehorend design af te leveren aan verschillende apparaten, afhankelijk van hun schermgrootte.</p>
<h2 id="de-bouwstenen-van-responsive-webdesign" tabindex="-1"><a class="header-anchor" href="#de-bouwstenen-van-responsive-webdesign"><span>De bouwstenen van responsive webdesign</span></a></h2>
<p>In dit deel zullen we het hebben over de fundering van responsive webdesign en de verschillende bouwstenen die je daarvoor nodig hebt.</p>
<h3 id="css-en-html" tabindex="-1"><a class="header-anchor" href="#css-en-html"><span>CSS en HTML</span></a></h3>
<p>De basis voor responsive design is de juiste combinatie van HTML en CSS</p>
<p>Zo kan je bijvoorbeeld de breedte van alle HTML afbeeldingen aanpassen per element, op deze manier:</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">img</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Of we kunnen ons juist richten op een specifieke class, “full-width-img” door vooraf een punt toe te voegen.</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">.full-width-img</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Je kan het ontwerp ook op andere aspecten bewerken, naast hoogte, breedte en kleur. Door CSS op deze manier te gebruiken maak je een ontwerp responsive, zodra je het combineert met een techniek die “media query” wordt genoemd.</p>
<h3 id="media-query-s" tabindex="-1"><a class="header-anchor" href="#media-query-s"><span>Media query’s</span></a></h3>
<p>Een media query controleert welk apparaat wordt gebruikt en is een belangrijk deel van CSS3. Het is namelijk het onderdeel waarmee je content kan laten weergeven afhankelijk van bepaalde factoren, zoals schermgrootte of resolutie.</p>
<p><img src="@source/04_forall/images/afbeelding5.png" alt="download"></p>
<p>Je kan het vergelijken met een “if” clausule die je kan vinden in sommige programmeertalen, aangezien het eigenlijk controleert of het zichtbare deel van een scherm breed genoeg of te breed is, voordat een bepaald stuk code wordt uitgevoerd.</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 780px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token selector">.full-width-img</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> 90%<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Is het scherm tenminste 780 pixels breed, dan zullen afbeeldingen met de “full-width-img” class 90% van het scherm gebruiken en automatisch gecentreerd worden in gelijke marges aan beide kanten.</p>
<h3 id="fluid-lay-outs" tabindex="-1"><a class="header-anchor" href="#fluid-lay-outs"><span>Fluid lay-outs</span></a></h3>
<p>Een fluid lay-out (vloeiende lay-out) is een essentieel onderdeel van modern responsive design. In de goede oude tijd kon je een statische waarde voor elke HTML element instellen, bijvoorbeeld 600 pixels.</p>
<p>Een fluid lay-out is echter afhankelijk van dynamische waardes, zoals een percentage van de breedte van het scherm.</p>
<p><img src="@source/04_forall/images/afbeelding6.png" alt="download"></p>
<p>Deze methode past dynamisch de grootte van elementen aan op basis van de grootte van het scherm.</p>
<h3 id="flexbox-lay-outs" tabindex="-1"><a class="header-anchor" href="#flexbox-lay-outs"><span>Flexbox lay-outs</span></a></h3>
<p>Alhoewel een op percentages gebaseerde lay-out wordt gezien als ‘fluid’, vinden veel designers en webdevelopers dit nog niet dynamisch of flexibel genoeg. Flexbox is een CSS module die is ontworpen als efficiëntere manier om diverse elementen in een lay-out te plaatsen, zelfs wanneer de grootte van de inhoud van een container niet bekend is.</p>
<p>Een flexibele container past de items in de container aan naar gelang de beschikbare ruimte. Deze flex containers hebben een aantal unieke property’s, zoals justify-content, die je niet kan aanpassen bij een normaal HTML element.</p>
<p><img src="@source/04_forall/images/afbeelding7.png" alt="download"></p>
<p>Dit is vrij geavanceerd design. Als je dit in je design wil gaan toepassen, raden we je aan om de <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank" rel="noopener noreferrer">CSS Tricks’ flexbox gids</a> te lezen.</p>
<h3 id="responsive-afbeeldingen" tabindex="-1"><a class="header-anchor" href="#responsive-afbeeldingen"><span>Responsive afbeeldingen</span></a></h3>
<p>De meest basale uitvoering van responsive afbeeldingen volgt hetzelfde concept als fluid lay-out, waarbij een dynamische unit wordt gebruikt om de breedte of hoogte in te stellen. Het stukje CSS code dat we eerder al noemde, zorgt hier al voor:</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">img</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>De % unit schat een percentage in van de breedte of hoogte van de viewport en zorgt dat de afbeelding de juiste verhouding heeft voor het scherm.</p>
<p>Het probleem met deze aanpak is dat elke gebruiker de afbeelding op ware grootte moet downloaden, zelfs op mobiele apparaten.</p>
<p>Om verschillende versies voor verschillende apparaten te kunnen leveren, moet je het HTML <code v-pre>srcset</code> attribuut in je img tags opnemen, zodat je meer dan één afbeeldingsgrootte kan kiezen.</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>large-img.jpg 1024w,</span>
<span class="line">  middle-img.jpg 640w,</span>
<span class="line">  small-img.jpg  320w<span class="token punctuation">"</span></span></span>
<span class="line">  <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small.jpg<span class="token punctuation">"</span></span></span>
<span class="line"><span class="token punctuation">/></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="gebruikelijke-limieten-voor-responsiviteit" tabindex="-1"><a class="header-anchor" href="#gebruikelijke-limieten-voor-responsiviteit"><span>Gebruikelijke limieten voor responsiviteit</span></a></h3>
<p>Om met media query’s te werken, moet je nadenken over “responsive breakpoints” oftewel limieten voor schermgroottes. Een limiet of breakpoint is de breedte van het scherm waarop je een bepaalde media query gebruikt om nieuwe CSS stijlen te implementeren.</p>
<h3 id="gebruikelijke-schermgroottes" tabindex="-1"><a class="header-anchor" href="#gebruikelijke-schermgroottes"><span>Gebruikelijke schermgroottes</span></a></h3>
<ul>
<li>Mobiel: 360 x 640</li>
<li>Mobiel: 375 x 667</li>
<li>Mobiel: 360 x 720</li>
<li>iPhone X: 375 x 812</li>
<li>Pixel 2: 411 x 731</li>
<li>Tablet: 768 x 1024</li>
<li>Laptop: 1366 x 768</li>
<li>High-res laptop of desktop: 1920 x 1080</li>
</ul>
<p>Kies je voor een mobile-first aanpak, met één kolom en kleinere lettertypen dan de basislay-out, dan hoef je geen mobiele limieten te implementeren, tenzij je het ontwerp wil optimaliseren voor specifieke modellen.</p>
<p><img src="@source/04_forall/images/afbeelding8.png" alt="download"></p>
<p>Je kan zodoende een eenvoudig responsive ontwerp maken met slechts twee limieten: één voor tablets en één voor laptops en desktops.</p>
<h3 id="zo-maak-je-je-website-responsive" tabindex="-1"><a class="header-anchor" href="#zo-maak-je-je-website-responsive"><span>Zo maak je je website responsive</span></a></h3>
<p>Nu je de bouwblokken kent, is het tijd om je website responsive te maken.</p>
<h4 id="stel-de-limieten-van-je-media-query-in-responsive-breakpoints" tabindex="-1"><a class="header-anchor" href="#stel-de-limieten-van-je-media-query-in-responsive-breakpoints"><span>Stel de limieten van je media query in (responsive breakpoints)</span></a></h4>
<p>Stel de limieten van je media query in op de unieke eisen van je ontwerp. Wil je bijvoorbeeld de Bootstap standaard volgen binnen je ontwerp, dan krijg je de volgende media query’s:</p>
<ul>
<li>576px voor verticale telefoons</li>
<li>768px voor tablets</li>
<li>992px voor laptops</li>
<li>1200px voor grotere apparaten</li>
</ul>
<h4 id="stel-de-grootte-van-elementen-in-met-percentages-of-maak-een-css-grid-lay-out" tabindex="-1"><a class="header-anchor" href="#stel-de-grootte-van-elementen-in-met-percentages-of-maak-een-css-grid-lay-out"><span>Stel de grootte van elementen in met percentages of maak een CSS Grid lay-out</span></a></h4>
<p>De eerste en belangrijkste stap is het instellen van verschillende groottes voor de verschillende elementen in de lay-out, afhankelijk van de media query of het limiet van het scherm.</p>
<p>Het aantal lay-out containers dat je hebt, hangt natuurlijk af van je ontwerp, maar de meeste websites focussen op de elementen hieronder:</p>
<ul>
<li>Wrapper of container</li>
<li>Header</li>
<li>Content</li>
<li>Zijbalk</li>
<li>Footer</li>
</ul>
<p><img src="@source/04_forall/images/afbeelding9.png" alt="download"></p>
<p>Met een mobile-first aanpak, kan je eerst de belangrijkste elementen in de lay-out stylen (let op: bevat geen media query voor de eenvoudigste stijl die je gebruikt voor een standaard smartphone in normale stand):</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">#wrapper</span> <span class="token punctuation">{</span><span class="token property">width</span><span class="token punctuation">:</span>95%<span class="token punctuation">;</span>  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">#header</span> <span class="token punctuation">{</span><span class="token property">width</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">#content</span> <span class="token punctuation">{</span><span class="token property">width</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">#sidebar</span> <span class="token punctuation">{</span><span class="token property">width</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">#footer</span> <span class="token punctuation">{</span><span class="token property">width</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">// Small devices <span class="token punctuation">(</span>landscape phones<span class="token punctuation">,</span> 576px and up<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 576px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span> ... <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">// Medium devices <span class="token punctuation">(</span>tablets<span class="token punctuation">,</span> 768px and up<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 768px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token selector">#wrapper</span> <span class="token punctuation">{</span><span class="token property">width</span><span class="token punctuation">:</span>90%<span class="token punctuation">;</span>  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line">  <span class="token selector">#content</span> <span class="token punctuation">{</span><span class="token property">width</span><span class="token punctuation">:</span>70%<span class="token punctuation">;</span> <span class="token property">float</span><span class="token punctuation">:</span>left<span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line">  <span class="token selector">#sidebar</span> <span class="token punctuation">{</span><span class="token property">width</span><span class="token punctuation">:</span>30%<span class="token punctuation">;</span> <span class="token property">float</span><span class="token punctuation">:</span>right<span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">// Large devices <span class="token punctuation">(</span>desktops<span class="token punctuation">,</span> 992px and up<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 992px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span> ... <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">// Extra large devices <span class="token punctuation">(</span>large desktops<span class="token punctuation">,</span> 1200px and up<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 1200px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token selector">#wrapper</span> <span class="token punctuation">{</span><span class="token property">width</span><span class="token punctuation">:</span>90%<span class="token punctuation">;</span>  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ga je liever voor percentages, dan beheerst het “float” attribuut aan welke kant van het scherm een element verschijnt: links of rechts.</p>
<p>Wil je verder dan de basis gaan en een responsive design van topkwaliteit maken, dan zul je de CSS flexbox lay-out onder de knie moeten krijgen, inclusief bijbehorende attributen zoals box-sizing en flex.</p>
<h4 id="implementeer-responsive-afbeeldingen" tabindex="-1"><a class="header-anchor" href="#implementeer-responsive-afbeeldingen"><span>Implementeer responsive afbeeldingen</span></a></h4>
<p>Een manier om ervoor te zorgen dat er niks misgaat met je afbeeldingen, is het gebruiken van een dynamische waarde voor je afbeelding, zoals we eerder al zagen.</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">img</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Maar hiermee vraag je nog steeds vrij veel van mobiele bezoekers wanneer ze je website bezoeken.</p>
<p>Let erop dat je altijd een <code v-pre>srcset</code> gebruikt met verschillende afmetingen van je afbeeldingen, voordat je afbeeldingen toevoegt aan je pagina’s.</p>
<p>Om dit handmatig te doen kost nogal wat tijd, maar met een CMS zoals WordPress wordt dit automatisch gedaan wanneer je mediabestanden uploadt.</p>
<h4 id="responsive-lettertypen-voor-de-tekst-van-je-website" tabindex="-1"><a class="header-anchor" href="#responsive-lettertypen-voor-de-tekst-van-je-website"><span>Responsive lettertypen voor de tekst van je website</span></a></h4>
<p>De belangrijkste focus van responsive webdesign richt zich vaak op de responsiviteit van de lay-outblocks, elementen en media. Pas daarna denken mensen (misschien) nog eens aan de tekst.</p>
<p>Maar wil je écht goed responsive ontwerp, dan moet je ook de grootte van je lettertype aanpassen zodat deze zich aanpast aan de schermgrootte.</p>
<p>De makkelijkste manier om dit te doen is het instellen van een statische waarde voor de grootte van lettertype, zoals 22 px, en die voor elke media query aan te passen</p>
<p>Je kan tegelijkertijd meerdere tekstelementen targeten door een komma te gebruiken om elementen in een lijst te zetten.</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 992px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token selector">body, p, a, h4</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cross-browser-webdesign" tabindex="-1"><a class="header-anchor" href="#cross-browser-webdesign"><span>Cross-browser webdesign</span></a></h2>
<p>De websites die je maakt, moeten er geweldig uitzien en een sterke indruk achterlaten bij klanten en gebruikers, ongeacht of ze Opera, Chrome, Safari of iets anders gebruiken.</p>
<p>Cross-browser compatibiliteit is een stap die vaak over het hoofd wordt gezien bij het maken van een nieuwe website. Vaak gebruiken de ontwerpers en ontwikkelaars maar één browser om de site te maken en ze controleren hem misschien snel op een handvol andere browsers voordat ze het project als voltooid beschouwen. Dit kan voldoende zijn voor eenvoudige sites die niet bedrijfskritisch zijn, maar als je complexere sites bouwt, kan jouw site er heel anders uitzien op andere browsers.</p>
<p>Natuurlijk is het testen van elke pagina op elke verschillende combinatie van apparaat, platform en browser bijna onmogelijk, en erg kostbaar. Hoe kunnen we er dan voor zorgen dat onze site er op zoveel mogelijk browsers zo uitziet en zich zo gedraagt als we voor ogen hebben?</p>
<p><img src="@source/04_forall/images/afbeelding10.png" alt="download"></p>
<h3 id="cross-browser-compatibiliteit-in-de-hand-werken" tabindex="-1"><a class="header-anchor" href="#cross-browser-compatibiliteit-in-de-hand-werken"><span>Cross-browser compatibiliteit in de hand werken</span></a></h3>
<h4 id="herhaal-jezelf-niet" tabindex="-1"><a class="header-anchor" href="#herhaal-jezelf-niet"><span>Herhaal jezelf niet</span></a></h4>
<p>Bij het ontwikkelen van code werk je zoveel mogelijk met externe bestanden voor gelijke code en herhaal je de code niet over en over.
Op die manier moet je bij problemen slechts op één plaats aanpassingen doorvoeren.</p>
<h4 id="definieer-een-doctype" tabindex="-1"><a class="header-anchor" href="#definieer-een-doctype"><span>Definieer een doctype</span></a></h4>
<p>Aan het begin van je HTML-bestand(en) definieer je de taal waarin de code is geschreven, zodat browsers het correct interpreteren. Bijvoorbeeld, in HTML5 is de doctype declaratie eenvoudigweg:</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="valideer-uw-code" tabindex="-1"><a class="header-anchor" href="#valideer-uw-code"><span>Valideer uw code</span></a></h4>
<p>Foutieve HTML- en CSS-code kan ervoor zorgen dat je website zich in alle browsers op verschillende manieren misdraagt. De bugs kunnen moeilijk te ontdekken zijn en de webpagina zal nog steeds typisch opgebouwd worden met kleine, schijnbaar willekeurige problemen wat het op zijn beurt moeilijk maakt om te debuggen.</p>
<p>Een manier om dit te vermijden is uw code te valideren. Je kunt <a href="https://validator.w3.org/#validate_by_input+with_options" target="_blank" rel="noopener noreferrer">HTML</a> en <a href="https://jigsaw.w3.org/css-validator/#validate_by_input" target="_blank" rel="noopener noreferrer">CSS</a> valideren met de W3C validators, of extensies installeren in je IDE die je code controleren terwijl je hem schrijft.</p>
<h4 id="gebruik-een-css-reset" tabindex="-1"><a class="header-anchor" href="#gebruik-een-css-reset"><span>Gebruik een CSS reset</span></a></h4>
<p>Standaard kunnen browsers hun eigen standaard stijlen toepassen op uw website. Chrome past bijvoorbeeld een standaardmarge toe op uw pagina, deze is klein, maar merkbaar als u een donkerdere achtergrondkleur gebruikt.</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token comment">/*  CSS resetcode */</span></span>
<span class="line"><span class="token selector">html, body, div, span, applet, object, iframe,</span>
<span class="line">h1, h2, h3, h4, h5, h6, p, blockquote, pre,</span>
<span class="line">a, abbr, acronym, address, big, cite, code,</span>
<span class="line">del, dfn, em, img, ins, kbd, q, s, samp,</span>
<span class="line">small, strike, strong, sub, sup, tt, var,</span>
<span class="line">b, u, i, center,</span>
<span class="line">dl, dt, dd, ol, ul, li,</span>
<span class="line">fieldset, form, label, legend,</span>
<span class="line">table, caption, tbody, tfoot, thead, tr, th, td,</span>
<span class="line">article, aside, canvas, details, embed, </span>
<span class="line">figure, figcaption, footer, header, hgroup, </span>
<span class="line">menu, nav, output, ruby, section, summary,</span>
<span class="line">time, mark, audio, video</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">border</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">font-size</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">font</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">vertical-align</span><span class="token punctuation">:</span> baseline<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="controleer-de-ondersteuning-voor-uw-css-eigenschappen" tabindex="-1"><a class="header-anchor" href="#controleer-de-ondersteuning-voor-uw-css-eigenschappen"><span>Controleer de ondersteuning voor uw CSS eigenschappen</span></a></h4>
<p>Verschillende browsers ondersteunen niet allemaal dezelfde CSS eigenschappen, wat perfect bruikbaar is in de ene browser bestaat misschien niet in de andere. Bijvoorbeeld, de backdrop-filter eigenschap wordt volledig ondersteund door Chrome, maar is onbestaande in Firefox. Als je erop vertrouwt, dan zal het onverwacht gedrag voor jouw Firefox-gebruikers zijn.</p>
<p>Met tools zoals <a href="https://caniuse.com/" target="_blank" rel="noopener noreferrer">Can I Use</a> kan je CSS-eigenschappen controleren op hun browserondersteuning. Dit betekent dat je niet veel tijd zult verspillen aan het ontwerpen met een slecht ondersteunde eigenschap, alleen om het later opnieuw te moeten ontwikkelen.</p>
<h4 id="maak-responsieve-websites" tabindex="-1"><a class="header-anchor" href="#maak-responsieve-websites"><span>Maak responsieve websites</span></a></h4>
<p>Responsive webdesign zorgt ervoor dat het ontwerp zich aanpast aan elk apparaat waarop het kan worden bekeken, van desktop tot mobiel en alles daartussenin. Het is belangrijk om ervoor te zorgen dat alle functionaliteit mogelijk is en dat alle informatie toegankelijk is op elk apparaat en elke browser, ongeacht de grootte.</p>
<h4 id="zorg-voor-alternatieven" tabindex="-1"><a class="header-anchor" href="#zorg-voor-alternatieven"><span>Zorg voor alternatieven</span></a></h4>
<p>Er kunnen gevallen zijn waarin we niet kunnen vermijden een eigenschap te gebruiken die niet volledig wordt ondersteund door andere browsers. In dat geval kan het nodig zijn om een alternatief bestand aan te bieden voor specifieke browsers. Bijvoorbeeld:</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>”styles.css”</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>”stylesheet”/</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token comment">&lt;!--[if lte IE 8]></span>
<span class="line"> &lt;link href=”ie-styles.css” rel=”stylesheet”/></span>
<span class="line">&lt;![endif]--></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="maak-gebruik-van-cloudgebaseerde-browsertests" tabindex="-1"><a class="header-anchor" href="#maak-gebruik-van-cloudgebaseerde-browsertests"><span>Maak gebruik van cloudgebaseerde browsertests</span></a></h4>
<p>In een ideale wereld zou je in staat zijn om jouw website op veel verschillende apparaten en browsers persoonlijk te testen. Maar in kleinere teams is dit misschien niet mogelijk, dus zou je kunnen kijken naar cloudgebaseerde browsertests waarbij jouw website tegelijkertijd op veel verschillende combinaties van browsers kan worden uitgevoerd. <a href="https://www.lambdatest.com/" target="_blank" rel="noopener noreferrer">LambdaTest</a>,<a href="https://www.browserstack.com/" target="_blank" rel="noopener noreferrer">BrowserStack</a> en <a href="https://smartbear.com/ppc/testcomplete/web-testing/" target="_blank" rel="noopener noreferrer">SmartBear</a> bieden allemaal de mogelijkheid om cross-browser compatibiliteit snel en efficiënt te testen.</p>
<h2 id="oefening" tabindex="-1"><a class="header-anchor" href="#oefening"><span>Oefening</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Responsief webdesign oefening</p>
<p>Maak de oefening op het elektronisch leerplatform en laad die op.</p>
</div>
<h2 id="take-home-opdracht" tabindex="-1"><a class="header-anchor" href="#take-home-opdracht"><span>Take-home opdracht</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Herhaling Responsief webdesign</p>
<p>Om de nieuwe leerstof nog beter te begrijpen volg je onderstaande videotutorial:</p>
<ul>
<li><a href="https://www.youtube.com/watch?v=ACZgsnJIKxc" target="_blank" rel="noopener noreferrer">The Beginner’s Guide to Responsive Web Design</a> op YouTube.</li>
</ul>
<p>Na het volgen van deze online cursus vul je het vragenformulier in op Toledo.</p>
</div>
</div></template>


