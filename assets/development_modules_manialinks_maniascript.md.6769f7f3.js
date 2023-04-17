import{_ as e,c as s,o as a,a as n}from"./app.8e9479ff.js";const y=JSON.parse('{"title":"ManiaScript","description":"","frontmatter":{},"headers":[{"level":2,"title":"Example","slug":"example","link":"#example","children":[]}],"relativePath":"development/modules/manialinks/maniascript.md"}'),t={name:"development/modules/manialinks/maniascript.md"},l=n(`<h1 id="maniascript" tabindex="-1">ManiaScript <a class="header-anchor" href="#maniascript" aria-hidden="true">#</a></h1><p>With the template engine, we can separate ManiaScript and template markup in their own files.</p><p>For organizational and consistency purposes, we recommend to keep all ManiaScript files within a <code>Templates/Scripts/</code> directory in your module project.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h2><p>Let&#39;s take a simple example of a ManiaScript file that just prints something to the console. Our module&#39;s name is <code>MyModule</code>.</p><p>We begin creating a file in <code>Templates/Scripts</code> called <code>PrintConsole.ms</code>. Note the file exentions <code>.ms</code>.</p><p>In this file we create a main function that prints something to the console:</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">main() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    log(&quot;Hello there!&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>We can now import this script into our template:</p><div class="language-xml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">resource</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">MyModule.Scripts.PrintConsole</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">main</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Displaying this manialink in-game will log <code>Hello there!</code> to the script console.</p><p>One thing to note here is that we specify <code>main=&quot;true&quot;</code> because this ManiaScript file contains the main function. If you want to include ManiaScript code that has functions, variables or structs to be used, but doesn&#39;t have a main function, you can omit this attribute.</p>`,12),o=[l];function p(i,c,r,d,m,u){return a(),s("div",null,o)}const D=e(t,[["render",p]]);export{y as __pageData,D as default};
