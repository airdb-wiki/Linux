import{_ as l,M as i,p as o,q as c,R as e,t as s,N as r,a1 as n}from"./framework-d81ad7e5.js";const t={},d=n(`<h1 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> Git</h1><h3 id="branch-naming" tabindex="-1"><a class="header-anchor" href="#branch-naming" aria-hidden="true">#</a> Branch Naming</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">feat: add hat wobble
^--^  ^------------^
|     |
|     +-&gt; Summary in present tense.
|
+-------&gt; Type: chore, docs, feat, fix, refactor, style, or test.
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>More Examples:</p><ul><li><code>feat</code>: (new feature for the user, not a new feature for build script)</li><li><code>fix</code>: (bug fix for the user, not a fix to a build script)</li><li><code>docs</code>: (changes to the documentation)</li><li><code>style</code>: (formatting, missing semi colons, etc; no production code change)</li><li><code>refactor</code>: (refactoring production code, eg. renaming a variable)</li><li><code>test</code>: (adding missing tests, refactoring tests; no production code change)</li><li><code>chore</code>: (updating grunt tasks etc; no production code change)</li></ul><h2 id="git-command" tabindex="-1"><a class="header-anchor" href="#git-command" aria-hidden="true">#</a> Git Command</h2><ol><li>Maintain a repo without permission</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">git remote add upstream https://github.com/bfenetworks/bfe.git</span></span>
<span class="line"><span style="color:#6A9955;">## a</span></span>
<span class="line"><span style="color:#D4D4D4;">git fetch upstream</span></span>
<span class="line"><span style="color:#D4D4D4;">git checkout develop</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">git merge upstream/develop</span></span>
<span class="line"><span style="color:#6A9955;">## or</span></span>
<span class="line"><span style="color:#D4D4D4;">git rebase upstream/develop</span></span>
<span class="line"><span style="color:#6A9955;">## Refer: https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">## b</span></span>
<span class="line"><span style="color:#D4D4D4;">git pull ups master</span></span>
<span class="line"><span style="color:#D4D4D4;">git rebase ups/master</span></span>
<span class="line"><span style="color:#D4D4D4;">https://levelup.gitconnected.com/how-to-update-fork-repo-from-original-repo-b853387dd471</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>git config setting</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">git config --global core.hooksPath .github/hooks</span></span>
<span class="line"><span style="color:#D4D4D4;">git config --global core.excludefile .gitignore_global</span></span>
<span class="line"><span style="color:#D4D4D4;">git config --global url.</span><span style="color:#CE9178;">&#39;ssh://git@github.com&#39;</span><span style="color:#D4D4D4;">.insteadOf https://github.com</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>Github Commit. For Close Github Issue, commit message should as follow:</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">close </span><span style="color:#6A9955;">#x</span></span>
<span class="line"><span style="color:#D4D4D4;">closes </span><span style="color:#6A9955;">#x</span></span>
<span class="line"><span style="color:#D4D4D4;">closed </span><span style="color:#6A9955;">#x</span></span>
<span class="line"><span style="color:#D4D4D4;">fix </span><span style="color:#6A9955;">#x</span></span>
<span class="line"><span style="color:#D4D4D4;">fixes </span><span style="color:#6A9955;">#x</span></span>
<span class="line"><span style="color:#D4D4D4;">fixed </span><span style="color:#6A9955;">#x</span></span>
<span class="line"><span style="color:#D4D4D4;">resolve </span><span style="color:#6A9955;">#x</span></span>
<span class="line"><span style="color:#D4D4D4;">resolves </span><span style="color:#6A9955;">#x</span></span>
<span class="line"><span style="color:#D4D4D4;">resolved </span><span style="color:#6A9955;">#x</span></span>
<span class="line"><span style="color:#D4D4D4;">add new quick sort algorithm, fixes </span><span style="color:#6A9955;">#4, resolve #6, closed #12</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">git submodule update --init -f  vendor/github.com/mholt/caddy</span></span>
<span class="line"><span style="color:#D4D4D4;">git remote add ups https://github.com/airdb/b</span></span>
<span class="line"><span style="color:#D4D4D4;">git push -u ups local_branch:master -f</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>Github Command Line</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">brew install github/gh/gh</span></span>
<span class="line"><span style="color:#D4D4D4;">gh --repo bbhj/lbs issue status</span></span>
<span class="line"><span style="color:#D4D4D4;">gh --repo bbhj/lbs issue view 1</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>Delete branch or tag</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">git branch -D dev</span></span>
<span class="line"><span style="color:#D4D4D4;">git push origin --delete dev</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">git tag -d v1.0</span></span>
<span class="line"><span style="color:#D4D4D4;">git push --delete origin v1.0</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>submodule</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">git submodule update --init --recursive --remote</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Push Branch to Another Branch</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">$ git push &lt;remote&gt; &lt;local_branch&gt;:&lt;remote_name&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Push Branch to Another Repository</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">$ git push &lt;remote&gt; &lt;branch&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="github" tabindex="-1"><a class="header-anchor" href="#github" aria-hidden="true">#</a> Github</h2>`,24),p=e("code",null,"gh",-1),u={href:"https://github.com/cli/cli",target:"_blank",rel:"noopener noreferrer"},m=n(`<h2 id="semantic-commit-messages" tabindex="-1"><a class="header-anchor" href="#semantic-commit-messages" aria-hidden="true">#</a> Semantic Commit Messages</h2><p>See how a minor change to your commit message style can make you a better programmer.</p><p>Format: <code>&lt;type&gt;(&lt;scope&gt;): &lt;subject&gt;</code></p><p><code>&lt;scope&gt;</code> is optional</p><h2 id="github下fork后如何同步源的新更新内容" tabindex="-1"><a class="header-anchor" href="#github下fork后如何同步源的新更新内容" aria-hidden="true">#</a> github下fork后如何同步源的新更新内容</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">git remote -v</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">git remote add upstream  https://github.com/bfenetworks/bfe</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">## 同步 fork</span></span>
<span class="line"><span style="color:#D4D4D4;">git fetch upstream</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">## 切换到 upstream 分支</span></span>
<span class="line"><span style="color:#D4D4D4;">git checkout upstream/develop</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">## 将 upstream 分支 push 到 fork 项目对应分支</span></span>
<span class="line"><span style="color:#D4D4D4;">git push origin upstream/develop:develop -f</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>References:</p><ul><li>https://www.conventionalcommits.org/</li><li>https://seesparkbox.com/foundry/semantic_commit_messages</li><li>http://karma-runner.github.io/1.0/dev/git-commit-msg.html</li></ul>`,8);function v(h,b){const a=i("ExternalLinkIcon");return o(),c("div",null,[d,e("p",null,[s("For now, we can use "),p,s(" command for few git operation. Rerfer "),e("a",u,[s("here"),r(a)])]),m])}const D=l(t,[["render",v],["__file","git.html.vue"]]);export{D as default};
