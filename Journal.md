> ## Journal
> This journal is for what I learned during the time I have coded specific parts
> may not be everyday but I am hopeful.
>
>---
> 01-29-24
> 
> For selecting CSS PROPERTIES YOU CANNOT USE **element.style** since it will only work if the
CSS is **Inline** meaning it is in the html code itself. You need to use **getComputedStyle** 
so that it returns the properties you want. The syntax is **getComputedStyle(element).property** 
>
>(ex. let variableElement = document.getElementById('test-div') 
>
>getComputerStyle(variableElement).borderColor);
It is camel case if its separated by '-'. borderColor returns RGB(0,0,0) values 
>