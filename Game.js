
class Game {
    constructor(element) {
        this.canvas = element
        this.ctx = this.canvas.getContext('2d')
        this.worldMap = null

        this.x = 0
        this.y = 0
        this.speed = 4

        this.character = new Image()
        this.character.src = 'assets/characters/translucent.png'

        this.aspectRatio = 16/9

        this.init() //Initalize the game
    }

    gameRenderer() {

        //Set the game canvas to follow the window size
        // this.canvas.height = window.innerHeight 
        // this.canvas.width = window.innerWidth

        //Clear off the canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        //draw worldMap
            
        this.x += this.movementController.directions[0] * this.speed
        this.y += this.movementController.directions[1] * this.speed

        this.worldMap.render(this.ctx,
            {
                width: this.canvas.width - this.x,
                height: this.canvas.height - this.y

            })
        this.ctx.drawImage(this.character, this.canvas.width / 2 - 17 / 2, this.canvas.height / 2 - 12 / 2, 17, 12)
    }

    gameLoop() {

        let previousTick; //Game tick in milliseconds since last animation request
        const fps = 1 / 60  //Run game at 60 frames a second

        const mainLoop = (currentTick) => {

            // //: if(paused){return}


            if (previousTick === undefined)
                previousTick = currentTick

            //for (let delta = (currentTick-previousTick); delta >= fps; delta -= fps) {
            this.gameRenderer()
            // console.log(this.keyboardManager.direction)
            //}

            previousTick = currentTick

            //Game Running
            requestAnimationFrame(mainLoop)
            // cancelAnimationFrame(mainLoop)

        }

        //Initial Tick & Resume Tick
        requestAnimationFrame(mainLoop)
    }

    //Start the game
    init() {
        //get game container so we can add more elements as needed
        const gameContainer = document.getElementById('gameContainer')

        //Create Movement Controller
        this.movementController = new MovementController()

        //Create the Game Map
        //Later could load from a local data where we left off
        this.worldMap = new WorldMap({src: window.WorldMap.Home.src})

        

        //Call to main game loop
        this.gameLoop()

        
    }
}

//Create a game
(() => {
    const game = new Game(document.getElementById('gameCanvas'))
})()