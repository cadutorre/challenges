class Star {
    constructor(x, y, z) {
        this.x = x
        this.y = y
        this.z = z
    }

    update(spd, clr) {
        this.clr = clr
        this.z = this.z - spd
        if (this.z < 1) {
            this.z = width
        }
    }

    show() {
        fill(this.clr)
        noStroke()
        const sx = map(this.x / this.z, 0, 1, 0, width)
        const sy = map(this.y / this.z, 0, 1, 0, height)
        const r = map(this.z, 0, width, 16, 0)
        ellipse(sx, sy, r, r)
    }
}   