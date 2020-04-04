'use strict'

document.getElementById('hum').addEventListener('click', function(){
    this.classList.toggle('active');
    document.getElementById('menu').classList.toggle('active');
});

document.getElementById('hum2').addEventListener('click', function(){
    this.classList.toggle('show');
    document.getElementById('menu2').classList.toggle('show');
});