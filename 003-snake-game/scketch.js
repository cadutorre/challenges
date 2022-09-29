const scl = 20

let cols
let rows

let snake
let foods = []

function setup() {
    createCanvas(600, 600)
    cols = floor(width / scl)
    rows = floor(height / scl)
    frameRate(10)
    snake = new Snake(pickRandomLocation())
    pickUpAnotherFood()
    snake.registerFoodEatenListener((index) => {
        foods.splice(index, 1)
        pickUpAnotherFood()
    })
}

function pickUpAnotherFood() {
    let chance = random(100);
    if (chance >= 70) {
        foods.push(new Food(pickRandomLocation(), 1, 'green'))
    } else {
        foods.push(new Food(pickRandomLocation(), 5, 'gold'))
    }
    if (chance < 40) {
        foods.push(new Food(pickRandomLocation(), -5, 'black'))
    }
}

function draw() {
    background(51)
    snake.update()
    snake.show()
    foods.forEach(food => {
        food.show()
    });
    snake.eat(foods)
}

function pickRandomLocation() {
    return createVector(floor(random(cols)), floor(random(rows)))
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        snake.up()
    } else if (keyCode === DOWN_ARROW) {
        snake.down()
    } else if (keyCode === LEFT_ARROW) {
        snake.left()
    } else if (keyCode === RIGHT_ARROW) {
        snake.right()
    }
}


