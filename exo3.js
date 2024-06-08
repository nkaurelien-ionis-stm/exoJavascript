
/// DECLARATION

function mediaCollezioni(items) {
    return (items || []).length
}

/**
 * FIFO
 */
class Collezione {

    constructor() {
        this.items = []
    }

    occurrences(o) {
        return this.items.filter(el => el === o).length
    }

    add(o) {
        return this.items.push(o)
    }

    len() {
        return this.items.length
    }

    // remove(){}
}

/**
 * FIFO
 */
class Coda extends Collezione {

    /**
     * FIFO
     */
    remove() {
        return this.items.shift()
    }
}

/**
 * LIFO
 */
class Pila extends Collezione {

    /**
     * LIFO
     */
    remove() {
        return this.items.pop()
    }
}


/// EXECUTION
c = new Coda()
c.add(1)
c.add(2)
c.add(3)
c.add(4)
c.remove()
c.remove()

p = new Pila()
p.add(1)
p.add(2)
p.add(3)
p.add(4)
p.remove();
p.remove();

const r3 = mediaCollezioni([c, p])

console.log(c,);
console.log(p);
console.log(r3);
