class Snake {
    constructor(pos) {
        this.tail = [pos]
        this.spd = createVector(0, 0)
        this.size = 0
        this.foodEatenListeners = []
        this.status = 'alive'
    }

    update() {
        if (this.status == 'dead') {
            return
        }
        let newHeadPos = p5.Vector.add(this.tail[this.size], this.spd)
        let newHeadX = (newHeadPos.x + cols) % cols
        let newHeadY = (newHeadPos.y + rows) % rows
        this.tail.push(createVector(newHeadX, newHeadY));
        this.tail.shift()
        this.death();
    }

    death() {
        for (let i = this.size - 1; i >= 0; i--) {
            if (this.tail[this.size].dist(this.tail[i]) < 1) {
                this.status = 'dead'
                this.spd = createVector(0, 0)
            }
        }
    }

    show() {
        fill(this.status === 'alive' ? 'white' : 'red')
        this.tail.forEach(cur => {
            rect(cur.x * scl, cur.y * scl, scl, scl)
        });
    }

    up() {
        this.spd = createVector(0, -1)
    }

    down() {
        this.spd = createVector(0, 1)
    }

    left() {
        this.spd = createVector(-1, 0)
    }

    right() {
        this.spd = createVector(1, 0);
    }

    eat(foods) {
        for (let fi = 0; fi < foods.length; fi++) {
            const food = foods[fi];
            if (this.tail[this.size].dist(food.pos) === 0) {
                if (food.size > 0) {
                    let foodArray = new Array(food.size).fill(food.pos)
                    this.tail = [...this.tail, ...foodArray]
                } else {
                    this.tail.splice(0,abs(food.size));
                }
                this.size += food.size
                this.fireFoodEatenEvent(fi)
            }
        };
    }

    fireFoodEatenEvent(index) {
        this.foodEatenListeners.forEach(listener => {
            listener(index)
        });
    }

    registerFoodEatenListener(listener) {
        this.foodEatenListeners.push(listener);
    }
}
