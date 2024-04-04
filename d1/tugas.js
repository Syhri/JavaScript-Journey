// TUGAS KECIL

// 1. Prompt untuk mengetahui saldo akhir dari apa yang diinputkan oleh user 
// 2. Menentukan harid dari tanggal yang ada saat ini di pc kalian

//Tugas 1
let saldoAwal = 100
let pendapatan = 500
const thr = 50

let saldoAkhir = saldoAwal + pendapatan + thr

let saldo = prompt(`Saldo awal Anda adalah Rp.${saldoAwal}, dan pendapatan Anda sebelumnya Rp.${pendapatan}, kemarin anda mendapatkan THR sebesar Rp.${thr}, apakah Anda ingin melihat saldo akhir Anda dari semua yang sudah Anda dapatkan?`)
if (saldo == "iya" || saldo == "ya") {
   alert(`Saldo akhir Anda: Rp.${saldoAkhir}`)
} else {
   alert(`yaudah saya ambil nih`)
}

// Tugas 2
let hari = new Date().getDay()
switch (hari) {
   case 0:
      day = "Minggu";
      break;
   case 1:
      day = "Senin";
      break;
   case 2:
      day = "Selasa";
      break;
   case 3:
      day = "Rabu";
      break;
   case 4:
      day = "Kamis";
      break;
   case 5:
      day = "Jum'at";
      break;
   case 6:
      day = "Sabtu";
}
alert(`hari ini adalah hari ${day}`)


