
/// DECLARATION


class Cineteca {

    constructor() {
        this.library = [];
    }

    vedi(titolo) {
        const index = this.library.findIndex(item => item.titolo === titolo)

        if (index == -1) {
            return -1
        }

        // const deleted = this.library.splice(index, 1)
        const item = this.library[index]

        // item.vedi += 1
        // // //    item.vedi = item.vedi + 1 
        // // //    item.vedi = ++item.vedi 
        // // //    item.vedi = item.vedi++ 

        // // this.library.splice(index, 1, item)
        // this.library[index] = item;

        this.library[index].vedi += 1

        return item.vedi

    }

    remove(titolo) {
        const index = this.library.findIndex(item => item.titolo === titolo)

        if (index != -1) {
            // const deleted = this.library.splice(index, 1)
            this.library.splice(index, 1)
        }

        return this.library.length
    }

    count() {
        return this.library.length
    }

    add(titolo, regista, anno) {

        const film = {
            titolo, regista, anno, vedi: 0
        }

        // let exist =  false

        // for (const item of this.library) {

        // }
        // for (const key in this.library) {
        //     if (Object.hasOwnProperty.call(this.library, key)) {
        //         const item = this.library[key];
        //         const exist = (item.titolo === film.titolo)
        //         if (!exist) {
        //             this.library = [...this.library, film]
        //         }
        //     }
        // }


        const existingItem = this.library.find(item => item.titolo === film.titolo)
        if (!existingItem) {
            // this.library.push(film)
            this.library = [...this.library, film]
        }

        return this.library.length

    }

}

/// EXECUTION

let c = new Cineteca()
const size1 = c.add("Il Signore degli Anelli", "Peter Jackson", 2001)
const size2 = c.add("Guida galattica per autostoppisti", "Garth Jennings", 2005)

const vedi1 = c.vedi("Il Signore degli Anelli")
const vedi2 = c.vedi("Il Signore degli Anelli")

const size3 = c.add("Spaceballs", "Mel Brooks", 1987)

// console.log(c);

const sizeAfterDelete1 = c.remove("Il nome della rosa")

const countTotal = c.count()

// console.log(c);

console.log({ size1, size2, vedi1, vedi2, size3, sizeAfterDelete1, countTotal });