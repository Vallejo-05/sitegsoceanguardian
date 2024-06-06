window.addEventListener("scroll", function(){
  let header = document.querySelector('#navbar');
  header.classList.toggle('scrollar', window.scrollY > 55);
})


var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
  nextimage()
}, 5000)

function nextimage(){
  cont++

  if (cont > 2){
    cont = 1
  }
  document.getElementById('radio'+cont).checked = true
}



