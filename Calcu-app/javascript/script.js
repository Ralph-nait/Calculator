console.log('loaded js')

/*FOR SELECTING CSS PROPERTIES YOU CANNOT USE element.style since it will only work if the
CSS is inline meaning it is in the html code itself. You need to use getComputedStyle 
so that it returns the properties you want. The syntax is getComputedStyle(element).property 
(ex. let variableElement = document.getElementById('test-div')
    getComputerStyle(variableElement).borderColor);

It is camel case if its separated by '-'. borderColor returns RGB(0,0,0) values
*/ 
let btn = document.getElementById('div-button')

let tet = btn.style.borderColor;
console.log(tet)

//do it with a parameter as well ie. function(event)
//this function will change the 10px border color 
const foo = function(){

}