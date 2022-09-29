class Food {
    constructor(pos, size, color) {
        this.pos = pos;
        this.size = size
        this.color = color
    }

    show() {
        fill(this.color)
        rect(this.pos.x * scl, this.pos.y * scl, scl, scl)
    }
}
