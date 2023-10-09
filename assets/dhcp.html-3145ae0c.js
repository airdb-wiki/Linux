import{_ as e,p as n,q as i,a1 as t}from"./framework-d81ad7e5.js";const s={},d=t(`<h1 id="dhcp" tabindex="-1"><a class="header-anchor" href="#dhcp" aria-hidden="true">#</a> DHCP</h1><p>Dynamic Host Configuration Protocol</p><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2><ol><li><p>tftp server: https://github.com/tftp-go-team/hooktftp</p></li><li><p>一个网络启动服务器，支持pxe: https://github.com/pojntfx/bofied</p></li></ol><p>Best Practice</p><h2 id="dhcp-conf-dhcpd-conf" tabindex="-1"><a class="header-anchor" href="#dhcp-conf-dhcpd-conf" aria-hidden="true">#</a> dhcp/conf/dhcpd.conf</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">	include &quot;/var/www/html/autoinstall/dhcp/host&quot;;
	ddns-update-style interim;
	ignore client-updates;
	allow unknown-clients;
	ping-check true;
	
	option perform-mask-discovery  true;
	option router-discovery  true;
	
	#option ntp-servers 10.4.18.10,10.4.18.11; # hz ntp
	#option time-offset -18000; # Eastern Standard Time.
	#option domain-name-servers 10.0.1.127,203.196.0.6;
	option domain-search &quot;airdb.io&quot;;
	default-lease-time 3600;
	max-lease-time 4800;
	
	
	group host_pool {
	  default-lease-time 600;
	  max-lease-time 600;
	  allow bootp;
	  allow booting;
	  filename &quot;/pxelinux.0&quot;;
	
	  option dhcp-renewal-time 10;
	  subnet 10.0.0.0 netmask 255.255.255.0 {
	    option subnet-mask  255.255.255.0;
	    option routers      10.0.0.1;  #default routes
	    range dynamic-bootp 10.0.0.2 10.0.0.200;
	  }
	}
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dhcp-conf-hosts" tabindex="-1"><a class="header-anchor" href="#dhcp-conf-hosts" aria-hidden="true">#</a> dhcp/conf/hosts</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">	host rmc1.airdb.io {hardware ethernet 00:01:02:03:04:80 ;fixed-address 10.0.0.253 ;}
	host dean.airdb.io { hardware ethernet f0:76:1c:02:b1:10 ;fixed-address 10.0.0.251;}
	
	host dhcp_01 { hardware ethernet 00:8c:fa:eb:b4:bc ;fixed-address 10.0.0.01 ;}
	host h_02 { hardware ethernet 00:8c:fa:eb:b2:d4 ;fixed-address 10.0.0.02 ;}
	host h_03 { hardware ethernet 00:8c:fa:eb:b4:0c ;fixed-address 10.0.0.03 ;}
	host h_04 { hardware ethernet 00:8c:fa:eb:b8:08 ;fixed-address 10.0.0.04 ;}
	host h_05 { hardware ethernet 00:8c:fa:eb:b4:d0 ;fixed-address 10.0.0.05 ;}
	host h_06 { hardware ethernet 00:8c:fa:eb:b4:78 ;fixed-address 10.0.0.06 ;}
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="etc-xinetd-d-tftp" tabindex="-1"><a class="header-anchor" href="#etc-xinetd-d-tftp" aria-hidden="true">#</a> /etc/xinetd.d/tftp</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">	service tftp
	{
		socket_type		= dgram
		protocol		= udp
		wait			= yes
		user			= root
		server			= /usr/sbin/in.tftpd
		server_args		= -B 1380 -v -s /var/www/html/autoinstall/tftpboot
		disable			= no
		per_source		= 11
		cps			= 100 2
		flags			= IPv4
	}

</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),a=[d];function r(l,c){return n(),i("div",null,a)}const v=e(s,[["render",r],["__file","dhcp.html.vue"]]);export{v as default};
