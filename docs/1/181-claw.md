# 181 - Claw

Claw is at the end of the Grabber arm.

>![](./images/181-claw.png)

<!--
tbd. replace with new, realistic picture
-->

The purpose of the claw is to:

- provide snappy grab/ungrab to the support rail
- provide a safe, lockable grab
- provide passive suspension against wobbliness of the support rail, relative to main rail
- provide linear bearing against the support rail, with speeds up to 11,1m/s (40 km/h)

While providing those things, the claw is likely the most high-tech area in the Kotka design, material-wise, needing to be both:

- strong
- light
- quiet in operation


## Requirements

These are discussed at the Grabber arm level, also for the claw design.


## MVP 0.2

**Goals**

- [ ] Get a physical (3D printed) prototype for learning about snappiness, required control motors, noise, suitability of suspension etc.


## MVP later

**Goals**

- [ ] Producing a claw capable of track operations (probably made of metal)
- [ ] Showing it in action


## Metrics

- [ ] Grab/ungrab noise; dB peak
- [ ] Grab/ungrab speed (between "prepared" and "grabbed" states); ms with distribution
- [ ] Grab/ungrab impact; N·s peak; J overall
- [ ] Failures per 100M grabs/ungrabs (with support rail wobbling in relative distance, within parameters)

<!-- 
- [ ] Failed grabs: 1 per `X` trips (count successful trips in between "hangs"; should improve to 1/100's of millions).
-->

## Open issues

- The amount of wobbliness needed to be prepared for is not known. Tests on track will give guidance.


## Requirements to/from other parts

|Towards part|Req id||
|---|---|---|
|#180 Grabber arm|Providing placement, control and power for the motors|

|From part|Req id|
|---|---|---|
