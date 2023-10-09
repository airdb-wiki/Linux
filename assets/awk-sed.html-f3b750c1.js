import{_ as s,p as n,q as a,a1 as l}from"./framework-d81ad7e5.js";const i={},e=l(`<h1 id="awk-sed" tabindex="-1"><a class="header-anchor" href="#awk-sed" aria-hidden="true">#</a> awk &amp; sed</h1><h2 id="awk" tabindex="-1"><a class="header-anchor" href="#awk" aria-hidden="true">#</a> awk</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">awk </span><span style="color:#CE9178;">&#39;{sum[$2]+=1} END {for(k in sum) printf(&quot;%s %s %d %s\\n&quot;, $1, k, sum[k], $NF)}&#39;</span><span style="color:#D4D4D4;"> | sort -n -r -k 3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">awk -F </span><span style="color:#CE9178;">&#39;|&#39;</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;{sum += $1} END {print sum}&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">awk </span><span style="color:#CE9178;">&#39;{sum[$2]+=1} END {for(k in sum) printf(&quot;%s %s %d %s\\n&quot;, $1, k, sum[k], $NF)}&#39;</span><span style="color:#D4D4D4;"> | sort -n -r -k 3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 求总和</span></span>
<span class="line"><span style="color:#D4D4D4;">awk -F </span><span style="color:#CE9178;">&#39;|&#39;</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;{sum += $1} END {print &quot;Sum =&quot;, sum}&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 求平均</span></span>
<span class="line"><span style="color:#D4D4D4;">cat data|awk </span><span style="color:#CE9178;">&#39;{sum+=$1} END {print &quot;Average = &quot;, sum/NR}&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 求最大值</span></span>
<span class="line"><span style="color:#D4D4D4;">cat data|awk </span><span style="color:#CE9178;">&#39;BEGIN {max = 0} {if ($1&gt;max) max=$1 fi} END {print &quot;Max=&quot;, max}&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 求最小值</span></span>
<span class="line"><span style="color:#D4D4D4;">awk </span><span style="color:#CE9178;">&#39;BEGIN {min = 1999999} {if ($1&lt;min) min=$1 fi} END {print &quot;Min=&quot;, min}&#39;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">awk 统计文件中按照某列统计某列的和(sum) 转载</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">把第一列相同的名称的第二列加起来：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">[root@localhost cc]</span><span style="color:#6A9955;"># cat 1.txt</span></span>
<span class="line"><span style="color:#D4D4D4;">aaa 10</span></span>
<span class="line"><span style="color:#D4D4D4;">bbb 20</span></span>
<span class="line"><span style="color:#D4D4D4;">aaa 30</span></span>
<span class="line"><span style="color:#D4D4D4;">ccc 40</span></span>
<span class="line"><span style="color:#D4D4D4;">ccc 20</span></span>
<span class="line"><span style="color:#D4D4D4;">ccc 40</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">[root@localhost cc]</span><span style="color:#6A9955;"># cat 1.txt |awk &#39;{sum[$1]+=$2}END{for(i in sum)print i,sum[i]}&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">aaa 40</span></span>
<span class="line"><span style="color:#D4D4D4;">bbb 20</span></span>
<span class="line"><span style="color:#D4D4D4;">ccc 100</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">统计第一列名称出现的次数：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">[root@localhost cc]</span><span style="color:#6A9955;"># cat 1.txt |awk &#39;{sum[$1]+=1}END{for(i in sum)print i,sum[i]}&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">aaa 2</span></span>
<span class="line"><span style="color:#D4D4D4;">bbb 1</span></span>
<span class="line"><span style="color:#D4D4D4;">ccc 3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">或[root@localhost cc]</span><span style="color:#6A9955;"># cat 1.txt |awk &#39;{sum[$1]++}END{for(i in sum)print i,sum[i]}&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">aaa 2</span></span>
<span class="line"><span style="color:#D4D4D4;">bbb 1</span></span>
<span class="line"><span style="color:#D4D4D4;">ccc 3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">统计第一列第二列重复出现的次数：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">[root@localhost cc]</span><span style="color:#6A9955;"># cat 1.txt |awk &#39;{sum[$1&quot; &quot;$2]++}END{for(i in sum)print i,sum[i]}&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">aaa 10 1</span></span>
<span class="line"><span style="color:#D4D4D4;">ccc 20 1</span></span>
<span class="line"><span style="color:#D4D4D4;">aaa 30 1</span></span>
<span class="line"><span style="color:#D4D4D4;">ccc 40 2</span></span>
<span class="line"><span style="color:#D4D4D4;">bbb 20 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">简单的把第二列加起来：</span></span>
<span class="line"><span style="color:#D4D4D4;"> [root@localhost cc]</span><span style="color:#6A9955;"># cat 1.txt |awk &#39;{a+=$2}END{print a}&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">160</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),p=[e];function c(o,r){return n(),a("div",null,p)}const t=s(i,[["render",c],["__file","awk-sed.html.vue"]]);export{t as default};
