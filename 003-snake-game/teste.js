
function setup() {

    let spd = createVector(0, 1)

    let queue = [createVector(0, 1)]
    console.log(queue)

    for (let i = 0; i < 5; i++) {
        queue.push(p5.Vector.add(queue[0], spd))
        console.log("Antes", queue)
        queue.shift()
        console.log("DEPOIS", queue)
    }

}
