/*
a little hole of funtion in javascript
**/

// return -> console.log

// function addName(fullName) {
//     return fullName
// }

// alert(addName('dea Gobles'))


/** METODE PERTAMAN MENGGUNAKAN/MEMAKAI FUNCTION
function addName(firstName, lastName) {
    console.log(firstName, lastName)
    console.log('nama depan: ', firstName)
    console.log('nama marga: ', lastName)
}

// CONTOH IMPLEMENTASI MENGGUNAKAN ARGUMEN
// function addName2() {
//     console.log('nama depan: ', arguments[0])
//     console.log(arguments[1])
// }

// function addName() {
//     for (let i = 0; i < arguments.length; i++) {
//         console.log('nama lengkap: ', arguments[i])
//     }
// }

addName('syahril', 'fitrawan')

addName2('aulia', 'fitri') */


/**METODE KEDUA
const fullname = function addname(firstname, lastname) {
    console.log(firstname, lastname)
}

fullname('dea 1', 'fikri 1')*/

/** KEYWORD new
function addname(firstname, lastname) {
    console.log(firstname, lastname)
}

const sum = new Function(
    'x',
    'y',
    'return x+y'
)

console.log(sum(1, 2)) */


// CARA 1 - STANDAR FUNCTION                                                                                
function sum1(x, y) {
    x = prompt("masukkana nilai x")
    y = prompt("masukkana nilai y")
    let z = x+y
    alert(z)
}

// CARA 2 - KEYWORD NEW FUNCTION
const sum2 = new Function('x', 'y','console.log(x+y)')

// CARA 3 - ARROW FUNCTION
const sum3 = (x, y) => { console.log(x + y) }

sum1()
// sum2(2, 2)
// sum3(3, 3)