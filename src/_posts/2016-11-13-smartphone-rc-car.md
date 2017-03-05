---
subtitle: Because why not
layout: post
categories: [raspberrypi]
splashimg: /images/traxxasBeginning.jpg
splashalt: RC Car all put together, except for the whole raspberry pi part
---

I don't have much to show for it *yet*, but I have an RC car and a raspberry pi laying around, so I'm going to hook them together. I'm not exactly sure what the nd goal will be. It would be cool to be able to control the car using my smartphone, or perhaps even allow it to drive around autonomously. For starters though I'd like to get the raspberry pi in control of the RC car, and I'll go from there. 

<!--more-->

![Traxass car](/images/traxxasBeginning.jpg)

It's not a new idea. [Instructables](http://www.instructables.com/id/Raspberry-Pi-Smartphone-Controlled-Rc-Car/) actually has step-by-step instructions for connecting it to a smartphone, which is pretty awesome. I don't have a multimeter at home so I'm going to bring my car into work this week and measure the servo signals.

I do plan on extending the idea. I have a raspberry pi compatible camera attatched, so I'm thinking of sending the video feed back to my smartphone in real time (I'm not sure what the latency will be over wifi or bluetooth). Then I could use physical orientation changes as signals to turn left / right, and have the full screen display be the video feed. I also have a GPS module if I want to go fully autonomous, but that's a super long-term goal.

![Camera module haphazardly taped to the top of the RC car shell](/images/traxxasCamera.jpg)

One problem I can already see is that he RC car I have does not last very long on a battery charge. It will be hard to iteratively debug things if I have to recharge the battery every half hour, but we'll cross that bridge when we get there
