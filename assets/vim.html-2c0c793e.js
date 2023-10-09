import{_ as i,p as n,q as e,a1 as l}from"./framework-d81ad7e5.js";const s={},d=l(`<h1 id="vim" tabindex="-1"><a class="header-anchor" href="#vim" aria-hidden="true">#</a> VIM</h1><p>vundle 搭建很方便</p><ol><li><p>git clone https://github.com/gmarik/Vundle.vim.git ~/.vim/bundle/Vundle.vim</p></li><li><p>修改 .vimrc</p></li><li><p>打开vim在底行模式下输入 BundleInstall</p></li><li><p>如果还需要其他插件，可以使用 BundleSearch 进行在线查找插件</p></li></ol><h2 id="配置文件内容" tabindex="-1"><a class="header-anchor" href="#配置文件内容" aria-hidden="true">#</a> 配置文件内容</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">filetype off
syntax on
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()
&quot; 加载插件
Plugin &#39;VundleVim/Vundle.vim&#39;
Plugin &#39;scrooloose/nerdtree&#39;
Plugin &#39;vim-airline/vim-airline&#39;
Plugin &#39;fatih/vim-go&#39;
Plugin &#39;vim-airline/vim-airline-themes&#39;
Plugin &#39;michaelHL/awesome-vim-colorschemes&#39;
Plugin &#39;Tagbar&#39;
Plugin &#39;Tabular&#39;
call vundle#end()
filetype plugin indent on     &quot; required

&quot; 打开自动定位到最后编辑的位置, 需要确认.viminfo当前用户可写
if has(&quot;autocmd&quot;)
    au BufReadPost * if line(&quot;&#39;\\&quot;&quot;) &gt; 1 &amp;&amp; line(&quot;&#39;\\&quot;&quot;) &lt;= line(&quot;$&quot;) | exe &quot;normal! g&#39;\\&quot;&quot; | endif
endif

&quot; 快捷键
map &lt;C-h&gt; &lt;C-w&gt;&lt;C-h&gt;
map &lt;C-j&gt; &lt;C-w&gt;&lt;C-j&gt;
map &lt;C-l&gt; &lt;C-w&gt;&lt;C-l&gt;
map &lt;C-k&gt; &lt;C-w&gt;&lt;C-k&gt;

&quot;&lt;F2&gt;设置是否显示行号
nnoremap &lt;silent&gt; &lt;F2&gt; :set number!&lt;CR&gt;
&quot;空格打开关闭折叠
nnoremap &lt;space&gt; @=((foldclosed(line(&#39;.&#39;)) &lt; 0) ? &#39;zc&#39; : &#39;zo&#39;)&lt;CR&gt;
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于已经将 bash profile，vimrc 等存放在 github 私有仓库中，所以上述配置内容较少。</p><p>有问题的同学，可以随时联系</p>`,7),t=[d];function a(u,v){return n(),e("div",null,t)}const m=i(s,[["render",a],["__file","vim.html.vue"]]);export{m as default};
