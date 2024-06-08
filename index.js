
// var items = {length: 'l'}
// var items = []
var items = undefined
// var items = {}

// console.log(typeof items);
// function counter(arr) {
//     if (!arr ) {
//         // if (arr === undefined || arr === null ) {
//         return 0
//     } else {
//         if (typeof arr == 'object') {
//             return items.length
//         }
//     }
// }


function counter(arr) {
    return (arr || []).length
}
// console.log(items.length);
console.log(counter(false));