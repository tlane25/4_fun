const playerMoves = [];

let moveId = null;
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = "green"
ctx.fillRect(25, 25, 600, 400);

const drawBall = () => {
  ctx.fillStyle = 'white';
  ctx.beginPath();
  ctx.moveTo(75, 60);
  ctx.lineTo(100, 85);
  ctx.lineTo(100, 35);
  ctx.fill();
}

drawBall()



/*
Ideal Event Behavior:
Start: The user moves a mouse

Stop:
- The user stops moving the mouse for some small period of time (ms??)
- The mouse crosses the line of the football
    - If and only if the event stops stops on the edge of
    the ball, do we move the ball
    - When the ball is in motion, then the mouse move event is 
    silenced for a period. 

When we start the event, log position and time.
    - If the event stops without contact on the ball, reset position and time...
    this may very well be taken care of in the start event... as in, if every time
    the event is started, we reassign time and mouse location... that's what we really want

*/


let startX = null;
let startY = null;
let activeAttempt = null;
let startTime = null;

const startAttempt = (e) => {
    e.preventDefault();
    if (!activeAttempt) {
        startTime = performance.now();
        startX = e.clientX;
        startY = e.clientY;
    }

    
    // if (moveId) {
    //     clearTimeout(moveId);
    // }

    // moveId = setTimeout((e) => {

    // }, 20)

} 

const makeContact = (e) => {
    e.preventDefault();
    if (!activeAttempt){
        const totalTime = performance.now() - startTime;
        const dX = e.clientX - startX;
        const dY = e.clientY - startY;
        activeAttempt = True;
        moveFootball(totalTime, dX, dY);
    }
}

/*
Another thing to take note of is that we're collecting quite a few "state type variables"
This can and should be properties of an instance of a "game" object. 
*/

/*
We'll need to track the state of the football on the board. Then calculate how far it will move 
before it stops. On a similar note, we may need to wrap the container for the canvas in a sligthly larger container...
I'm thinking about what will need to happen to track the "score"... I suppose it could be as simple as, 
*/
const moveFootball = (totalTime, dX, dY) => {

}

/*
This function will take final position of the ball, and determine whether or not it's points or not
essentially, we'll need to divide the triangle based on the edge of the table and determine if the center
of mass lies on the score or fall side of that line
*/
const scoreOrFall = () => {

}
    


