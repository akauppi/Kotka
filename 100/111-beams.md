# 111 - Beams

>![](.images/111-beams.png)

Beams are the back bone of the vehicle platform. They provide structural integrity to the whole and attachment point for other parts.

Beams can also be used for hiding wires and pipes, connecting actuators to their control system.

## Design notes

Beams don't move up/down. They are expected to always be at a certain (rather small) height above the rails.

The beams are intentionally very low (compared to the wheels), to get a low point of gravity to the overall system.

The piping material is something we can get on stock anywhere in the world, and which is easy to form (including making holes for screws).

### U-beam is structurally rigid

The U-beam (`#111-006`) should go enough inside the main beams, to make a structurally rigid combination. 

It can be attached with screws. If so, the screws should not extrude to the hollow space within the parts, just the thickness of the two beams[^2].

[^2]: So that cables etc. potentially inside the beams does not get worn out.

### Holes and grooves

The beams will get holes made to them (e.g. attaching the tray, `#113-000`). This should be anticipated in the strength calculations (leaving enough margin). 
 

## Design options

To get an even lower point of gravity, a downward hanging extension - a keel - can be considered. It is not part of MVPs (May 2020).

## Concerns

*Add concerns here*

## Specs

|Spec id||
|---|---|
|`BEND`|*spec the bending endurance*|
|`TWIST`|*spec the twisting endurance*|

>tbd. make these specs reasonable and following industry norms.  Give samples of suitable material.

Sample: 

"The pipes must not develop permanent bends, when exposed to forces of 1000N/m (supported from the tips, force in the middle, varying load with punches) for 20000h's (10h/day, ~5 years)."

+ same for twisting

## Open issues

- [ ] Check industry standards for pipe endurance and pick right category for our MVP's.

<p align=right>Next: [Central Hub](./112-hub.md)
