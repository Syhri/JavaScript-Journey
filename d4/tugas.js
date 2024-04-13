/**
 * TUGAS (FUNCTION)
 * 1. Membuat perhitungan matematika
 *    - luas lingkaran
 *    - luas segitiga
 *    - luas persegi panjang 
 *    - luas jajargenjang
 * 2. Menghitung total gaji yang didapat dalam satu bulan
 *    dengan input minimal:
 *    - nama karyawan (string)
 *    - gaji perhari (int, float)
 *    - jumlah hari masuk kerja (int)
*/

// LUAS LINGKARAN
const luas_lingkaran = (r) => {
    return 3.14 * r * r
}
console.log(luas_lingkaran(2))

// LUAS SEGITIGA
function luas_segitiga(a, t) {
    return 0.5 * a * t
}
console.log(luas_segitiga(2, 3))

// LUAS PERSEGI PANJANG
const luas_persegi_panjang = new Function(
    'p', 
    'l', 
    'return p * l'
)
console.log(luas_persegi_panjang(2, 5))

// LUAS JAJAR GENJANG
const luas_jajar_genjang = (a, t) => {
    console.log(a * t)
}
luas_jajar_genjang(2, 5)


// MENGHITUNG TOTAL GAJI
function totalGaji() {
    const nama = prompt("masukkan nama karyawan")
    const jml_hari = prompt("masukkan jumlah hari kerja karyawan")
    if(jml_hari >= 15) {
        if(jml_hari <= 31) {
            const gajiPerhari = prompt("berapa gaji perhari karyawan")
            console.log(`nama ${nama} memiliki total gaji sebesar Rp.${jml_hari * gajiPerhari}`)
        }
    } else {
        console.log('maaf anda dipecat') 
    }
} 

totalGaji();










