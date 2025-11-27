let canvas= document.querySelector("canvas");
canvas.width = 1200;
canvas.height = 560;
let ctx = canvas.getContext("2d");
canvas.style.imageRendering = "pixelated";
ctx.imageSmoothingEnabled = false;
    


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
sprite.x = 378;
sprite.y = 50;
var image = new Image();
image.addEventListener("load", loadHandler, false);
image.src= "img/front2.png";
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


  
    if(!moveUp && moveDown && !moveLeft && !moveRight)
    {
        Xspeed = 0;
        Yspeed = 3;
        image.src = "img/front2.png";
    }
     if(!moveUp && moveDown)
    {
        Xspeed = 0;
        Yspeed = 3;
        image.src = "img/front2.png";
    }
    if(moveLeft && !moveRight && !moveUp && !moveDown)
    {
        Xspeed = -3;
        Yspeed = 0;
        image.src ="img/left2.png";
    }
     if(moveLeft && !moveRight)
    {
        Xspeed = -3;
        Yspeed = 0;
        image.src="img/left2.png";
    }
    if(!moveLeft && moveRight && !moveUp && !moveDown)
    {
        Xspeed = 3;
        Yspeed = 0;
        image.src="img/right2.png";
    }
    if(!moveLeft && moveRight)
    {
        Xspeed = 3;
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
    Xspeed = -2;
    Yspeed = -2;
    image.src="img/back2.png";

  }
    if(!moveLeft && moveRight && moveUp && !moveDown)
  {
    Xspeed = 2;
    Yspeed = -2;
    image.src="img/back2.png";

  }
    if(moveLeft && !moveRight && !moveUp && moveDown)
  {
    Xspeed = -2;
    Yspeed = 2;
    image.src="img/front2.png";
  }
      if(!moveLeft && moveRight && !moveUp && moveDown)
  {
    Xspeed = 2;
    Yspeed = 2;
    image.src="img/front2.png";
  } 
      if(moveUp && !moveDown && !moveRight && !moveLeft)
  {
   Xspeed = 0;
   Yspeed = -3; 
   image.src = "img/back2.png";
 
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
/*
    if (sprite.y < 476)
    {
        sprite.y=476;
    }

    if (sprite.y > 476)
    {
        sprite.y = 476;
    }

*/

if ((sprite.x > 500) && (sprite.x < 700) && (sprite.y > 150) && (sprite.y <= 180)) 
{
    let textOne = document.querySelector(".text1");
    textOne.style.visibility = "visible";
}
else {
    let textOne = document.querySelector(".text1");
    textOne.style.visibility = "hidden";
}


if ((sprite.x > 690) && (sprite.x < 850) && (sprite.y > 180) && (sprite.y <= 220)) 
{
    let textTwo = document.querySelector(".text2");
    textTwo.style.visibility = "visible";
}
else {
    let textTwo = document.querySelector(".text2");
    textTwo.style.visibility = "hidden";
}

if ((sprite.x > 1050) && (sprite.x < 1200) && (sprite.y > 170) && (sprite.y <= 220)) 
{
    let textThree = document.querySelector(".text3");
    textThree.style.visibility = "visible";
}
else {
    let textThree = document.querySelector(".text3");
    textThree.style.visibility = "hidden";
}

if ((sprite.x > 0) && (sprite.x < 160) && (sprite.y > 240) && (sprite.y <= 300)) 
{
    let textFour = document.querySelector(".text4");
    textFour.style.visibility = "visible";
}
else {
    let textFour = document.querySelector(".text4");
    textFour.style.visibility = "hidden";
}

if ((sprite.x > 300) && (sprite.x < 470) && (sprite.y > 460) && (sprite.y <= 500)) 
{
    let textFive = document.querySelector(".text5");
    textFive.style.visibility = "visible";
}
else {
    let textFive = document.querySelector(".text5");
    textFive.style.visibility = "hidden";
}

if ((sprite.x > 640) && (sprite.x < 790) && (sprite.y > 460) && (sprite.y <= 500)) 
{
    let textSix = document.querySelector(".text6");
    textSix.style.visibility = "visible";
}
else {
    let textSix = document.querySelector(".text6");
    textSix.style.visibility = "hidden";
}


if (sprite.y < 140)
{
    toprow.src = "img/toprow.png";
}

if (sprite.y > 140)
{
    toprow.src = "img/empty.png";
}

if (sprite.y < 190)
{
    guyright.src = "img/guyright.png";
}

if (sprite.y > 190)
{
    guyright.src = "img/empty.png";
}

if (sprite.y < 200)
{
    guymiddle.src = "img/guymiddle.png";
}

if (sprite.y > 200)
{
    guymiddle.src = "img/empty.png";
}

if (sprite.y < 270)
{
    guyleft.src = "img/guyleft.png";
}

if (sprite.y > 270)
{
    guyleft.src = "img/emptypng";
}


if (sprite.y < 476)
{
    bottomrow.src = "img/bottomrow.png";
}

if (sprite.y > 476)
{
    bottomrow.src = "img/emptypng";
}

if ((sprite.y >= 0) && (sprite.y <= 10) && (sprite.x <= 428) && (sprite.x > 328))
{
    window.open("https://rayofiris.github.io/raysrealm/", "_self");
}

if((sprite.x + sprite.width >= canvas.width) && (sprite.y <= 330) && (sprite.y >= 230))
{
    window.open("https://www.tumblr.com/zorasapphires", "_self");
}

if ((sprite.y <= 156) && (sprite.x >= 140) && (sprite.x <=190))
{
    toprow.src="img/empty.png";
    window.open("https://rayofiris.neocities.org/", "_self");
}

if ((sprite.y <= 470) && (sprite.y >= 460) && (sprite.x >= 140) && (sprite.x <= 190))
{
    bottomrow.src = "img/empty.png";
    window.open ("file:///C:/Users/raybu/Desktop/research-prospectus/index.html","_self");
}

if ((sprite.y <= 472) && (sprite.y >= 462) && (sprite.x >= 940) && (sprite.x <= 990))
{
    bottomrow.src = "img/empty.png";
    window.open ("https://www.instagram.com/zorasapphire","_self");
}


    render();

}


let toprow = new Image();
toprow.src = "img/toprow.png";

let bottomrow = new Image();
bottomrow.src = "img/bottomrow.png";

let guyleft = new Image();
guyleft.src = "img/guyleft.png";

let guyright = new Image();
guyright.src = "img/guyright.png";

let guymiddle = new Image();
guymiddle.src = "img/guymiddle.png";




     
      
      



function render()
{
      
    ctx.clearRect(0,0, canvas.width, canvas.height);

    ctx.drawImage(
    image,
    sprite.frameX, sprite.frameY, sprite.frameWidth, sprite.frameHeight, sprite.x, sprite.y, sprite.width, sprite.height, 
    );

    ctx.drawImage(
        toprow,
        0, 0, 1200, 560 );

    ctx.drawImage(
        guyleft,
        0, 0, 1200, 560 );

    ctx.drawImage(
        guymiddle,
        0, 0, 1200, 560 );

    ctx.drawImage(
        guyright,
        0, 0, 1200, 560 );
    
    ctx.drawImage(
        bottomrow,
        0, 0, 1200, 560 );

}







var image = new Image();
image.src = "img/left2.png";
var image = new Image();
image.src = "img/right2.png";
var image = new Image();
image.src = "img/back2.png";