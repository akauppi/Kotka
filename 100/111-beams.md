# 111 - Beams

>![](.images/111-beams.png)

Beams are the back bone of the vehicle platform. They provide structural integrity to the whole and attachment point for other parts.

Beams can also be used for hiding wires and pipes, connecting actuators to their control system.

## Design notes

Beams don't move up/down. They are expected to always be at a certain (rather small) height above the rails.

The beams are intentionally very low (compared to the wheels), to get a low  point of gravity to the overall system.

## Design options

To get an even lower point of gravity, a downward hanging extension - a keel - can be considered. It is not part of MVP 0.1.

## Concerns

*Add concerns here*

## Specs

|Spec id||
|---|---|
|`BEND`|*spec the bending endurance*|
|`TWIST`|*spec the twisting endurance*|

<!-- tbd. make these specs reasonable and following industry norms.  Give samples of suitable material.
-->

The pipes must not develop permanent bends, when exposed to tip-to-tip forces of 2000N for 20000h's (10h/day, ~5 years).

