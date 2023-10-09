import{_ as e,p as n,q as s,a1 as i}from"./framework-d81ad7e5.js";const a={},d=i(`<h1 id="ubuntu-snapcraft" tabindex="-1"><a class="header-anchor" href="#ubuntu-snapcraft" aria-hidden="true">#</a> Ubuntu Snapcraft</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">snapcraft push --release edge *.snap
Pushing airdb_1.0_amd64.snap
After pushing, an attempt will be made to release to &#39;edge&#39;
Preparing to push &#39;/home/ubuntu/airdb/airdb_1.0_amd64.snap&#39; to the store.
Pushing airdb_1.0_amd64.snap [===================================================================================================================] 100%
Processing...|
Ready to release!
Revision 1 of &#39;airdb&#39; created.
Track    Arch    Channel    Version    Revision
latest   amd64   stable     -          -
                 candidate  -          -
                 beta       -          -
                 edge       1.0        1
The &#39;edge&#39; channel is now open.
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">snap/snapcraft.yaml

name: airdb
version: &#39;1.0&#39;
summary: An interactive web server.
description: |
  HTTPLab let you inspect HTTP requests and forge responses.

confinement: devmode
#base: core18

parts:
  airdb-adb:
    plugin: nil
    source: http://ftp.gnu.org/gnu/hello/hello-2.10.tar.gz
    plugin: autotools

apps:
  airdb:
    command: bin/hello
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="commands" tabindex="-1"><a class="header-anchor" href="#commands" aria-hidden="true">#</a> Commands</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">snapcraft  register xxx-project
snapcraft clean airdb-adb -s pull
snapcraft push stable stable  *.snap
snapcraft push --release edge *.snap
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),l=[d];function r(c,t){return n(),s("div",null,l)}const u=e(a,[["render",r],["__file","snapcraft.html.vue"]]);export{u as default};
