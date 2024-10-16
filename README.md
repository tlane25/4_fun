# What?
This project is a 2d physics based paper football game where a user moves their "finger"(mouse)
to nudge the football so that it balances on the edge of the table. 

The game will slowly grow more complex with time but development is driven by a ground up approach. 


Frontend Stack:
JS, HTML, CSS (might consider a css lib to make things prettier faster)

Backend Stack:
Tbd

Milestones:
1:
Create a field of play with interactable ball that allows two players, in the same location, to interact
with the ball, score points in a single browser session.

"Interact": the force of the nudge determines how far the "ball" goes.
If the "ball" reaches the edge without falling (crossing the center of mass), point
Else, no point 

2:
Two users are able to play each other from across the interwebs, in real time. 

3:
The ball has spin momentum as well as directional momentum

4:
"Smart" computer play

5: 
Field goals


Nouns:
- Game
- Field
- Football
- Player
- ScoreBoard


Verbs:
- Move
When a player moves their mouse and the pointer strikes the "ball", the force of the "mouse" will
transfer to the ball. The ball will move in the direction of the force and continue moving until
"friction" brings it to a stop or the ball falls off the table.

- Score

- Turn




### Move
Force = Mass * Acceleration
Acceleration = pixels / second * second

System A (finger):
Mass = 10g
Acceleration = 5px/s^2
Force = 50g * px/s^2
Note: I think it's safe to keep the force in these
units so long as I maintain...

System B (football)
If Mass = 5g, then...
Acceleration = 50gpx/ 5g*s^2 = 10 px/ s^2
 
But for friction and gravity...
Normal Force = mass of object * acceleration due to gravity
The trouble here is we'll need to convert meters into pixels...
which, in turn will be relational to the scaled size of the table...
which in turn might be relevant to the size of the screen...
Which then I wonder if mouse events can track relative pixels or no




