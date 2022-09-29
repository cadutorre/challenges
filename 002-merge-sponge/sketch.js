let a = 0
let sponge = []

function setup() {
    createCanvas(400, 400, WEBGL);
    sponge.push(new Box(0, 0, 0, 200))
}

function mousePressed() {
    let nextSponge = []
    sponge.forEach(b => {
        nextSponge.push(...b.generate())
    });
    sponge = nextSponge
}

function draw() {
    background(51)
    noStroke()
    noFill()
    lights()

    rotateX(a)
    rotateY(a)
    sponge.forEach(b => {
        b.show()
    });
    a += 0.01
}