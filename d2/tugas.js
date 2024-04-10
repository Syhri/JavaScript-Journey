// Tugas

const btn1 = document.getElementById('btn1')
const btn2 = document.querySelector('.btn2')
const body = document.body

const defaultText = "Fitra"
btn2.textContent = defaultText


btn1.style.padding = "10px"      
btn1.style.marginRight = "50px"      
btn1.style.fontSize = "1rem"      
btn1.style.background = "pink"   

btn2.style.padding = "10px"      
btn2.style.background = "pink"
btn2.style.fontSize = "1rem"

function clickButton2() {
    btn2.style.background = "Pink"
    const textBaru = document.createElement('h1')
    textBaru.textContent = "Kamu Ngeklik aku ya"
    body.append(textBaru)
}

const textMuncul = document.createElement('p')

function gantiNama() {
    btn2.textContent = "Abadi"  
    textMuncul.textContent = "Syahril Fitrawan Abadi" 
    textMuncul.style.color = "black"
    body.append(textMuncul)
} 


function textAsli(){
    btn2.textContent = defaultText
    textMuncul.style.color = "red"
}

