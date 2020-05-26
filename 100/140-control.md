# 140 - Control Unit

The need for control in MVP 0.1:

- speed of four wheel motors
- central hub motor
- battery level tracking (optional)

WiFi reception and user interface.

Need for control (MVP 0.2):

- grabber arm motors/hydraulics


## Ideas

The device could provide its own WiFi hot spot, and a browser interface + REST API. Access control by username, pw (i.e. no need to connect it to Internet when running a demo).

## Specs

Weather capability of -20..+40°C.

Enclosure that is weather proof (rain is okay, but won't be immersed in water). I.e. cable pull-throughs. Sounds like Etola boxes. ;)

If there is no active signal to the controller, the vehicle needs to get to stand-still (i.e. there's some kind of timer that gets reset by a REST API call).

Before going too much into software, that deserves its own repo.


## Requirement to other parts

|Towards part|Req id||
|---|---|---|
|`#113` - front tray|claim space|
|`#600` - battery|`POWER NEED(xxx V, yyy Apeak)`|requires xxx Volts with xxx Amps (peak)|


## Open Issues

...type?


<p align=right>Next: [160 - Batteries](./160-batteries.md)

