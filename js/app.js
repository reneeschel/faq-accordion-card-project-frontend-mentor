let span = document.getElementsByTagName('span')
let btn = document.querySelectorAll('.button');
let box = document.querySelector('.box');

for(let i = 0; i < btn.length; i++) {

    btn[i].addEventListener('click', function() {
    let resultTarget = this.nextElementSibling;
    resultTarget.classList.toggle('active')     
  })

for(let i = 0; i < span.length; i++) {

    btn[i].addEventListener('click', function() {
    span[i].classList.toggle('icon-arrow-up')
    box.classList.toggle('moving-box')

    })
   
  }       
}

