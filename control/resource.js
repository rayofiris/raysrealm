class Resources {
    constructor() {
        //everything we plan to download 
        this.toLoad = {
            background: "img/pcbackground.png",
            sprite: "img/spritesheet.png",
        };

        //a bucket to keep all our images 
        this.images = {}; 

        //load each image
        Object.keys(this.toLoad).forEach(key => {
            const img = new Image();
            img.src = this.toLoad[key];
            this.images[key] = {
                image : img, 
                isLoaded: false
            } 
            img.onload = () => { 
                this.images[key].isLoaded = true;
            } 
        })
    }
}

//create one instance for the whole app to use  

export const resources = new Resources();