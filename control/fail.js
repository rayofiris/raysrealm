let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d")
canvas.style.imageRendering = "pixelated";
ctx.imageSmoothingEnabled = false;



let sprite = new Image(); 
sprite.src = "img/spritefront.png";


const spriteWidth = 38;
const spriteHeight = 64;
sprite.x = 100;
sprite.y = 100;



function drawFrame(frameX, frameY, canvasX, canvasY) {
    ctx.drawImage (sprite, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, canvasX, canvasY, spriteWidth, spriteHeight, sprite.x, sprite.y);
}

let cycleLoop = [1, 0, 1, 2];
let currentLoopIndex = 0;
let frameCount = 0;

function step() {
    frameCount++;
    if (frameCount < 15) {
        window.requestAnimationFrame(step); 
        return;
    }
    frameCount = 0; 
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawFrame(cycleLoop[currentLoopIndex], 0, 0, 0);
    currentLoopIndex++; 
    if (currentLoopIndex >= cycleLoop.length) {
        currentLoopIndex = 0; }
    window.requestAnimationFrame(step);
   
}

sprite.addEventListener("load", loadHandler, false); 
let Xspeed = 0;
let Yspeed = 0; 
let moveUp = false;
let moveDown = false;
let moveLeft = false;
let moveRight = false; 

window.addEventListener("keydown", function(e) {
    switch(e.key) {
        case "ArrowUp":
            moveUp = true;
            break;
        case "ArrowDown":
            moveDown = true;
            break;
        case "ArrowLeft":
            moveLeft = true;
            break;
        case "ArrowRight":
            moveRight = true;
            break;
    }
}, false);

window.addEventListener("keyup", function(e) {
    switch(e.key) {
        case "ArrowUp":
            moveUp = false;
            break;
        case "ArrowDown":
            moveDown = false;
            break;
        case "ArrowLeft":
            moveLeft = false;
            break;
        case "ArrowRight":
            moveRight = false;
            break;
    }
}, false);

function loadHandler()
{
  update(); 
}

function update()
{
    window.requestAnimationFrame(update, canvas); 
    sprite.x += Xspeed;
    sprite.y += Yspeed;

    if(moveUp && !moveDown && !moveRight && !moveLeft)
    {
        Xspeed = 0;
        Yspeed = -3;
        sprite.src = "img/spriteback.png";
        window.requestAnimationFrame(step);
    }
    if(moveUp && !moveDown)
    {
        Xspeed = 0;
        Yspeed = -3;
        sprite.src = "img/spriteback.png";
        window.requestAnimationFrame(step);
    }
    if(moveDown && !moveUp && !moveRight && !moveLeft)
    {
        Xspeed = 0;
        Yspeed = 3;
        sprite.src = "img/spritefront.png";
        window.requestAnimationFrame(step);
    }
    if(moveDown && !moveUp)
    {
        Xspeed = 0;
        Yspeed = 3;
        sprite.src = "img/spritefront.png";
        window.requestAnimationFrame(step);
    }
    if(moveLeft && !moveRight && !moveUp && !moveDown)
    {
        Xspeed = -3;
        Yspeed = 0;
        sprite.src = "img/spriteleft.png";
        window.requestAnimationFrame(step);
    }
    if(moveLeft && !moveRight)
    {
        Xspeed = -3;
        Yspeed = 0;
        sprite.src = "img/spriteleft.png";
        window.requestAnimationFrame(step);
    }
    if(moveRight && !moveLeft && !moveUp && !moveDown)
    {
        Xspeed = 3;
        Yspeed = 0;
        sprite.src = "img/spriteright.png";
        window.requestAnimationFrame(step);
    }
    if(moveRight && !moveLeft)
    {
        Xspeed = 3;
        Yspeed = 0;
        sprite.src = "img/spriteright.png";
        window.requestAnimationFrame(step);
    }
    if(!moveUp && !moveDown && !moveRight && !moveLeft)
    {
        Xspeed = 0;
        sprite.src = "img/spritefront.png";
    }
     if(!moveUp && !moveDown && !moveRight && !moveLeft)
    {
        Yspeed = 0;
        sprite.src = "img/spritefront.png";
    }
    if(moveLeft && !moveRight && moveUp && !moveDown)
    {
        Xspeed = -2;
        Yspeed = -2;
        sprite.src = "img/spriteleft.png";
        window.requestAnimationFrame(step);
   
    }
    if(!moveLeft && moveRight && moveUp && !moveDown)
    {
     Xspeed = 2;
        Yspeed = -2;
        sprite.src = "img/spriteright.png";
        window.requestAnimationFrame(step);

    }
    if(moveLeft && !moveRight && !moveUp && moveDown)
    {
        Xspeed = -2;
        Yspeed = 2;
        sprite.src = "img/spriteleft.png";
        window.requestAnimationFrame(step);
    }
    if(!moveLeft && moveRight && !moveUp && moveDown)
    {
        Xspeed = 2;
        Yspeed = 2;
        sprite.src = "img/spriteright.png";
        window.requestAnimationFrame(step);
   } 





};




