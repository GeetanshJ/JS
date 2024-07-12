// query selector is used because rather than byID byClass we use this and querySelectorAll return nodeList 
// querySelector return firstElement






// Property	           Includes Hidden Elements?	      Includes HTML Tags?	      Considers CSS Styles?	          Triggers Reflow/Repaint?
// innerText	        	      No	                          No	                      Yes	                               Yes
// textContent	        	      Yes	                          No	                      No	                               No
// innerHTML	        	      Yes	                          Yes	                      No	                               No


// Description

// innerText    =>  Represents the "rendered" text content of a node and its descendants.
// textContent  =>  Represents the text content of a node and its descendants, regardless of CSS styles.
// innerHTML    =>  Represents the HTML content of a node, including all tags and elements.


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <style>
//         .child{
//             display: none;
//         }
//     </style>
// </head>
// <body>
//     <div class="parent">Parent
//         <div class="child">child1</div>
//         <div class="child">child2</div>
//         <div class="child">child3</div>
//         <div class="child">child4</div>
//         <div class="child">child5</div>
//     </div>

//     <script>
//         let text = document.querySelector(".parent");
//         console.log(text.innerHTML);
//         console.log(text.innerText);
//         console.log(text.textContent);
//     </script>
// </body>
// </html>








// getAttribute =>  used get the attribute of a tag attribute means like id , class or name src etc
// div.getAttribute("name of id or class or any attribute");

// setAttribute => if we want to set attribute





// append(), prepend , remove,createElement etc are function for adding html element



// APPEND VS APPEND CHILD
// =====================

// Types of Arguments:
// appendChild can only append a single Node object at a time.
// append can append multiple nodes and/or strings at once

// Direct Text Strings:
// appendChild cannot directly append text strings; you need to create a text node.
// append can directly append text strings without creating a text node.

// Return Value:
// appendChild returns the appended node.
// append returns undefined.



// setTimeout => to perform asynchronous function

function print() {
    set(() => {
        console.log(1);
    }, 2000);
}

print();


// callback function => function passed as parameter to different function as argument
// to pass an argument in callback function we will write arrow function