// // EXAMINE THE DOCUMENT OBJECT //

// // console.dir(document); 
// console.log(document.domain); 
// console.log(document.URL); 
// console.log(document.title); 
// //document.title = 123; 
// console.log(document.doctype); 
// console.log(document.head); 
// console.log(document.body); 
// console.log(document.all); 
// console.log(document.all[10]); 
// // document.all[10].textContent = 'Hello'; 
// console.log(document.forms[0]); 
// console.log(document.links);
// // showing empty because no links
// console.log(document.images); 
// // showing empty because no images

// GETELEMENTBYID // 
// console.log(document.getElementById('header-title')); 
// var headerTitle = document.getElementById('header-title'); 
// var header = document.getElementById('main-header'); 
// console.log(headerTitle); 
// headerTitle.textcontent = 'Hello'; 
// headerTitle.innerText = 'Goodbye'; 
// here Goodbye overweite Hello
// console.log(headerTitle.textContent);
// this will affect only in page
// console.log(headerTitle.innerText); 
// this will affect in page and console both places.
// headerTitle.innerHTML = 'Hello'; 
// header.style.borderBottom = 'solid 3px #000';

var Title = document.getElementsByClassName('title');
console.log(Title[0]);
// console.log() is used only for print in console
Title[1].style.borderBottom = 'solid 3px #000';
Title[0].style.color='#00FF00';
Title[0].style.fontWeight='bold';