// document.title = "Syahril"
// const body = document.body
// body.append("Hello")

// const h1 = document.createElement('h1')
// h1.textContent = "<marquee>Anjay ini h1 bro</marquee>"

// const namaSaya = document.createElement('p')
// namaSaya.innerHTML = "<marquee>Dea Afrizal</marquee>" // Jika pakai innerHTML dia akan bergerak dari kanan ke kiri (menggunakan marquee)

// const namaKamu = document.createElement('b')
// namaKamu.innerText = "<marquee>Nama Kamu</marquee>"

// Untuk memunculkan element apa yang sudah di buuat dari javascript
// body.append(h1)
// body.append(namaSaya)
// body.append(namaKamu)

const btn1 = document.getElementById('btn1')
const btn2 = document.querySelector('button')
const body = document.body

const defaultText = 'Klik Saya 1'
btn1.textContent = defaultText

// Ngestyle langsung dari JS
btn1.style.border = "none"
btn1.style.padding = "5px"
btn1.style.fontsize = "20px"
btn1.style.background = "tomato"

function clickButton() {
   btn1.style.background = "aqua"
   const newText = document.createElement('p')
   newText.textContent = "HALO BUNG! APA KABAR"
   body.append(newText)
}

function ubahText() {
   btn1.textContent = "haha hihi"
}

function oriText() {
   btn1.textContent = defaultText;  
}
