> ## Journal
> This journal is for what I learned and some troubles I have encountered during the time I have coded specific parts
> may not be everyday but I am hopeful.
>
>---
>## 01-29-24
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
>## 01-31-24
>
> Totally got the **getComputedStyle** wrong as it only returns the value of the style not directly change it. you need to use **element.style**. Not going to delete the 01-29 and other wrong future logs for reminder how little I know.
>
> I have fixed the issue (around 3am) first problem is that I was not returning the value of the function (I didn't put the **return** keyword). Second the single quotes messed me up when i gave up on why the foo function is not working and searched for answers. Should've have been **back ticks** not **single quotes**. 
>
> For changing the background color it does not matter whether you use rgba or rgb it will work the same.
>