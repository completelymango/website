---
layout: single
categories: [raspberrypi]
---

<p>I wasn't able to borrow a multimeter / oscilliscope from work, but I made some progress by reading the online documentation (and some trial and error).</p>

<!--more-->

<p><div class="6u"><span class="image left"><img src="/images/traxxasECS.jpg" alt="" /></span></div>The Electronic Speed Control (ecs) is a Traxxas model XL-1. Most of the raspberry pi projects I've seen online use an updated car model / ecs - the XL-5 seems to be very popular. This one has 3 wires: red is 5v positive, black is ground, and white is the control signal. I hooked the white wire to GPIO pin 33 (which has PWM support on my Raspberry Pi 2 B) and played around with the RPi.GPIO library.</p>

<p>With the frequency set to 50Hz, I was able to get the tires to spin in the proper directions, but not as smoothly as I could with a standard remote control. The stopped position (halfway between full forward and full reverse) isn't resting perfectly at 0mph. Every once in a while it twitches forward or backwards. And no matter how small I make my interval, the ramp-up from 0 in either direction is wayyy too steep - it seems like it goes from 0 to about 60% speed in one step. I found a post on a <a href="https://traxxas.com/forums/showthread.php?79754-Receiver-signals-amp-techincal-information">traxxas forum</a> that makes me believe I'm not supposed to use duty-cycle to control the speed on this ECS.</p>

<blockquote>...<br>To recap, there are two important differences between the control pulse of the servo motor versus the DC motor. First, on the servo motor, duty cycle (on-time vs. off-time) has no meaning whatsoever -- all that matters is the absolute duration of the positive-going pulse, which corresponds to a commanded output position of the servo shaft. Second, the servo has its own power electronics, so very little power flows over the control signal. All power is draw from its power lead, which must be simply hooked up to a high-current source of 5 volts.</blockquote>

<p> That was a question regarding the XL-5, but it also applies to my ECS. I'll have to look into the RPi.GPIO library to see if they provide the ability to change the absolute duration of the control signal. This is the code that I'm currently using with duty-cycle modification</p>

<pre><code>import time
import numpy as np
import RPi.GPIO as GPIO
GPIO.setmode(GPIO.BOARD)
GPIO.setup(33, GPIO.OUT)

zero = 6.84
forward = 6.2
backwards = 7.5
p = GPIO.PWM(33, 50)  # channel=12 frequency=50Hz
p.start(0)
try:
    while 1:
        for dc in np.arange(6.2, 7.5, 0.001):
            p.ChangeDutyCycle(dc)
            print(dc)
            time.sleep(.02)
        for dc in np.arange(7.5, 6.2, -0.001):
            p.ChangeDutyCycle(dc)
            print(dc)
            time.sleep(.02)
except KeyboardInterrupt:
    pass
p.stop()
GPIO.cleanup()</code></pre>

<hr/>

<p>On the other hand, steering control was easy. It uses the same 3 wires: red, white and black, only this time I also connected the red wire to the 5v GPIO pin 2 on the raspberry pi board. Since I removed the original receiver, steering will have to be powered by the raspi power source (which will most likely end up being a usb power bank).</p>

<video class="video main" autoplay loop>
<source src="/images/traxxasSteering.webm" type="video/webm">
</video>
