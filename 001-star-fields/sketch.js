
const stars = Array(600).fill('');

function setup() {
    var canvas = createCanvas(600, 600);
    canvas.parent('sketch-holder')
    for (let i = 0; i < stars.length; i++) {
        stars[i] = new Star(//
            random(-width, width), //
            random(-height, height), //
            random(0, height))
    }

}
function draw() {
    spd = parseInt(document.getElementById("rangeSpeed").value)
    let red = parseInt(document.getElementById("rangeRed").value)
    let green = parseInt(document.getElementById("rangeGreen").value)
    let blue = parseInt(document.getElementById("rangeBlue").value)
    clr = `rgb(${red}, ${green}, ${blue})`

    background(0)
    translate(width / 2, height / 2)
    stars.forEach(star => {
        star.update(spd, clr)
        star.show()
    });
}