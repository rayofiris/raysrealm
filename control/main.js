import "control.css";
import { resources } from "./resource";



const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");  

const draw = () => {
    
    const background = resources.images.background;
    if (background.isLoaded) {
        ctx.drawImage(background.image, 0, 0)
    }
}

setInterval(() => {
    console.log("draw")
    draw()
}, 300);