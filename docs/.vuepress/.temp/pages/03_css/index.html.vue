<template><div><h1 id="de-opmaak-van-een-webpagina-met-css" tabindex="-1"><a class="header-anchor" href="#de-opmaak-van-een-webpagina-met-css"><span>De opmaak van een webpagina met CSS</span></a></h1>
<p><img src="@source/03_css/images/cssicon.png" alt="download"></p>
<p><a href="/files/cheatsheet_css.pdf">Hier</a> kan je een cheatsheet terugvinden ter ondersteuning van taken, toetsen, projecten en werkplekleren.</p>
<p><strong>C</strong>ascading <strong>S</strong>tyle <strong>S</strong>heets is een style sheet language die gebruikt wordt om de presentatie van een HTML document te beschrijven.</p>
<p>CSS is ontworpen om het scheiden van presentatie en inhoud van een webpagina mogelijk te maken. Hierdoor is het geheel beter toegankelijk, flexibeler en heeft een een betere controle op de presentatie karakteristieken. Meerdere webpagina's kunnen ook dezelfde opmaak delen door gebruik te maken van eenzelfde .css bestand.</p>
<p>Om beter te begrijpen hoe CSS werkt denk je best rond elk HTML element een kader. Was CSS eigenlijk doet is de opmaak van zo'n kader vastleggen.</p>
<h2 id="methoden" tabindex="-1"><a class="header-anchor" href="#methoden"><span>Methoden</span></a></h2>
<h3 id="inline" tabindex="-1"><a class="header-anchor" href="#inline"><span>Inline</span></a></h3>
<p>Inline opmaak gebeurt binnenin de HTML tags. Elke HTML tag kan voorzien worden van een css opmaak.</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">background-color</span><span class="token punctuation">:</span> green</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Een groot nadeel is dat je voor de volledige website deze opmaak moet herhalen voor elke HTML tag.
Het is dan ook aangeraden deze methode zo weinig mogelijk te gebruiken!</p>
<h3 id="internal" tabindex="-1"><a class="header-anchor" href="#internal"><span>Internal</span></a></h3>
<p>Bij deze methode ga je alle opmaak gaan samenbrengen in een style tag bovenaan de HTML pagina.</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">    <span class="token selector">body</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">background-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Dit is reeds een stukje beter dan de vorige methode, maar voor verschillende pagina's moet je terug die opmaak gaan kopieren wat de kans op fouten aanzienlijk verhoogd.
Probeer ook deze methode zoveel mogelijk te vermijden tenzij je een one-page-website maakt.</p>
<h3 id="external" tabindex="-1"><a class="header-anchor" href="#external"><span>External</span></a></h3>
<p>Deze methode gebruikt de informatie die in de style-tag stond bij de internal methode en plaatst deze in een .css bestand.</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">body</span> <span class="token punctuation">{</span></span>
<span class="line">   <span class="token property">background-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Dit .css bestand moet dan uiteraard gekoppeld worden aan de HTML pagina.</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/css<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/styles/style.css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="hint-container warning">
<p class="hint-container-title">'Good-practice'</p>
<p>Het werken met een external CSS file geniet de voorkeur, we zullen voor deze cursus dan ook enkel deze methode toepassen.</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">Tip</p>
<p>Als je meerdere stylesheets wil gebruiken en je html code hiermee niet wil overbelasten kan je de link naar jouw master style.css file in je html code plaatsen en vervolgens in je style.css de andere importeren.</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token atrule"><span class="token rule">@import</span> <span class="token string">"/styles/forms.css"</span></span>
<span class="line"></span>
<span class="line">html</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">background-color</span><span class="token punctuation">:</span> #334455<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<h2 id="overschrijven-overerven" tabindex="-1"><a class="header-anchor" href="#overschrijven-overerven"><span>Overschrijven &amp; overerven</span></a></h2>
<h3 id="overschrijven" tabindex="-1"><a class="header-anchor" href="#overschrijven"><span>Overschrijven</span></a></h3>
<p>CSS werkt volgens het principe dat de laatste aanpassing is wat effectief zichtbaar zal zijn.</p>
<p>bv. als in een CSS file (dezelfde of een file die er voor is ingeladen) staat:</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">div</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">background-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>in nadien schrijf je</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">div</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">padding</span><span class="token punctuation">:</span> 10<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>dan zal het resultaat voor een <code v-pre>&lt;DIV&gt;</code> element zijn</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">div</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">background-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">padding</span><span class="token punctuation">:</span> 10<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="overerven" tabindex="-1"><a class="header-anchor" href="#overerven"><span>Overerven</span></a></h3>
<p>CSS werkt volgens het principe van overerving. D.w.z. dat elementen die kinderen zijn van een ander element ook alle opmaak van dat element automatisch overerven.</p>
<h2 id="css-basis" tabindex="-1"><a class="header-anchor" href="#css-basis"><span>CSS basis</span></a></h2>
<h3 id="opmaak-set" tabindex="-1"><a class="header-anchor" href="#opmaak-set"><span>Opmaak set</span></a></h3>
<p>Een CSS opmaak set bestaat uit een selector en een definitie blok:</p>
<p><img src="@source/03_css/images/selector.gif" alt="download"></p>
<p>De selector wijst naar het HTML element dat je wil opmaken.</p>
<p>Het definitie blok bevat één of meerdere, door een puntkomma gescheiden, opmaken.
Elk van die opmaken bevat een CSS eigenschap en de waarde ervan gescheiden door een dubbelpunt.
Elke opmaak staat tussen haakjes.</p>
<h3 id="commentaar" tabindex="-1"><a class="header-anchor" href="#commentaar"><span>Commentaar</span></a></h3>
<p>In CSS start commentaar met een <code v-pre>/*</code> en eindigt met <code v-pre>*/</code>. Commentaar kan gerust over meerdere lijnen lopen.</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">p</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">/* This is a single-line comment */</span></span>
<span class="line">  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* This is</span>
<span class="line">a multi-line</span>
<span class="line">comment */</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="selector" tabindex="-1"><a class="header-anchor" href="#selector"><span>Selector</span></a></h3>
<ol>
<li>
<p>De selector selecteert een HTML element op basis van zijn element naam.</p>
<p>In dit voorbeeld worden alle <code v-pre>&lt;p&gt;</code> elementen op de pagina gecentreerd en krijgen een rode tekstkleur:</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">p</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>De id selector gebruikt het id attribuut van een HTML element een specifiek element te selecteren.</p>
<p>Een id van een element is uniek in een pagina, dus het wordt gebruikt om één element te selecteren.</p>
<p>Om een element met een specifiek id te selecteren schrijven we een <code v-pre>#</code> voor de id naam van dit element:</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">#para1</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>De class selector gebruik het class attribuut van een HTML element op dit te selecteren.</p>
<p>Om een element met een specifieke class te selecteren schrijven we een <code v-pre>.</code> voor de class naam van dit element:</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">.center</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Gecombineerde selector</p>
<p>In dit voorbeeld worden enkel <code v-pre>&lt;p&gt;</code> elementen met de class=&quot;center&quot; van een opmaak voorzien:</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">p.center</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Gegroepeerde selector</p>
<p>Hier worden alle h1, h2, en p elementen van een opmaak voorzien:</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"> <span class="token selector">h1, h2, p</span> <span class="token punctuation">{</span></span>
<span class="line">     <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line">     <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line"> <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Pseudo class selector</p>
<p>De pseudo class selector zal een toestand of relatie van een element selecteren:</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">a:hover</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">background-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Pseudo element selector</p>
<p>Een deel van een element selecteren:</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">p::first-line</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Attribuut selector</p>
<p>Je kan op basis van attribuut waarde iets selecteren:</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">input[type=button]</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="kleur-toepassen" tabindex="-1"><a class="header-anchor" href="#kleur-toepassen"><span>Kleur toepassen</span></a></h3>
<p>We kennen verschillende manieren om kleur toe te passen in CSS:</p>
<ol>
<li>
<p>Via de kleurnaam</p>
<p>Je kan refereren naar een kleur via zijn naam (<a href="https://www.w3schools.com/colors/colors_names.asp" target="_blank">lijst</a>)</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">h1</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Via de RGB waarde</p>
<p>Je kan naar een kleur refereren via zijn RBG waarde waarbij elke parameter (rood, groen, blauw) een kleurintensiteit tussen 0 en 255 weergeeft.</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">h1</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>60<span class="token punctuation">,</span> 179<span class="token punctuation">,</span> 113<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Door gebruik te maken van <strong>rgba(rood,groen,blauw,alpha)</strong> kan je transparantheid toevoegen. De alpha parameter is een nummer tussen 0.0 (volledig transparant) en 1.0 (totaal niet transparant)</p>
</li>
<li>
<p>Via de hex waarde</p>
<p>Je kan naar een kleur refereren via zijn hexadecimale waarde <strong>#rrggbb</strong> waarbij rr(rood), gg(groen) en bb(blauw) hexadecimale waarden zijn tussen 00 en FF.</p>
<p>bv. #ff0000 is weergegeven als rood omdat rr de waarde FF meekreeg terwijl de andere kleuren een waarde 00 kregen.</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">table</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> #6a5acd<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Via de HSL waarde</p>
<p>Je kan naar een kleur refereren via zijn tint, verzadiging en helderheid <strong>hsl(hue, saturation, lightness)</strong></p>
<p>Hue (tint) is het aantal graden op het kleurenwiel van 0 tot 360 waarbij 0 voor rood staat, 120 voor groen en 240 voor blauw.</p>
<p>Saturation (verzadeging) wordt uitgedrukt in percent waarbij 0% een grijstint is en 100% het volle kleur voorstelt.</p>
<p>Lightness (helderheid) wordt eveneens in percent uitgedrukt waarbij 0% zwart is en 100% wit.</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">.card</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">hsl</span><span class="token punctuation">(</span>39<span class="token punctuation">,</span> 100%<span class="token punctuation">,</span> 50%<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ook hier kan je gebruik maken van <strong>hsla(hue, saturation, lightness, alpha)</strong> om transparentheid toe te voegen.</p>
</li>
</ol>
<p>Als je een specifiek kleur zoekt kan deze <a href="https://www.w3schools.com/colors/colors_picker.asp" target="_blank" rel="noopener noreferrer">color picker</a> een handige tool zijn.</p>
<h3 id="eenheden" tabindex="-1"><a class="header-anchor" href="#eenheden"><span>Eenheden</span></a></h3>
<p>Je kan vrij door elkaar onderstaande eenheden gebruiken:</p>
<table>
<thead>
<tr>
<th>Eenheid</th>
<th>Type</th>
<th>Relatie</th>
<th>Voorbeeld</th>
</tr>
</thead>
<tbody>
<tr>
<td>px</td>
<td>absoluut</td>
<td>scherm pixels</td>
<td>p{font-size: 14px}</td>
</tr>
<tr>
<td>em</td>
<td>percentage</td>
<td>% van parent element font size</td>
<td>p{font-size: 1.2em}</td>
</tr>
<tr>
<td>rem</td>
<td>percentage</td>
<td>% van root element font size</td>
<td>p{font-size: 0.75rem}</td>
</tr>
<tr>
<td>%</td>
<td>percentage</td>
<td>% van parent afmeting of font size</td>
<td>.left {width: 20%}</td>
</tr>
</tbody>
</table>
<h2 id="css-eigenschappen" tabindex="-1"><a class="header-anchor" href="#css-eigenschappen"><span>CSS eigenschappen</span></a></h2>
<h3 id="background" tabindex="-1"><a class="header-anchor" href="#background"><span>Background</span></a></h3>
<p>Naast het aanpassen van de achtergrond kleur van een HTML element kan je ook een afbeelding laden als achtergrond.</p>
<ul>
<li><strong>background-image</strong> : specificeert de afbeelding die als achtergrond moet gebruikt worden. Standaard wordt deze afbeelding herhaalt over het volledige element.</li>
<li><strong>background-repeat</strong> : op welke manier die herhaling moet gebeuren.</li>
<li><strong>background-position</strong> : op welke positie die afbeelding moet geplaatst worden.</li>
<li><strong>background-attachment</strong> : specificeert of de afbeelding met de pagina moet mee scrollen of vast moet staan.</li>
</ul>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line">    <span class="token selector">body</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">"/images/img_tree.png"</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">background-repeat</span><span class="token punctuation">:</span> no-repeat<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">background-position</span><span class="token punctuation">:</span> right top<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">background-attachment</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="border" tabindex="-1"><a class="header-anchor" href="#border"><span>Border</span></a></h3>
<p>Met de CSS <strong>border</strong> eigenschap kan je de stijl, dikte en kleur van een border instellen.</p>
<p><img src="@source/03_css/images/afbeelding1.png" alt="download"></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line">    <span class="token selector">p</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">border-style</span><span class="token punctuation">:</span> solid<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="margin" tabindex="-1"><a class="header-anchor" href="#margin"><span>Margin</span></a></h3>
<p>Met de CSS <strong>Margin</strong> eigenschap kan je afstand creëren rond een element buiten de rand van het element.</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">p</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">margin-top</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">margin-right</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">margin-left</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">/* of via de korte notitie */</span></span>
<span class="line"><span class="token selector">p</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">margin</span><span class="token punctuation">:</span> 25px 50px 75px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="padding" tabindex="-1"><a class="header-anchor" href="#padding"><span>Padding</span></a></h3>
<p>De CSS <strong>padding</strong> eigenschap doet net hetzelfde als margin maar dan langs de binnenkant van de rand van een element.</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">div</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">padding-top</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">padding-right</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">padding-bottom</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">padding-left</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">/* of via de korte notitie */</span></span>
<span class="line"><span class="token selector">div</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">padding</span><span class="token punctuation">:</span> 25px 50px 75px 100px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/03_css/images/afbeelding2.png" alt="download"></p>
<h3 id="height-and-width" tabindex="-1"><a class="header-anchor" href="#height-and-width"><span>Height and width</span></a></h3>
<p>De CSS <strong>height</strong> en <strong>width</strong> eigenschappen leggen zoals je wel kunt vermoeden de hoogte en breedte van een element vast.</p>
<p>De waarde kan je op <code v-pre>auto</code> plaatsen of uitdrukken in <code v-pre>pixels</code> of <code v-pre>%</code>.</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">div</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">width</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">background-color</span><span class="token punctuation">:</span> powderblue<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="text" tabindex="-1"><a class="header-anchor" href="#text"><span>Text</span></a></h3>
<p>Naast de kleur kan van nog meerdere eigenschappen van tekst vastleggen.</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">h1</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">text-decoration</span><span class="token punctuation">:</span> underline<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">text-transform</span><span class="token punctuation">:</span> capitalize<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">text-indent</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">letter-spacing</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">line-height</span><span class="token punctuation">:</span> 1.8<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">word-spacing</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">text-shadow</span><span class="token punctuation">:</span> 3px 2px red<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">"Times New Roman"</span><span class="token punctuation">,</span> Times<span class="token punctuation">,</span> serif<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">Tip</p>
<p>Gebruik steeds <code v-pre>&quot; &quot;</code> rond tekst met spacies.</p>
</div>
<h3 id="links" tabindex="-1"><a class="header-anchor" href="#links"><span>Links</span></a></h3>
<p>Een hyperlink kan je als volgt stylen:</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token comment">/* Niet bezochte link */</span></span>
<span class="line"><span class="token selector">a:link</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* Bezochte link */</span></span>
<span class="line"><span class="token selector">a:visited</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* Mouse over link */</span></span>
<span class="line"><span class="token selector">a:hover</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> hotpink<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* Geselecteerde link */</span></span>
<span class="line"><span class="token selector">a:active</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lists" tabindex="-1"><a class="header-anchor" href="#lists"><span>Lists</span></a></h3>
<p>Je kan de lijst markering als volgt aanpassen:</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">ul.a</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">list-style-type</span><span class="token punctuation">:</span> circle<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">ul.b</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">list-style-type</span><span class="token punctuation">:</span> square<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">ol.c</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">list-style-type</span><span class="token punctuation">:</span> upper-roman<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">ol.d</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">list-style-type</span><span class="token punctuation">:</span> lower-alpha<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>of zelfs een afbeelding als markering gebruiken:</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">ul</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">list-style-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'/images/sqpurple.gif'</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tables" tabindex="-1"><a class="header-anchor" href="#tables"><span>Tables</span></a></h3>
<p>Je kan de opmaak van je tabel als volgt aanpassen:</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">table</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">border-collapse</span><span class="token punctuation">:</span> collapse<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">th, td</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid black<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">vertical-align</span><span class="token punctuation">:</span> bottom<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">padding</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="input" tabindex="-1"><a class="header-anchor" href="#input"><span>Input</span></a></h3>
<p>Je kan uiteraard een input veld volledig stijlen, een leuk weetje is dat je die ook kan voorzien van een icoon.</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">input#email</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">"images/email.png"</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/03_css/images/afbeelding3.png" alt="image"></p>
<h3 id="display" tabindex="-1"><a class="header-anchor" href="#display"><span>Display</span></a></h3>
<p>De CSS <strong>display</strong> eigenschap zal bepalen als en hoe een element getoond wordt.</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token comment">/*maak een blocklevel element inline*/</span> </span>
<span class="line"><span class="token selector">li</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">display</span><span class="token punctuation">:</span> inline<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">/*maak een inline element blocklevel*/</span></span>
<span class="line"><span class="token selector">span</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">/*verwijder het element*/</span></span>
<span class="line"><span class="token selector">h1.hidden</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="max-width" tabindex="-1"><a class="header-anchor" href="#max-width"><span>Max-width</span></a></h3>
<p>De CSS <strong>max-width</strong> eigenschap stelt een maximum breedte in van een element.</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">div.ex2</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">max-width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">border</span><span class="token punctuation">:</span> 3px solid #73AD21<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="float" tabindex="-1"><a class="header-anchor" href="#float"><span>Float</span></a></h3>
<p>De CSS <strong>float</strong> eigenschap maakt het mogelijk om een element zwevend op te stellen.</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token comment">/*afbeelding zwevend aan de rechterzijde*/</span></span>
<span class="line"><span class="token selector">img</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">Tip</p>
<p>Als een float element buiten het parent element komt dan kan je dat verhinderen door <code v-pre>overflow: hidden</code> toe te voegen aan het parent element.</p>
</div>
<h3 id="berekeningen" tabindex="-1"><a class="header-anchor" href="#berekeningen"><span>Berekeningen</span></a></h3>
<p>Het kan soms handig zijn dat je ipv een vaste waarde te gebruiken die kan berekenen.</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">ul</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">border</span><span class="token punctuation">:</span> 3px solid black<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% - 6px<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="oefening" tabindex="-1"><a class="header-anchor" href="#oefening"><span>Oefening</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">CSS oefening</p>
<p>Maak de oefening op het elektronisch leerplatform en laad die op.</p>
</div>
<h2 id="take-home-opdracht" tabindex="-1"><a class="header-anchor" href="#take-home-opdracht"><span>Take-home opdracht</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Herhaling CSS</p>
<p>Om de nieuwe leerstof nog beter te begrijpen volg je onderstaande videotutorial:</p>
<ul>
<li><a href="https://www.linkedin.com/learning/css-essential-training-3" target="_blank" rel="noopener noreferrer">CSS Essential Traininng</a> op LinkedIn Learning</li>
</ul>
<p>Na het volgen van deze online cursus krijg je een certificaat dat je oplaad op het elektronisch leerplatform.</p>
</div>
</div></template>


