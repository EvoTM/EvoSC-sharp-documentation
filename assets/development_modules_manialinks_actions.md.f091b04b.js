import{_ as e,o as a,c as o,S as n}from"./chunks/framework.f15d8f8c.js";const g=JSON.parse('{"title":"Manialink Actions","description":"","frontmatter":{},"headers":[],"relativePath":"development/modules/manialinks/actions.md","filePath":"development/modules/manialinks/actions.md"}'),t={name:"development/modules/manialinks/actions.md"},s=n(`<h1 id="manialink-actions" tabindex="-1">Manialink Actions <a class="header-anchor" href="#manialink-actions" aria-label="Permalink to &quot;Manialink Actions&quot;">​</a></h1><p>To communicate user actions from manialinks to the controller, EvoSC make use of the page action callbacks from XMLRPC which can be triggered through various ways in manialinks.</p><h2 id="routing" tabindex="-1">Routing <a class="header-anchor" href="#routing" aria-label="Permalink to &quot;Routing&quot;">​</a></h2><p>Every Manialink action has a so called &quot;route&quot; which you can call to trigger an action. The routing system is very similar to HTTP API routing.</p><p>The difference however, is that Manialink routes does not start with a slash. Instead, a simple Manialink route would look like this: <code>myController/myAction</code></p><p>You can also pass parameters dynamic parameters using the route, which can be picked up by the action method.</p><p>An example could be <code>myController/myAction/{myParam}</code> which has a parameter <code>myParam</code>. This allows you to pass the number through the route like <code>myController/myAction/1</code>, <code>myController/myAction/2</code>, <code>myController/myAction/342</code> etc.</p><p>The controller also allows you to define more complex combinations of static route components and parameters like <code>a/{b}/c/{d}/{e}</code>.</p><h3 id="allowed-route-patterns" tabindex="-1">Allowed route patterns <a class="header-anchor" href="#allowed-route-patterns" aria-label="Permalink to &quot;Allowed route patterns&quot;">​</a></h3><p>The design decisions for route matching allows different scenarios such as:</p><ul><li><strong>Parameterless routes</strong> like <code>a/b/c</code></li><li><strong>Equal length routes with different names</strong>. Like having both <code>a/b/c</code> and <code>a/b/d</code></li><li><strong>Route with parameters</strong> such as <code>a/b/{c}/{d}/{e}</code></li><li><strong>Route with parameters in arbitrary positions</strong> such as <code>a/{b}/c/{d}</code></li><li><strong>Root routes</strong> like <code>a</code>, <code>b</code>, <code>myroute</code> etc.</li><li>Allowed characters in the route components are alphanumeric (<code>0-9</code>, <code>a-z</code>, <code>A-Z</code>), <code>_</code> and <code>.</code></li></ul><h3 id="disallowed-route-patterns" tabindex="-1">Disallowed route patterns <a class="header-anchor" href="#disallowed-route-patterns" aria-label="Permalink to &quot;Disallowed route patterns&quot;">​</a></h3><p>Routing does have certain restrictions which helps with consistency and avoids certain mistakes and errors such as:</p><ul><li><strong>Ambiguous routes</strong> such as defining both <code>a/b</code> and <code>a/{b}</code></li><li><strong>Two equal routes for different actions</strong></li><li><strong>Empty routes</strong></li><li><strong>Routes starting with a slash</strong> <code>/</code></li><li><strong>Route overloading</strong>. For example <code>a/{b}</code> with <code>{b}</code> being a string and <code>a/{c}</code> with <code>{c}</code> being an integer.</li><li>The allowed characters in route components are restricted to alphanumeric and <code>_</code> and <code>.</code>. The forward slash <code>/</code> is used as a separator in routes.</li></ul><h3 id="defining-actions" tabindex="-1">Defining Actions <a class="header-anchor" href="#defining-actions" aria-label="Permalink to &quot;Defining Actions&quot;">​</a></h3><p>Actions are defined within a manialink controller. Head over to <a href="./controllers.html">Manialink Controllers</a> to see how this is done.</p><h2 id="form-actions" tabindex="-1">Form Actions <a class="header-anchor" href="#form-actions" aria-label="Permalink to &quot;Form Actions&quot;">​</a></h2><p>Some manlialink tags such as label or quad exposes an <code>action</code> attribute. This makes the UI element clickable which calls the page action callback. We can call this a <em>form action</em> because it works similar to HTML forms.</p><p>You can also define <code>&lt;entry&gt;</code> tags which are input elements where the user can input things like text, a number, a password etc. You also have other input elements like <code>&lt;textedit&gt;</code> which allows you to input multiline text. The common characteristic of these elements is that the values which the user inserts into these elements will get sent along with the action.</p><p>You can also group these elements within a <code>&lt;frame&gt;</code> so you can isolate input elements within a frame, and only those values get sent with the action.</p><p>Let&#39;s take an example:</p><div class="language-xml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">frame</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">entry</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">nickname</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">label</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">action</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">route/to/action</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Submit!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">frame</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>In this example, when we call the action <code>route/to/action</code>. The entry value will be sent along with the action in a key-value relationship. In this case the name of the entry is <code>nickname</code>.</p><h2 id="the-triggerpageaction-function" tabindex="-1">The <code>TriggerPageAction</code> function <a class="header-anchor" href="#the-triggerpageaction-function" aria-label="Permalink to &quot;The \`TriggerPageAction\` function&quot;">​</a></h2><p>In ManiaScript it is also possible to trigger page actions with the <code>TriggerPageAction</code> function. So you can call routes like:</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">main() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    TriggerPageAction(&quot;route/to/action&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,26),i=[s];function l(r,c,p,d,h,u){return a(),o("div",null,i)}const y=e(t,[["render",l]]);export{g as __pageData,y as default};