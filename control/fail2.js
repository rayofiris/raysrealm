const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); 
canvas.width = 800;
canvas.height = 600;
canvas.style.imageRendering = 'pixelated';
ctx.imageSmoothingEnabled = false; 

//sprite stuff//    

let spriteObject =
{
  width: 38,
  height: 64,
  frameWidth: 38,
  frameHeight: 64,
  frameX: 0,
  frameY: 0,
};

let sprite = Object.create(spriteObject);
sprite.x = 0;
sprite.y = 0;
let image = new Image();
image.addEventListener("load", loadHandler, false);
image.src = "img/spritefront.png";
let Xspeed = 0;
let Yspeed = 0;
let moveLeft = false;
let moveRight = false;
let moveUp = false;
let moveDown = false; 

//arrow key stuff//   

window.addEventListener("keydown", function(e)
{
  switch(e.key)
  {
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

window.addEventListener("keyup", function(e)
{
  switch(e.key)
  {
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

//movement/changing/gameplay specific stuff//   

 
  
function update()
{
  //movement related (speed, moving/not moving right/left/up/down, borders etc.)//
  window.requestAnimationFrame(update, canvas);
  sprite.x += Xspeed;
  sprite.y += Yspeed;
  
  
   if(moveUp && !moveDown && !moveRight && !moveLeft)
  {
   Xspeed = 0;
   Yspeed = -3; 
   image.src = "img/spriteback.png";
 
  }
    if(moveUp && !moveDown)
  {
   Xspeed = 0;
   Yspeed = -3; 
   image.src = "img/spriteback.png";
   
  }
  if(moveDown && !moveUp && !moveRight && !moveLeft)
  {
   Xspeed = 0;
   Yspeed = 3; 
   image.src = "img/spritefront.png";
   
  }
   if(moveDown && !moveUp)
  {
   Xspeed = 0;
   Yspeed = 3; 
   image.src = "img/spritefront.png";
  
  }
  if(moveLeft && !moveRight && !moveUp && !moveDown)
  {
    Xspeed = -3;
    Yspeed = 0; 
    image.src = "img/spriteleft.png";
     
  }
  if(moveLeft && !moveRight)
  {
    Xspeed = -3;
    Yspeed = 0; 
    image.src = "img/spriteleft.png";
    
  }
  if(moveRight && !moveLeft && !moveUp && !moveDown)
  {
    Xspeed = 3;
    Yspeed = 0; 
    image.src = "img/spriteright.png";
    
  }
   if(moveRight && !moveLeft)
  {
    Xspeed = 3;
    Yspeed = 0; 
    image.src = "img/spriteright.png";
    
  }
  if(!moveUp && !moveDown && !moveLeft && !moveRight)
  {
    Yspeed = 0; 
    image.src = "img/spritefront.png";
    
  }
  if(!moveLeft && !moveRight && !moveUp && !moveDown)
  {
    Xspeed = 0;
    image.src = "img/spritefront.png";
   
  }
    if(moveLeft && !moveRight && moveUp && !moveDown)
  {
    Xspeed = -2;
    Yspeed = -2;
    image.src = "img/spriteleft.png";
   
  }
    if(!moveLeft && moveRight && moveUp && !moveDown)
  {
    Xspeed = 2;
    Yspeed = -2;
    image.src = "img/spriteright.png";

  }
    if(moveLeft && !moveRight && !moveUp && moveDown)
  {
    Xspeed = -2;
    Yspeed = 2;
    image.src = "img/spriteleft.png";
  }
      if(!moveLeft && moveRight && !moveUp && moveDown)
  {
    Xspeed = 2;
    Yspeed = 2;
    image.src = "img/spriteright.png";
   
  } 
  if(sprite.x < 8)
  {
   sprite.x = 8; 
  }
  if(sprite.y < 0)
  {
   sprite.y = 0; 
  }
  if(sprite.x + sprite.width > canvas.width - 8)
  {
    sprite.x = canvas.width - sprite.width - 8;
  }
  if(sprite.y + sprite.height > canvas.height)
  {
    sprite.y = canvas.height - sprite.height;
  }

};

