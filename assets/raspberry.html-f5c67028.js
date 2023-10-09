import{_ as e,p as i,q as s,a1 as n}from"./framework-d81ad7e5.js";const a={},d=n(`<h1 id="树莓派系统烧录" tabindex="-1"><a class="header-anchor" href="#树莓派系统烧录" aria-hidden="true">#</a> 树莓派系统烧录</h1><p>https://stepneverstop.github.io/burn-system2raspberry-in-macos.html</p><h2 id="系统配置" tabindex="-1"><a class="header-anchor" href="#系统配置" aria-hidden="true">#</a> 系统配置</h2><p>重新插拔usb</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">cd /Volumes/boot  # 进入根系统
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="配置网络" tabindex="-1"><a class="header-anchor" href="#配置网络" aria-hidden="true">#</a> 配置网络</h3><p>wpa_supplicant.conf</p><p>\`\` country=CN ctrl_interface=DIR=/var/run/wpa_supplicant Group=netdev update_config=1</p><p>network={ ssid=&quot;Wifi1的名字&quot; psk=&quot;密码&quot; priority=优先级，越大越优先 }</p><p>network={ ssid=&quot;Wifi2的名字&quot; psk=&quot;密码&quot; priority=优先级 }</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">

### 开启 sshd 服务
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>touch ssh</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">

### 显示器无输出
解决树莓派4B外接显示屏没反应, 追加如下内容到 config.txt 目录

</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>hdmi_force_hotplug=1 config_hdmi_boost=4 hdmi_group=2 hdmi_mode=9 hdmi_drive=2 hdmi_ignore_edid=0xa5000080 disable_overscan=1</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">
### homebrige

https://github.com/oznu/docker-homebridge/wiki/Homebridge-on-Raspberry-Pi


## Bluetooth

树莓派（Raspberry Pi 4）开启和连接蓝牙
https://blog.csdn.net/Cool2050/article/details/105615831</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),r=[d];function l(t,o){return i(),s("div",null,r)}const u=e(a,[["render",l],["__file","raspberry.html.vue"]]);export{u as default};
