const playerMoves = [];

let moveId = null;
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');



const mouseMove = (e) => {
    e.preventDefault();
    
    if (moveId) {
        clearTimeout(moveId);
    }

} 
    


