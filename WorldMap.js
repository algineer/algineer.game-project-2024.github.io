class WorldMap {
    constructor(config) {
        this.image = new Image()
        this.image.src = config.src
        // this.image.onload = () => (console.log(this.image.width))
    }

    render(ctx, position) {
        ctx.drawImage(
            this.image, 
            position.width / 2 - this.image.width / 2, 
            position.height / 2 - this.image.height /2
            )
    }
}

window.WorldMap = {
    Home :{
        src: 'assets/backgrounds/maze.jpg',
        walls:{

        }

    }
}