<h1>Flower Paint</h1>

<img src="https://raw.githubusercontent.com/PaulB-H/flowerpaint/main/public/images/readme2.PNG" alt="" >

<a href="https://paulbh.com/flowerpaint" target="_blank">paulbh.com/flowerpaint</a>

<h2>Description</h2>
<p>Draw with flowers on a Canvas</p>

<h2>Details</h2>
<p>A canvas app designed for my daughter to use on a tablet. Once I connected the sounds and images, I was reminded of KidPix, and this is becoming my homage to it.</p>
<p>As she is still too young to "paint" with the tablet, I wanted the first version to place flowers randomly, even when she repeatedly hits the same spot.</p>

<p>Currently you can mute/unmute random sounds, select a flower color, clear the canvas, and download the image.</p>

<sup>\* Random placement mode has been disabled for now. I will create a separate mode that is clear of other buttons little hands could accidentally touch, where the canvas is automatically cleared when it is too full</sup>

<ul>
  <lh><u>Todo:</u></lh>
  <strike><li>Allow selection of flower color instead of random flower</li></strike>
  <strike><li>Allow selection of flower size (Small, Medium, Large)</li></strike>
  <strike><li>Add modal to confirm clear canvas</li></strike>
  <li>Create separate mode / page for more kid friendly version</li>
  <ul><li>No buttons, random flowers only, canvas clears after 100-150 flowers</li></ul>
</ul>

<p>Images from: <a href="https://openclipart.org/" target="_blank">openclipart.org</a></p>

<p>Sounds from: <a href="https://freesound.org/" target="_blank">freesound.org</a></p>

<p><sup>* All sounds and images used are under <a href="https://creativecommons.org/publicdomain/zero/1.0/" target="_blank">Creative Commons 0 License</a><br />Not all sounds from freesound.org have this license, check before using!</sup></p>

<details>
  <summary>Used resources links</summary>
  
  <pre>Images:<br /><br/>https://openclipart.org/detail/191422/purple-lily
https://openclipart.org/detail/194459/orange-flower
https://openclipart.org/detail/294851/sunflower
https://openclipart.org/detail/202513/raseone-rose-red-2
https://openclipart.org/detail/192977/pink-flower
https://openclipart.org/detail/167946/clover-ns
https://openclipart.org/detail/266284/blue-flower<br /><br />Sounds:<br />
pop<br />https://freesound.org/people/supersound23/sounds/372182/
cartoon pop<br />https://freesound.org/people/unfa/sounds/245646/
synth glide<br />https://freesound.org/people/nomiqbomi/sounds/578659/
hover<br />https://freesound.org/people/plasterbrain/sounds/237422/
crow<br />https://freesound.org/people/Jofae/sounds/361470/
retro laser<br />https://freesound.org/people/MATRIXXX_/sounds/414888/
sci-fi ui<br />https://freesound.org/people/Jofae/sounds/367997/</pre>

</details>

Multi-touch Gestures

Thank you chatGPT for helping me understand multi touch gestures

Each touch event includes event.touches, which is a\
a list of all the active touch events and positions\
Each touch itself has a touch.identifier property which\
we use to keep track of them on our own object, "touches"

Bonus thing I realized:\
Because preventDefault(); is called, browser level multi touch gestures\
are disabled, such as "pinch to zoom", which would be easy for a child to\
activate by mistake

The rest of the device-level gestures are disabled when you use "Guided Access"\
such as switching apps on iPad, so once zoom is disabled like this, the child\
is locked into a properly displayed page

I was able to use this in a single line in abc123 as:\
addEventListener("touchstart", (e) => e.preventDefault(), false);

Calling false at the end explicitly states that this is NOT a passive event\
handler, and we want to be able to call e.preventDefault(); which can interfere\
with scroll operations / performance of the page

I forgot about user-scalable="0" when I was doing this, but after some testing, that does not work, so this way of disabling pinch to zoom is still needed
