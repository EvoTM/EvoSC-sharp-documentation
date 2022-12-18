import{_ as s,c as n,o as a,a as l}from"./app.1b042ac6.js";const d=JSON.parse('{"title":"Introduction to the EvoSC# Module Framework","description":"","frontmatter":{},"headers":[{"level":2,"title":"Logic Abstraction Levels","slug":"logic-abstraction-levels","link":"#logic-abstraction-levels","children":[]}],"relativePath":"development/modules/index.md"}'),o={name:"development/modules/index.md"},e=l(`<h1 id="introduction-to-the-evosc-module-framework" tabindex="-1">Introduction to the EvoSC# Module Framework <a class="header-anchor" href="#introduction-to-the-evosc-module-framework" aria-hidden="true">#</a></h1><p>EvoSC# is designed as a modular framework with individual modules responsible for a set of features. The core provides this framework and a library of tools and utilities for developing functionality and logic. The modules provides the actual functionality of the controller and controls the logic.</p><p>The framework itself provides a set of coding rules and patterns for developers to implement their desired functionality into the controller.</p><p>It is built around <em>controllers</em> which holds most of the logic. Controllers respond to actions and events, which are handled and responded to if desired.</p><h2 id="logic-abstraction-levels" tabindex="-1">Logic Abstraction Levels <a class="header-anchor" href="#logic-abstraction-levels" aria-hidden="true">#</a></h2><p>The code within a module have different levels of abstraction. For example, we try to avoid any logic in the main module class. And while controllers are meant to handle the logic, we also abstract lower level logic out of the controllers and put them in <a href="/EvoSC-sharp-documentation/development/modules/advanced/services.html">services</a>.</p><p>This helps with the test- and maintainability of the code, and it is easier to read and understand what is happening.</p><p>To give you a more concrete example, let&#39;s say you create a command to kick a player. You create the module class, we don&#39;t need to define anything in this class as we can define commands within a controller. Now imagine you created the controller class, and defined the method for the command.</p><p>Here is some examples of what we mean with abstracting the low level logic out of the controller:</p><p><strong>BAD:</strong></p><div class="language-csharp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#FFCB6B;">Controller</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MyController</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">EvoScController</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">CommandInteractionContext</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">readonly</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IServerClient</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">_server</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">MyController</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">IServerClient</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">server</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> _server </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> server</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">[</span><span style="color:#FFCB6B;">ChatCommand</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">kick</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Kicks a player.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Task</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">KickPlayerCommand</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">IPlayer</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">player</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// don&#39;t put the &quot;raw logic&quot; here</span></span>
<span class="line highlighted error"><span style="color:#A6ACCD;">        _server</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Remote</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">KickAsync</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">PlayerUtils</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ConvertAccountIdToLogin</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">player</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">AccountId</span><span style="color:#89DDFF;">));</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p><strong>GOOD:</strong></p><div class="language-csharp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#FFCB6B;">Controller</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MyController</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">EvoScController</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">CommandInteractionContext</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">readonly</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IPlayerService</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">_players</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">MyController</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">IPlayerService</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">players</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> _players </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> players</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">[</span><span style="color:#FFCB6B;">ChatCommand</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">kick</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Kicks a player.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Task</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">KickPlayerCommand</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">IPlayer</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">player</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// Abstract the kick logic out of the controller and in a service</span></span>
<span class="line"><span style="color:#A6ACCD;">        _players</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">KickAsync</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">player</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,13),p=[e];function r(t,c,i,y,F,D){return a(),n("div",null,p)}const A=s(o,[["render",r]]);export{d as __pageData,A as default};
