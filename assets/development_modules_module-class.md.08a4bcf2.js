import{_ as s,c as e,o as a,a as n}from"./app.8e9479ff.js";const b=JSON.parse('{"title":"The Module Class","description":"","frontmatter":{},"headers":[{"level":2,"title":"Defining the module class","slug":"defining-the-module-class","link":"#defining-the-module-class","children":[]},{"level":2,"title":"Loading a module","slug":"loading-a-module","link":"#loading-a-module","children":[]},{"level":2,"title":"Toggleable Modules","slug":"toggleable-modules","link":"#toggleable-modules","children":[]},{"level":2,"title":"Installable Modules","slug":"installable-modules","link":"#installable-modules","children":[]},{"level":2,"title":"Module Loading Process","slug":"module-loading-process","link":"#module-loading-process","children":[]}],"relativePath":"development/modules/module-class.md"}'),l={name:"development/modules/module-class.md"},o=n(`<h1 id="the-module-class" tabindex="-1">The Module Class <a class="header-anchor" href="#the-module-class" aria-hidden="true">#</a></h1><p>Every module needs a module class. This class is essentially the &quot;entrypoint&quot; of a module. In many cases, the class does nothing other than providing some meta information about the module.</p><p>The application&#39;s core will look for any class that annotates the <code>[Module]</code> attribute and check if it inherits <code>EvoScModule</code>.</p><p>Besides the class providing some basic information about a module, it can also handle module specific events. These events includes enabling and disabling a module, as well as installing and uninstalling a module.</p><h2 id="defining-the-module-class" tabindex="-1">Defining the module class <a class="header-anchor" href="#defining-the-module-class" aria-hidden="true">#</a></h2><p>The module class definition is very simple. Create a new class, annotate it with the <code>[Module]</code> attribute and inherit <code>EvoScModule</code> and you are done! Optionally, inherit interfaces to handle enabling/disabling or installing/uninstalling.</p><p>For example, let&#39;s define a module class of a new module <code>ExampleModule</code>:</p><div class="language-csharp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#FFCB6B;">Module</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ExampleModule</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">EvoScModule</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="loading-a-module" tabindex="-1">Loading a module <a class="header-anchor" href="#loading-a-module" aria-hidden="true">#</a></h2><p>The constructor of a module class acts as a &quot;On Load&quot; handler. When you load an event, you are only meant to set up basic things like variables or lists. The &quot;on load&quot; event for modules is therefore intentionally restricted to constructors, as you are not meant to put much logic in here.</p><p>If you need some type of logic to set something up, perhaps you need to set things up in a async context, then use enable/disable or install/uninstall methods which is explained later.</p><p>The constructor also supports dependency injection, and it will have access to the core&#39;s services, as well as the module&#39;s own services:</p><div class="language-csharp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki has-focused-lines"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#FFCB6B;">Module</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ExampleModule</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">EvoScModule</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line has-focus"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ExampleModule</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">MyService</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">service</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span></span>
<span class="line has-focus"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line has-focus"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// do something with MyService ...</span></span>
<span class="line has-focus"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="toggleable-modules" tabindex="-1">Toggleable Modules <a class="header-anchor" href="#toggleable-modules" aria-hidden="true">#</a></h2><p>If you only use the framework&#39;s functionality providers, you normally don&#39;t need to handle the enabling or disabling events. However, sometimes it is neccessary to create some background service or custom service that requires the ability to be enabled or disabled.</p><p>In order to ensure that modules are enabled and disabled when a user clicks those buttons, you can inherit the <code>IToggleable</code> interface.</p><p>The interface exposes two asynchronous methods, <code>Enable</code> and <code>Disable</code>. These method names are pretty self-explainatory, but keep in mind that enabling or disabling a module does not mean loading or unloading a module.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>When a module is disabled, it is still loaded in memory, but the logic should not respond to anything.</p></div><p>Example with the <code>IToggleable</code>:</p><div class="language-csharp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki has-focused-lines"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#FFCB6B;">Module</span><span style="color:#89DDFF;">]</span></span>
<span class="line has-focus"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ExampleModule</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">EvoScModule</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IToggleable</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line has-focus"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Task</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Enable</span><span style="color:#89DDFF;">()</span></span>
<span class="line has-focus"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line has-focus"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// enable stuff in the module</span></span>
<span class="line has-focus"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line has-focus"></span>
<span class="line has-focus"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Task</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Disable</span><span style="color:#89DDFF;">()</span></span>
<span class="line has-focus"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line has-focus"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// disable stuff from the module</span></span>
<span class="line has-focus"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="installable-modules" tabindex="-1">Installable Modules <a class="header-anchor" href="#installable-modules" aria-hidden="true">#</a></h2><p>todo ...</p><h2 id="module-loading-process" tabindex="-1">Module Loading Process <a class="header-anchor" href="#module-loading-process" aria-hidden="true">#</a></h2><p>Understanding the way modules are loaded and and the order in which the special module events are triggered can be useful.</p><p>On start up, the application looks for assemblies with a class that annotates the <code>[Module]</code> attribute. If this attribute is found, it checks if the class inherits <code>EvoScModule</code>.</p><p>If these two conditions are met, the application will look for any dependencies defined by the module. If there are any dependencies, these are loaded first.</p><p>Before the module class itself is loaded, the applicaiton looks for any framework defined entities, for example controllers, settings, permissions, middlewares, database migrations etc.</p><p>The module class is then loaded, which means the class itself is instantiated and the constructor called.</p><p>After the module is loaded, it is then installed. This sets up things like permissions or database migrations.</p><p>If installation is successful, the module is enabled. When a module is enabled, it adds things like controllers, middlewares, events, chat commands, module services etc. All of these things should be enabled automatically.</p>`,30),p=[o];function t(i,c,r,d,u,h){return a(),e("div",null,p)}const y=s(l,[["render",t]]);export{b as __pageData,y as default};
