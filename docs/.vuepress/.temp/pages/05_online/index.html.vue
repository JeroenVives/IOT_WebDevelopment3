<template><div><h1 id="online-styling-van-je-webpagina" tabindex="-1"><a class="header-anchor" href="#online-styling-van-je-webpagina"><span>Online styling van je webpagina</span></a></h1>
<h2 id="gebruik-maken-van-bootstrap" tabindex="-1"><a class="header-anchor" href="#gebruik-maken-van-bootstrap"><span>Gebruik maken van Bootstrap</span></a></h2>
<p>Bootstrap CSS is het toonaangevende CSS framework voor het ontwikkelen van responsive en mobile-first websites. Deze gratis en open-source toolkit wordt geleverd met een responsive grid systeem, globale CSS instellingen, uitgebreide vooraf gebouwde componenten waaronder knoppen, navigatiebalken en formulieren, en optionele JavaScript plugins om het ontwikkelproces te versnellen.</p>
<h3 id="downloaden-van-bootstrap" tabindex="-1"><a class="header-anchor" href="#downloaden-van-bootstrap"><span>Downloaden van Bootstrap</span></a></h3>
<p>Hiervoor ga je naar <a href="https://getbootstrap.com/docs/4.6/getting-started/download/" target="_blank" rel="noopener noreferrer">Bootstrap</a> en download je de Compiled versie van Bootstrap. Het Zip-bestand pak je uit in de root van je website en je hermoemt de folder gewoon 'Bootstrap'.</p>
<h3 id="laden-van-bootstrap" tabindex="-1"><a class="header-anchor" href="#laden-van-bootstrap"><span>Laden van Bootstrap</span></a></h3>
<p>Om Bootstrap te laden ga je op gelijkaardige manier te werk als je eigen CSS bestand.</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bootstrap/css/bootstrap.min.css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Als je ook het Javascript gedeelte van Bootstrap wil gebruiken voeg je volgende toe in de footer van je html.</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://code.jquery.com/jquery-3.3.1.slim.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bootstrap/js/bootstrap.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="een-greep-uit-de-vele-bootstrap-componenten" tabindex="-1"><a class="header-anchor" href="#een-greep-uit-de-vele-bootstrap-componenten"><span>Een greep uit de vele Bootstrap componenten</span></a></h3>
<p><img src="@source/05_online/images/afbeelding11.png" alt="download">
<img src="@source/05_online/images/afbeelding12.png" alt="download">
<img src="@source/05_online/images/afbeelding13.png" alt="download"></p>
<h3 id="gebruik-maken-van-bootstrap-css-opmaak" tabindex="-1"><a class="header-anchor" href="#gebruik-maken-van-bootstrap-css-opmaak"><span>Gebruik maken van Bootstrap CSS opmaak</span></a></h3>
<p>Het gebruik van een van deze Bootstrap componenten is heel eenvoudig. Het is gewoon een kwestie van verwijzen naar de juiste Bootstrap CSS klasse in de HTML markup. Bijvoorbeeld, hier is hoe we Bootstrap's primair gekleurde knop gebruiken op een webpagina...</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Primary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Waarom heeft de button 2 classes  <code v-pre>.btn</code> en <code v-pre>.btn-primary</code> ?</p>
<p>Bootstrap's componenten zijn gebouwd met een basis-modifier klasse aanpak. Dit betekent dat het grootste deel van de styling is ondergebracht in een basisklasse (bijv. .btn), terwijl stijlvariaties zijn beperkt tot modifier-klassen (bijv. .btn-primary).</p>
<p>Het principe van Bootstrap is dus vrij eenvoudig, het is alleen in het begin wat uitzoeken welke klasse je precies nodig hebt.</p>
<h2 id="gebruik-maken-van-fontawesome" tabindex="-1"><a class="header-anchor" href="#gebruik-maken-van-fontawesome"><span>Gebruik maken van FontAwesome</span></a></h2>
<p>Het gebruik van pictogrammen in webdesign is een beproefde methode om een website te moderniseren en de gebruikersstroom te sturen. Het toevoegen van pictogrammen aan de inhoud van uw site helpt een gebruiker de informatie die u probeert over te brengen beter te verwerken en biedt een visueel focuspunt dat een gebruiker naar een specifieke sectie leidt.</p>
<p>Grafische pictogrammen kunnen op tal van manieren worden gebruikt om uw webdesignproject meer pit te geven. U kunt ze gebruiken als visuele begeleiding van tekstgebieden of als op zichzelf staande links in situaties waar de ruimte beperkt is en tekstblokken niet haalbaar zijn binnen het ontwerp. Het is deze veelzijdigheid van iconen die ze zo nuttig en wijdverspreid maakt.</p>
<p>Gelukkig is het niet nodig om uw eigen pictogrammenset te maken. Font Awesome biedt een veelzijdig kader dat bijna elke icoonafbeelding bevat die u zich kunt voorstellen, samen met de benodigde schaalbaarheid en aanpassingsmogelijkheden. Font Awesome zal u vrijwel zeker tijd en geld besparen bij uw toepassing van specifieke pictogrammen.</p>
<h3 id="laden-van-fontaswesome" tabindex="-1"><a class="header-anchor" href="#laden-van-fontaswesome"><span>Laden van FontAswesome</span></a></h3>
<p>Om FontAwesome te laden ga je terug op dezelfde manier tewerk.</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://use.fontawesome.com/releases/v5.15.4/css/all.css<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/css<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="een-icoon-toevoegen" tabindex="-1"><a class="header-anchor" href="#een-icoon-toevoegen"><span>Een icoon toevoegen</span></a></h3>
<p>Laten we als voorbeeld eens het RSS icon toevoegen.</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fa fa-rss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Als je nu de grootte van het icoon wil aanpassen voeg je dit gewoon toe.</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fa fa-rss fa-3x<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Het is nu dus kwestie van het gewenste icoon op te zoeken op <a href="https://fontawesome.com/icons" target="_blank" rel="noopener noreferrer">FontAwesome</a> en de daarbij horende class toe te passen.</p>
<h2 id="oefening" tabindex="-1"><a class="header-anchor" href="#oefening"><span>Oefening</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Bootstrap en FontAwesome oefening</p>
<p>Maak de oefening op het elektronisch leerplatform en laad die op.</p>
</div>
<h2 id="take-home-opdracht" tabindex="-1"><a class="header-anchor" href="#take-home-opdracht"><span>Take-home opdracht</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Herhaling Bootstrap & FontAwesome</p>
<p>Om de nieuwe leerstof nog beter te begrijpen volg je onderstaande videotutorial:</p>
<ul>
<li>
<p><a href="https://www.linkedin.com/learning/bootstrap-4-essential-training" target="_blank" rel="noopener noreferrer">Bootstrap</a></p>
</li>
<li>
<p><a href="https://www.youtube.com/watch?v=rXiO4bm2Zpc" target="_blank" rel="noopener noreferrer">Font Awesome</a></p>
</li>
</ul>
<p>Na het volgen van deze online cursus vul je het vragenformulier in op Toledo.</p>
</div>
</div></template>


