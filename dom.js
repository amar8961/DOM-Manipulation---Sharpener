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

// Task - 4 -> GetElementByClassName 
// GETELEMENTSBYCLASSNAME 
var items = document.getElementsByClassName('list-group-item') 
console.log(items); 
console.log(items[1]); 
items[1].textContent = 'Hello 2'; 
items[1].style.fontWeight = "bold"; 
items[1].style.backgroundColor = 'yellow';

// Gives error 
//items.style.backgroundColor = '#f4f4f4';
for(var i = 0; i < items.length; i++){
    items[i].style.backgroundColor = '#f4f4f4';
}

items[2].style.backgroundColor = '#00FF00';
for(var i = 0; i < items.length; i++){
    items[i].style.fontWeight = "bold";
    items[i].style.color='#FF0000';
}
 items[4].style.color='green';
 var tag = document.getElementsByTagName('li')
 console.log(tag)
 tag[4].style.backgroundColor='black';

 // Task - 6 -> QuerySelector && QuerySelectorALL
 // QUERYSELECTOR 
 // selece by id
//  var header = document.querySelector('#main-header');
//  header.style.borderBottom = 'solid 4px #ccc';
// // select bt tag
// var input = document.querySelector('input'); 
// input.value = 'Hello World';

// var submit = document.querySelector('input[type="submit"]'); 
// submit.value="SEND"
// // select by class
// var item = document.querySelector('.list-group-item'); 
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child'); 
// lastItem.style.color = 'blue';
// var secondItem = document.querySelector('.list-group-item:nth-child(2)'); 
// secondItem.style.color = 'coral';

// // QUERYSELECTORALL 
// select by class
// var titles = document.querySelectorAll('.title');

// console.log(titles); 
// titles[0].textcontent = 'Hello';

// select by tag
// var odd = document.querySelectorAll('li:nth-child(odd)'); 
// var even = document.querySelectorAll('li:nth-child(even)');

// for(var i = 0; i < odd.length; i++){
//  odd[i].style.backgroundColor = '#f4f4f4';
//  even[i].style.backgroundColor = '#ccc';
// }

var secondItem = document.querySelector('.list-group-item:nth-child(2)'); 
secondItem.style.backgroundColor = 'green';

var thirdItem = document.querySelector('.list-group-item:nth-child(3)'); 
thirdItem.style.display = 'none';

var qitem = document.querySelectorAll('.list-group-item');
console.log(qitem);
qitem[1].style.color='green';

var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i = 0; i < odd.length; i++){
    odd[i].style.backgroundColor = '#00FF00';
}
