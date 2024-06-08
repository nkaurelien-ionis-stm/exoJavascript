
/// DECLARATION

class PuntoCartesiano {
    
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    dist(q) {
        const a = Math.pow(q.x - this.x, 2);
        const b = Math.pow(q.y - this.y, 2);
        const dist = Math.sqrt(a + b);
        return dist
    }

    translate(q) {
        this.x = q.x
        this.y = q.y
    }

    zero() {
        this.x = 0;
        this.y = 0;
    }
}

/// EXECUTION

const punto = new PuntoCartesiano(10, 10);
console.log('Creation x=10 y=10');
console.log(punto);

console.log('\nDistance x=50 y=70');
const dPunto = new PuntoCartesiano(50, 70);
const dist = punto.dist(dPunto);
console.log(dist);

console.log('\nTranslate to x=25 y=30');
const qPunto = new PuntoCartesiano(25, 30);
punto.translate(qPunto)
console.log(punto);

console.log('\nZero');
punto.zero()
console.log(punto);
