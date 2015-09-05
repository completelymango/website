---
title: Media Center Situation
layout: article 
tags: [mediacenter]
---

   [app I use]: http://www.makemkv.com/

I have a Fire TV stick, an Xbox 360 and a raspberri pi 2 and a steam machine, but they are all lacking in one way or another.

###  Fire TV stick ###
My FireTV stick has problems keeping up with my inputs. The interface can be laggy, even when I'm trying to do the most basic thing. It often freezes when I'm simply trying to play youtube videos. (I may just have a bad unit though -- it was run over by a car once...). And most of the streaming videos I watch are reduced to low quality, even though my wifi router is 5 feet from the device.

### Xbox 360 ###
I like to rip my bluray disks to a digital format for keeping on my NAS. The [app I use] right now saves the file as MKV, and I believe the Xbox 360 does not play nice with that format. 

### Raspberry Pi 2 ###
Raspberry Pi lacks the horsepower for some things I'd like to do. It lacks a gigabit ethernet port, so most HD video streaming is out of the question (at least uncompressed local Blu-Ray streams).

### Steam Machine ###
Being linux, SteamOS lacks access to many online streaming sites. Things may have changed recently, but I know that for a wile Netflix required Microsoft Silverlight to run, which essentially ruled out Linux. SteamOS doesn't support many multimedia features, so I ended up using XBMC / Kodi. It works great for some things, but lacks in many others.

I'm mostly happy with my steam machine setup, but there are definitely areas I'd like to improve upon. I'll keep this page updated as I find better ways to do this.


{% for tag in page.tags %}
### Posts related to {{ tag }} ###
<ul>
  {% for sitepage in site.posts %}
      {% for pc in sitepage.tags %}
        {% if pc == tag %}
          <li><a href="{{ sitepage.url }}">{{ sitepage.title }}</a></li>
        {% endif %}   <!-- cat-match-p -->
      {% endfor %}  <!-- page-category -->
  {% endfor %}  <!-- page -->
</ul>
{% endfor %}  <!-- cat -->

