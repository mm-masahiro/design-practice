'use strict'

const menu = document.getElementById('menu')
const hum = document.getElementById('hum')

menu.addEventListener('click',function(){
    document.body.className = 'menu-open';
});

hum.addEventListener('click',function(){
    document.body.className = '';
});