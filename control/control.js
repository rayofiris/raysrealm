let canvas= document.querySelector("canvas");
canvas.width = 480;
canvas.height = 260;
let ctx = canvas.getContext("2d");
canvas.style.imageRendering = "pixelated";
ctx.imageSmoothingEnabled = false;

let x1 = document.querySelector(".x1");
let x1_2 = document.querySelector(".x1-2");
let x1_3 = document.querySelector(".x1-3");
let x1_4 = document.querySelector(".x1-4");
let x1_5 = document.querySelector(".x1-5");
let x2 = document.querySelector(".x2");
let x2_2 = document.querySelector(".x2-2");
let x2_3 = document.querySelector(".x2-3");
let x2_4 = document.querySelector(".x2-4");
let x2_5 = document.querySelector(".x2-5");
let x3 = document.querySelector(".x3");
let x3_2 = document.querySelector(".x3-2");
let x3_3 = document.querySelector(".x3-3");
let x3_4 = document.querySelector(".x3-4");
let x3_5 = document.querySelector(".x3-5");
let x4 = document.querySelector(".x4");
let x4_2 = document.querySelector(".x4-2");
let x4_3 = document.querySelector(".x4-3");
let x4_4 = document.querySelector(".x4-4");
let x4_5 = document.querySelector(".x4-5");

let blue1 = document.querySelector(".blue1");
let blue1_2 = document.querySelector(".blue1-2");
let blue1_3 = document.querySelector(".blue1-3");
let blue1_4 = document.querySelector(".blue1-4");
let blue1_5 = document.querySelector(".blue1-5");
let blue2 = document.querySelector(".blue2");
let blue2_2 = document.querySelector(".blue2-2");
let blue2_3 = document.querySelector(".blue2-3");
let blue2_4 = document.querySelector(".blue2-4");
let blue2_5 = document.querySelector(".blue2-5");
let blue3 = document.querySelector(".blue3");
let blue3_2 = document.querySelector(".blue3-2");
let blue3_3 = document.querySelector(".blue3-3");
let blue3_4 = document.querySelector(".blue3-4");
let blue3_5 = document.querySelector(".blue3-5");
let blue4 = document.querySelector(".blue4");
let blue4_2 = document.querySelector(".blue4-2");
let blue4_3 = document.querySelector(".blue4-3");
let blue4_4 = document.querySelector(".blue4-4");
 let blue4_5 = document.querySelector(".blue4-5");
    


let spriteObject = 
{
    width: 40,
    height: 64,
    frameWidth: 40,
    frameHeight: 64,
    frameX: 0,
    frameY: 0,
}

let sprite = Object.create(spriteObject);
sprite.x = 240;
sprite.y = 130;
var image = new Image();
image.addEventListener("load", loadHandler, false);
image.src = "img/front2.png";
let Xspeed = 0;
let Yspeed = 0;
let moveLeft = false;
let moveRight = false;
let moveUp = false;
let moveDown = false;

window.addEventListener("keydown", function(e) {
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

window.addEventListener("keyup", function(e) {
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

function update()
{
    window.requestAnimationFrame(update, canvas);
    sprite.x += Xspeed;
    sprite.y += Yspeed;

    if(moveUp && !moveDown && !moveLeft && !moveRight)
    {
        Xspeed = 0;
        Yspeed = -5;
        image.src="img/back2.png";
    }
     if(moveUp && !moveDown)
    {
        Xspeed = 0;
        Yspeed = -5;
        image.src="img/back2.png";
    }
    if(!moveUp && moveDown && !moveLeft && !moveRight)
    {
        Xspeed = 0;
        Yspeed = 5;
        image.src="img/front2.png";
    }
     if(!moveUp && moveDown)
    {
        Xspeed = 0;
        Yspeed = 5;
        image.src="img/front2.png";
    }
    if(moveLeft && !moveRight && !moveUp && !moveDown)
    {
        Xspeed = -5;
        Yspeed = 0;
        image.src="img/left2.png";
    }
     if(moveLeft && !moveRight)
    {
        Xspeed = -5;
        Yspeed = 0;
        image.src="img/left2.png";
    }
    if(!moveLeft && moveRight && !moveUp && !moveDown)
    {
        Xspeed = 5;
        Yspeed = 0;
        image.src="img/right2.png";
    }
    if(!moveLeft && moveRight)
    {
        Xspeed = 5;
        Yspeed = 0;
        image.src="img/right2.png";
    }
    if(!moveUp && !moveDown && !moveLeft && !moveRight)
    {
        Yspeed = 0;
        image.src="img/front2.png";
    }
     if(!moveLeft && !moveRight && !moveLeft && !moveRight)
    {
        Xspeed = 0;
        image.src="img/front2.png";
    }

       if(moveLeft && !moveRight && moveUp && !moveDown)
  {
    Xspeed = -4;
    Yspeed = -4;
    image.src="img/back2.png";

  }
    if(!moveLeft && moveRight && moveUp && !moveDown)
  {
    Xspeed = 4;
    Yspeed = -4;
    image.src="img/back2.png";

  }
    if(moveLeft && !moveRight && !moveUp && moveDown)
  {
    Xspeed = -4;
    Yspeed = 4;
    image.src="img/front2.png";
  }
      if(!moveLeft && moveRight && !moveUp && moveDown)
  {
    Xspeed = 4;
    Yspeed = 4;
    image.src="img/front2.png";
  } 

    if(sprite.x < 0)
    {
        sprite.x = 0;
    }

    if(sprite.y < 0)
    {
        sprite.y = 0;
    }
    if(sprite.x + sprite.width > canvas.width)
    {
        sprite.x = canvas.width- sprite.width;
    }
    if(sprite.y + sprite.height > canvas.height)
    {
        sprite.y = canvas.height - sprite.height;
    }

    
 if ((sprite.x < 480) && (sprite.x > 384) && (sprite.y < 260) && (sprite.y > 195))
        {
            blue4_5.style.visibility="visible";
           
      
        }
        
 if ((sprite.x < 192) && (sprite.x > 96) && (sprite.y < 130) && (sprite.y > 65) ) 
        {
            blue2_2.style.visibility="visible";
            
            
        } 
       
 
if ((sprite.x < 384) && (sprite.x > 288) && (sprite.y < 195) && (sprite.y > 130))
        {
            blue3_4.style.visibility="visible";
           
        }

if ((sprite.x < 288) && (sprite.x > 192) && (sprite.y < 260) && (sprite.y > 195))
        {
            blue4_3.style.visibility="visible";
            
        }
          
if ((sprite.x < 96) && (sprite.x > 0) && (sprite.y < 195) && (sprite.y > 130))
        {
            blue3.style.visibility="visible";
            
        }

if ((sprite.x < 288) && (sprite.x > 192) && (sprite.y < 65) && (sprite.y > 0))
        {
            blue1_3.style.visibility="visible";
            
        }

if ((sprite.x < 480) && (sprite.x > 384) && (sprite.y < 130) && (sprite.y > 65))
        {
            blue2_5.style.visibility="visible";
            
        }
           
if ((sprite.x < 384) && (sprite.x > 288) && (sprite.y < 260) && (sprite.y > 195))
        {
            blue4_4.style.visibility="visible";
            
        }
            
if ((sprite.x < 96) && (sprite.x > 0) && (sprite.y < 130) && (sprite.y > 65))
        {
            blue2.style.visibility="visible";
           
        }
            
if ((sprite.x < 192) && (sprite.x > 96) && (sprite.y < 65) && (sprite.y > 0))
        {
            blue1_2.style.visibility="visible";
            
        }
             
if ((sprite.x < 384) && (sprite.x > 288) && (sprite.y < 130) && (sprite.y > 65))
        {
            blue2_4.style.visibility="visible";
           
        }
             
if ((sprite.x < 192) && (sprite.x > 96) && (sprite.y < 260) && (sprite.y > 195))
        {
            blue4_2.style.visibility="visible";
            
        }
              
if ((sprite.x < 384) && (sprite.x > 288) && (sprite.y < 65) && (sprite.y > 0))
        {
            blue1_4.style.visibility="visible";
            
        }
              
if ((sprite.x < 96) && (sprite.x > 0) && (sprite.y < 260) && (sprite.y > 195))
        {
            blue4.style.visibility="visible";
            
        }
                
if ((sprite.x < 288) && (sprite.x > 192) && (sprite.y < 195) && (sprite.y > 130))
        {
            blue3_3.style.visibility="visible";
            
        }
                
if ((sprite.x < 96) && (sprite.x > 0) && (sprite.y < 65) && (sprite.y > 0))
        {
            blue1.style.visibility="visible";
         
        }
                
if ((sprite.x < 192) && (sprite.x > 96) && (sprite.y < 195) && (sprite.y > 130))
        {
            blue3_2.style.visibility="visible";
            
        }
                
if ((sprite.x < 480) && (sprite.x > 384) && (sprite.y < 65) && (sprite.y > 0))
        {
            blue1_5.style.visibility="visible";
           
        }
               
if ((sprite.x < 288) && (sprite.x > 192) && (sprite.y < 130) && (sprite.y > 65))
        {
            blue2_3.style.visibility="visible";
            
        }
               
if ((sprite.x < 480) && (sprite.x > 384) && (sprite.y < 195) && (sprite.y > 130))
        {
            blue3_5.style.visibility="visible";
            
        }
        



    render();
}   



function screen()
{

let screen = document.querySelector(".bigbluescreen");

screen.style.visibility="visible";

};


     
      
      



function render()
{
      
    ctx.clearRect(0,0, canvas.width, canvas.height);

    ctx.drawImage(
    image,
    sprite.frameX, sprite.frameY, sprite.frameWidth, sprite.frameHeight, sprite.x, sprite.y, sprite.width, sprite.height, 
    );

}






var image = new Image();
image.src = "images/spriteback.png";
var image = new Image();
image.src = "images/spriteleft.png";
var image = new Image();
image.src = "images/spriteright.png";