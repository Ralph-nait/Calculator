console.log('loaded js')
//do it with a parameter as well ie. function(event)
//this function will change the 10px border color 
let btn = document.getElementById('div-button')
const ran = function(){
    return Math.floor(Math.random() * 256)
}
const foo = function(){
    console.log('foo works')
    let color = `rgba(${ran()},${ran()},${ran()},1)`
    btn.style.borderColor = color;
   console.log(getComputedStyle(btn).borderColor);
}
btn.addEventListener('click', foo);

// let btn = document.getElementById('div-button');
// const foo = function() {
//     getComputedStyle(btn).borderColor;
// }
// btn.addEventListener('click', foo);
