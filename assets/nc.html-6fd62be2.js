import{_ as s,p as n,q as e,a1 as a}from"./framework-d81ad7e5.js";const c={},l=a(`<h1 id="nc" tabindex="-1"><a class="header-anchor" href="#nc" aria-hidden="true">#</a> nc</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">nc -vz 192.168.0.10 80</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">## Connection to 192.168.0.10 80 port [tcp/http] succeeded!</span></span>
<span class="line"><span style="color:#6A9955;">## google.com (74.125.200.101:443) open</span></span>
<span class="line"><span style="color:#6A9955;">## nc: bad address &#39;google1.com&#39;</span></span>
<span class="line"><span style="color:#6A9955;">## nc: google.com (74.125.68.139:22): Operation timed out</span></span>
<span class="line"><span style="color:#6A9955;">## nc just output empty result</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，-v选项用于打印详细的扫描结果；-z选项用于指定使用0 I/O数据模式。主机名可以是域名或IP地址，端口号可以是数字或服务名称。</p><p>如果端口开放，输出信息中会显示&quot;succeeded&quot;或&quot;open&quot;。</p><p>如果端口关闭，输出信息中会显示&quot;refused&quot;。</p>`,5),o=[l];function i(t,p){return n(),e("div",null,o)}const r=s(c,[["render",i],["__file","nc.html.vue"]]);export{r as default};
