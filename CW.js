// <!DOCTYPE html>
// <html lang="en">
//     <head>
//     <meta charset="UTF-8">
//     <title>Title</title>
//     </head>
//     <body>
//     <h1>I am an h1!</h1>
// <p id="first" class="special">Hello</p>
//     <p class="special">Goodbye</p>
//     <p>Hi Again</p>
// <p id="last">Goodbye Again</p>
// </body>
// </html>

// Print the first p tag to the console using the ID, class, and tag selectors.
// var pTag = document.getElementsByTagName("p");
var pTag = document.getElementById("first");
console.log(pTag.textContent);

var classSelector =document.querySelector(".special");
console.log(classSelector.textContent);

var tagName = document.getElementsByTagName("p");
console.log(tagName.textContent);

// Print the special class using both the query selector and query all selector.
var classSpecial=document.querySelector(".special");
console.log(classSpecial.textContent);

var classSpecialAll =document.querySelectorAll(".special");
for (var i=0;i<classSpecialAll.length;i++)
{
    console.log(classSpecialAll[i].textContent);
}

// Change the color of the h1 statement to blue
var h1NewColor = document.querySelector("h1");
h1NewColor.style.color = "blue";

// Change the color of the last p tag to yellow.
var lastPTag = document.getElementById("last");
lastPTag.style.color="yellow";