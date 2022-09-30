const GRAVITY = 0.1

function randomY() {
    return random(-50, -600)
}

function randomSpeed(z) {
    return map(z, 0, 10, 0, 5)
}

function randomLen(z) {
    return map(z, 0, 10, 5, 20)
}

function randomWeight(z) {
    return map(z, 0, 10, 0, 2)
}

class Drop {
    constructor() {
        this.initialize()
    }

    initialize(){
        this.x = random(width)
        this.z = random(0, 10)
        this.y = randomY()
        this.yspeed = randomSpeed(this.z)
        this.len = randomLen(this.z)
        this.weight = randomWeight(this.z)
    }

    fall() {
        this.yspeed += GRAVITY
        this.y += this.yspeed
        this.bottom()
    }

    bottom() {
        if (this.y > height) {
            this.initialize()
        }
    }

    show() {
        strokeWeight(this.weight)
        stroke(138, 43, 226)
        line(this.x, this.y, this.x, this.y + this.len)
    }
}