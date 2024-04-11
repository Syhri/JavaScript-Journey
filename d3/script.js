/*** 
BERSENANDUNG BERSAMA ARRAY
*/

/** MEMBUAT ARRAY
const arraySaya = ['1', '2', '3'];

let arrayKamu = [];
arrayKamu[0] = 'Aku'
arrayKamu[1] = 'Suka'
arrayKamu[2] = 'Kamu'

console.log(arrayKamu)

MEMANGGIL ARRAY DENGAN OBJECT
let arrayKita = new Array()
console.log(arrayKita)
arrayKita[0] = 'mawar'
arrayKita[3] = 'clap'
arrayKita[1] = 'ex'
console.log(arrayKita[0])*/

/** BUAH-BUAH
//🍉🍏🍎🍐🍊🍋🍌🍉🍇🥥🍍🍑🍒🍈🍓🥝🍅🍆🥑🥕🌽🌶️🥕

const arraySaya = ['🍑', '🍓', '🍉', '🍆', '🥑']

// MENAMPILKAN SELURUH BUAH
// console.log(arraySaya)

const semangka = arraySaya.includes('🍉')

if (semangka) {
    const posisiSemangka = arraySaya.indexOf('🍉')
    const index_before = posisiSemangka - 1
    const index_after = posisiSemangka + 1
    const before = arraySaya[index_before]
    const after = arraySaya[index_after]

    console.log(`buah sebelum semangka adalah ${index_before}`)
    console.log(`buah setelah semangka adalah ${index_after}`)
    console.log(`buah semangka itu ada dan dia berada diposisi index ke - ${posisiSemangka}`)

    // SHORTHAND UNTUK MENGECEK INDEKS AWAL DAN AKHIR
    const buahAwal = arraySaya.shift()
    console.log(`buah awal adalah ${buahAwal}`)
//  const buahAkhir = arraySaya.pop()    
    const buahAkhir = arraySaya[arraySaya.length - 1]
    console.log(`buah akhir adalah ${buahAkhir}`)

} else {
    console.log(`i don't know where is semangka`)
}*/

/** ALICIA KEY

const arraySaya = []

arraySaya['alpukat'] = '🥑'
arraySaya['jeruk'] = '🍊'

console.log(arraySaya['alpukat']) */

/** KOPI & BUAH JOHN MAYER
 * SHALLOW DAN DEEP COPY

const arraySaya = ['🍇', '🥥', '🍍', '🍑', '🍒', '🍈'] // original
// const newArraySaya = arraySaya // percuma 
// const newArraySaya = [...arraySaya] // KW 
// const newArraySaya = arraySaya.slice() // KW 
// const newArraySaya = Array.from(arraySaya) // KW 
const newArraySaya = JSON.parse(JSON.stringify(arraySaya)) // KW 

newArraySaya[0] = '🍊'

console.log(arraySaya)
console.log(newArraySaya)*/

/** KURT COBAIN

const arraySaya = ['🍊', 10, {tomato: function() { console.log('ini tomat') } }, ['eat', 'food']] 

arraySaya[2].tomato()*/

// DEPAPEPE
// const arraySaya = ['🍒', '🍈', '🍓']
// const arrayKamu = ['🎃', '👻', '☕']

// const mergeArray = arraySaya.concat(arrayKamu)

// console.log(mergeArray)

const datas = [
    {
        name: 'dea afrizal',
        stack: 'js, pyhton',
        age: 30
    },
    {
        name: 'syahril',
        stack: 'c++',
        age: 20
    },
    {
        name: 'fitrawan',
        stack: 'php',
        age: 26
    },
    {
        name: 'abadi',
        stack: 'react js',
        age: 40
    },
]

datas
    .sort((a, b) => a.age - b.age)
    .filter((x) => x.age >= 20)
    .map((values) => console.log(values))