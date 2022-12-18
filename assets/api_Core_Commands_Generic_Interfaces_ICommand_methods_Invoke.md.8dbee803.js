import{_ as e,c as s,o as a,a as n}from"./app.1b042ac6.js";const y=JSON.parse('{"title":"ICommand.Invoke Method","description":"","frontmatter":{},"headers":[{"level":2,"title":"Parameters","slug":"parameters","link":"#parameters","children":[]},{"level":2,"title":"Returns","slug":"returns","link":"#returns","children":[]}],"relativePath":"api/Core/Commands/Generic/Interfaces/ICommand/methods/Invoke.md"}'),o={name:"api/Core/Commands/Generic/Interfaces/ICommand/methods/Invoke.md"},r=n(`<h1 id="icommand-invoke-method" tabindex="-1">ICommand.Invoke Method <a class="header-anchor" href="#icommand-invoke-method" aria-hidden="true">#</a></h1><p><strong>Declaring Type:</strong> <a href="./../">ICommand</a><br><strong>Namespace:</strong> <a href="./../../">EvoSC.Core.Commands.Generic.Interfaces</a><br><strong>Assembly:</strong> EvoSC#<br><strong>Assembly Version:</strong> 1.0.0</p><div class="language-csharp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Task</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">ICommandResult</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Invoke</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">IServiceProvider</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">services</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ICommandContext</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">context</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">params</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">object[]</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">args</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h2><p><code>services</code> IServiceProvider</p><p><code>context</code> <a href="./../../ICommandContext/">ICommandContext</a></p><p><code>args</code> object[]</p><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-hidden="true">#</a></h2><p>Task&lt;<a href="./../../ICommandResult/">ICommandResult</a>&gt;</p><hr><p><em>Documentation generated by <a href="https://github.com/ap0llo/mddocs" target="_blank" rel="noreferrer">MdDocs</a></em></p>`,11),t=[r];function l(p,c,d,i,m,C){return a(),s("div",null,t)}const F=e(o,[["render",l]]);export{y as __pageData,F as default};
