'use strict'

// const menu = document.getElementById('menu')
// const hum = document.getElementById('hum')

// menu.addEventListener('click',function(){
//     document.body.className = 'menu-open';
// });

// hum.addEventListener('click',function(){
//     document.body.className = '';
// });

let menu = document.getElementById('menu');
let hide = document.getElementById('hide');

menu.addEventListener('click',function(){
    document.body.className = 'menu-open';
});

hide.addEventListener('click',function(){
    document.body.className = '';
});