
const gameContainer = document.getElementById('gameContainer')
const canvas = document.getElementById('gameCanvas')
const ctx = canvas.getContext("2d")

let img1 = new Image()
img1.src = 'assets/backgrounds/greenWorld.jpg'


const draw = () => {

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Clear the entire canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw background image at the center of the canvas
    const centerX = canvas.width / 2 - img1.width / 2 
    const centerY = canvas.height / 2 - img1.height / 2
    ctx.drawImage(img1, centerX, centerY);

    requestAnimationFrame(draw)
}

requestAnimationFrame(draw)

// window.addEventListener('keydown', () => {
//     canvasPos.x += 3
// })
