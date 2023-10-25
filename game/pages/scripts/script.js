const canvas = document.getElementById("game")
const context = canvas.getContext('2d')
const grid = 10
const N = 20
let player = {"row":10, "col":10}
let food = {"row":5, "col":5}
let wall = {"row":14, "col":17}
let direction = "right"
let count = 0


function loop() {

    rAF = requestAnimationFrame(loop)


    context.clearRect(0,0, canvas.width, canvas.height)


    if (++count == 10){
    if (direction == "right") player.col++
    if (direction == "left") player.col--
    if (direction == "down") player.row++
    if(direction == "up") player.row--

    count = 0


    }
    if(player.row == food.row && player.col == food.col){

        food.row = Math.floor(Math.random()*N)
        food.col = Math.floor(Math.random()*N)

        
        wall.row = Math.floor(Math.random()*N)
        wall.col = Math.floor(Math.random()*N)
        
        


    }
    if(player.row == wall.row && player.col == wall.col) {
        cancelAnimationFrame(rAF)
    }



    //player
    context.fillStyle = "yellow"
    context.fillRect(player.col * grid, player.row * grid, grid - 1, grid - 1)


    //food
    context.fillStyle = "green"
    context.fillRect(food.col * grid, food.row * grid, grid - 1, grid - 1)


    //wall
    context.fillStyle = "red"
    context.fillRect(wall.col * grid , wall.row * grid , grid - 1 , grid - 1)
}


document.addEventListener("keydown" , function(e){
    if (e.which == 37) direction = "left"
    if (e.which == 39) direction = "right"
    if (e.which == 40) direction = "down"
    if (e.which == 38) direction = "up"
})


rAF = requestAnimationFrame(loop)









