'use strict'

// const menu = document.getElementById('menu')
// const hum = document.getElementById('hum')

// menu.addEventListener('click',function(){
//     document.body.className = 'menu-open';
// });

// hum.addEventListener('click',function(){
//     document.body.className = '';
// });

let show = document.getElementById('show');
let hide = document.getElementById('hide');

show.addEventListener('click',function(){
    document.body.className = 'menu-open';
});

hide.addEventListener('click',function(){
    document.body.className = '';
});