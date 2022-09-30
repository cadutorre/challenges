
const drops = new Array(500)

function setup() {
    createCanvas(600, 400)
    for (let i = 0; i < drops.length; i++) {
        drops[i] = new Drop()
    }
}

function draw() {
    background(230, 230, 250)
    drops.forEach(drop => {
        drop.fall()
        drop.show()
    });
}
