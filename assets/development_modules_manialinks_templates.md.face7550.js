import{_ as s,c as a,o as n,a as e}from"./app.8e9479ff.js";const m=JSON.parse('{"title":"Manialink Templates","description":"","frontmatter":{},"headers":[{"level":2,"title":"Creating a new template","slug":"creating-a-new-template","link":"#creating-a-new-template","children":[{"level":3,"title":"Prepare the project","slug":"prepare-the-project","link":"#prepare-the-project","children":[]},{"level":3,"title":"Create the Templates directory","slug":"create-the-templates-directory","link":"#create-the-templates-directory","children":[]},{"level":3,"title":"Create a new Manialink template","slug":"create-a-new-manialink-template","link":"#create-a-new-manialink-template","children":[]}]},{"level":2,"title":"Template Directives","slug":"template-directives","link":"#template-directives","children":[{"level":3,"title":"The property directive","slug":"the-property-directive","link":"#the-property-directive","children":[]},{"level":3,"title":"The using directive","slug":"the-using-directive","link":"#the-using-directive","children":[]},{"level":3,"title":"The import directive","slug":"the-import-directive","link":"#the-import-directive","children":[]},{"level":3,"title":"The script directive","slug":"the-script-directive","link":"#the-script-directive","children":[]}]},{"level":2,"title":"Displaying & Hiding Manialinks","slug":"displaying-hiding-manialinks","link":"#displaying-hiding-manialinks","children":[{"level":3,"title":"Hiding Manialinks","slug":"hiding-manialinks","link":"#hiding-manialinks","children":[]}]}],"relativePath":"development/modules/manialinks/templates.md"}'),l={name:"development/modules/manialinks/templates.md"},p=e(`<h1 id="manialink-templates" tabindex="-1">Manialink Templates <a class="header-anchor" href="#manialink-templates" aria-hidden="true">#</a></h1><p>In order to provide dynamic and stateful manialinks, EvoSC make use of a templating engine used to generate the manialink output. It also makes it easier and quicker to build up a manialink UI. The <a href="https://github.com/EvoTM/ManiaTemplates" target="_blank" rel="noreferrer">ManiaTemplates</a> library is being used and is being developed alongside EvoSC.</p><p>This page explains how to create manialink templates in EvoSC and basic usage of the library. For detailed explanation on how the templating engine works, head over to the <a href="https://github.com/EvoTM/ManiaTemplates" target="_blank" rel="noreferrer">ManiaTemplates Documentation</a>.</p><h2 id="creating-a-new-template" tabindex="-1">Creating a new template <a class="header-anchor" href="#creating-a-new-template" aria-hidden="true">#</a></h2><p>All template files must be embedded within the assembly for EvoSC to find the files. So we need to set up the project for this.</p><h3 id="prepare-the-project" tabindex="-1">Prepare the project <a class="header-anchor" href="#prepare-the-project" aria-hidden="true">#</a></h3><p>If you used the project template or generator, you do not need to do this step. But you can still verify that it is correct.</p><p>Open your <code>.csproj</code> project file and make sure the following line is under one of the <code>&lt;ItemGroup&gt;</code> tags:</p><div class="language-xml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">EmbeddedResource</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">Include</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Templates\\**\\*</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>This makes sure that everything within a <code>Templates</code> directory becomes embedded with the assembly.</p><h3 id="create-the-templates-directory" tabindex="-1">Create the <code>Templates</code> directory <a class="header-anchor" href="#create-the-templates-directory" aria-hidden="true">#</a></h3><p>In your project&#39;s root, create a project directory called <code>Templates</code>. All template files should be created under this directory.</p><h3 id="create-a-new-manialink-template" tabindex="-1">Create a new Manialink template <a class="header-anchor" href="#create-a-new-manialink-template" aria-hidden="true">#</a></h3><p>Under the <code>Templates</code> directory, you can now create your templates. All manialink templates must end with the <code>.mt</code> extension.</p><p>Let&#39;s do an example. Create a file called <code>HelloPlayer.mt</code></p><p>Fill in the file with the following contents:</p><div class="language-xml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">property</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">string</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">component</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">label</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello {{ Name }}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">component</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>Everything related to a template must be within the <code>&lt;template&gt;</code> tag. The actual content that is displayed must be within the <code>&lt;component&gt;</code> tag.</p><p>This will display a label saying <code>Hello &lt;name&gt;</code> where Name is a parameter that we will send to the manialink when display it.</p><h2 id="template-directives" tabindex="-1">Template Directives <a class="header-anchor" href="#template-directives" aria-hidden="true">#</a></h2><p>The template directives are used to configure things like imports and properties that can be used within a template.</p><h3 id="the-property-directive" tabindex="-1">The <code>property</code> directive <a class="header-anchor" href="#the-property-directive" aria-hidden="true">#</a></h3><p>The <code>property</code> directive is used to tell the template engine that we want to expose a property for the template component. The property must have a defined type and a name. Optionally a default value can be specified.</p><p>Example:</p><div class="language-xml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">property</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">string</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">NickName</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">default</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Player</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>In this example, we create a new property for the component that is a string with the name <em>NickName</em> and if this property is not set, it will fall back to the default value of <em>Player</em>.</p><h3 id="the-using-directive" tabindex="-1">The <code>using</code> directive <a class="header-anchor" href="#the-using-directive" aria-hidden="true">#</a></h3><p>The using directive works the same way as C# <code>using</code> directive. It allows you to use types which are defined within a certain namespace without having to use the full namespace. This directive is required for any type that is not a native type.</p><p>Example:</p><div class="language-xml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">using</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">namespace</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">EvoSC.Common.Interfaces.Models</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>In this example, we expose the <em>EvoSC.Common.Interfaces.Models</em> namespace, which in EvoSC provides access to all models that EvoSC uses.</p><h3 id="the-import-directive" tabindex="-1">The <code>import</code> directive <a class="header-anchor" href="#the-import-directive" aria-hidden="true">#</a></h3><p>The <code>import</code> directive is used to import other template components to be used in the template as a custom component.</p><p>So for example, let&#39;s say we have a template that greets a player. This component is created inside a module called <code>MyModule</code>: <code>GreetPlayer.xml</code>:</p><div class="language-xml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">property</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">string</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">NickName</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">component</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">label</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello {{ NickName }}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">component</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>We can now use this component in other templates:</p><div class="language-xml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki has-focused-lines"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line has-focus"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">import</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">component</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">MyModule.GreetPlayer</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">as</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">GreetPlayer</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">component</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line has-focus"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">GreetPlayer</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">NickName</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">My Nickname</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">component</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="the-script-directive" tabindex="-1">The <code>script</code> directive <a class="header-anchor" href="#the-script-directive" aria-hidden="true">#</a></h3><p>The <code>script</code> is used to import ManiaScript files.</p><p>For more information about this, check out the <a href="./maniascript.html">ManiaScript</a> page.</p><h2 id="displaying-hiding-manialinks" tabindex="-1">Displaying &amp; Hiding Manialinks <a class="header-anchor" href="#displaying-hiding-manialinks" aria-hidden="true">#</a></h2><p>To create a simple set up to test your manialink. Let&#39;s create a command to send the manialink with the Manialink Manager:</p><div class="language-csharp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki has-focused-lines"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#FFCB6B;">Controller</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ShowMyManialinkController</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">EvoScController</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">CommandInteractionContext</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">readonly</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IManialinkManager</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">_manialinks</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ExampleController2</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">IManialinkManager</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">manialinks</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        _manialinks </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> manialinks</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">[</span><span style="color:#FFCB6B;">ChatCommand</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">show</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Show a manialink</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Task</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ShowManialink</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line has-focus"><span style="color:#A6ACCD;">        </span><span style="color:#F78C6C;">await</span><span style="color:#A6ACCD;"> _manialinks</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">SendManialinkAsync</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Context</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Player</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">MyModule.HelloPlayer</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span></span>
<span class="line has-focus"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span></span>
<span class="line has-focus"><span style="color:#89DDFF;">            </span><span style="color:#676E95;">// Same property name as the one in our manialink template </span></span>
<span class="line has-focus"><span style="color:#A6ACCD;">            Name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Context</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Player</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">NickName </span></span>
<span class="line has-focus"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">});</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>Sending <code>/show</code> in the chat in-game will now display a text <code>Hello &lt;your nickname&gt;</code> on your screen.</p><h3 id="hiding-manialinks" tabindex="-1">Hiding Manialinks <a class="header-anchor" href="#hiding-manialinks" aria-hidden="true">#</a></h3><p>You can also hide/remove manialinks from the players by calling the <code>HideManialinkAsync</code> methods in the manialink manager.</p><p>So for our example, to hide the manialink, we can create a new command to hide the manialink</p><div class="language-csharp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki has-focused-lines"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#FFCB6B;">ChatCommand</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hide</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hide the manialink.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)]</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Task</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ShowManialink</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line has-focus"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">await</span><span style="color:#A6ACCD;"> _manialinks</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">HideManialinkAsync</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Context</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Player</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">MyModule.HelloPlayer</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Sending <code>/hide</code> in the in-game chat will remove the shown text.</p><h4 id="a-note-on-how-manialink-hiding-works" tabindex="-1">A note on how manialink hiding works <a class="header-anchor" href="#a-note-on-how-manialink-hiding-works" aria-hidden="true">#</a></h4><p>Because there doesn&#39;t exist a XMLRPC call to hide manialinks for specific players, we will need to do a trick instead. The way it works is that we display a new manialink, which has the same ID of the manialink we want to hide. But this manialink is empty and contains no UI elements or code. This will replace the manialink with the same ID, effectively hide it.</p><p>One problem with this is that the manialink still exists in the player&#39;s memory. To resolve this, we make use of the auto hide functionality of manialinks. The empty manialink is therefore automatically deleted and removed from memory after 3 seconds.</p>`,52),o=[p];function t(r,i,c,y,d,D){return n(),a("div",null,o)}const h=s(l,[["render",t]]);export{m as __pageData,h as default};
