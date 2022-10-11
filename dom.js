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

// var Title = document.getElementsByClassName('title');
// console.log(Title[0]);
// // console.log() is used only for print in console
// Title[1].style.borderBottom = 'solid 3px #000';
// Title[0].style.color='#00FF00';
// Title[0].style.fontWeight='bold';

// // Task - 4 -> GetElementByClassName 
// // GETELEMENTSBYCLASSNAME 
// var items = document.getElementsByClassName('list-group-item') 
// console.log(items); 
// console.log(items[1]); 
// items[1].textContent = 'Hello 2'; 
// items[1].style.fontWeight = "bold"; 
// items[1].style.backgroundColor = 'yellow';

// // Gives error 
// //items.style.backgroundColor = '#f4f4f4';
// for(var i = 0; i < items.length; i++){
//     items[i].style.backgroundColor = '#f4f4f4';
// }

// items[2].style.backgroundColor = '#00FF00';
// for(var i = 0; i < items.length; i++){
//     items[i].style.fontWeight = "bold";
//     items[i].style.color='#FF0000';
// }

// // Task - 5 ->
//  items[4].style.color='green';
//  var tag = document.getElementsByTagName('li')
//  console.log(tag)
//  tag[4].style.backgroundColor='black';

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

// var secondItem = document.querySelector('.list-group-item:nth-child(2)'); 
// secondItem.style.backgroundColor = 'green';

// var thirdItem = document.querySelector('.list-group-item:nth-child(3)'); 
// thirdItem.style.display = 'none';

// var qitem = document.querySelectorAll('.list-group-item');
// console.log(qitem);
// qitem[1].style.color='green';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// for(var i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor = '#00FF00';
// }

// // Task - 7 -> Creating Nodes and Modifying DOM 

// TRAVERSING THE DOM //
var itemList = document.querySelector('#items');
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// childNodes
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// // FirstChild
// console.log(itemList.firstChild);
// // firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';


// lastChild
// console.log(itemList.lastChild);
// lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// nextSibling
// console.log(itemList.nextSibling);
// // nextElementSibling
// console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousSibling);
// previousElementSibling
// console.log(itemList.previousElementSibling);itemList.previousElementSibling.style.color = 'green';

// createElement

// // Create a div
// var newDiv =  document.createElement('div');

// // Add class
// newDiv.className= 'hello';

// // Add id
// newDiv.id = 'hello1';

// // Add attr
// newDiv.setAttribute('title', 'Hello Div');

// // Create text node
// var newDivText = document.createTextNode('Hello World');

// // Add text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// console.log(newDiv);

// newDiv.style.fontSize = '30px';

// container.insertBefore(newDiv, h1);

// Task Answer
// add before Item Lister
// Create a div
var newDiv1 =  document.createElement('div');

// Add class
newDiv1.className= 'hello';

// Add id
newDiv1.id = 'hello2';

// Add attr
newDiv1.setAttribute('title', 'Hello Div');

// Create text node
var newDivText1 = document.createTextNode('Hello World');

// Add text to div
newDiv1.appendChild(newDivText1);

var body = document.querySelector('body .container #main');
var h2 = document.querySelectorAll('body .container #main .title');
// console.log(body)
// console.log(h2[1])
console.log(newDiv1);

newDiv1.style.fontSize = '20px';

body.insertBefore(newDiv1, h2[1]);

// add before item 1
var newDiv2 =  document.createElement('div');
newDiv2.className= 'hello';
newDiv2.id = 'hello3';
var newDivText2 = document.createTextNode('Hello World');

// Add text to div
newDiv2.appendChild(newDivText2);
var body1 = document.querySelector('body .container .list-group');
var item1 = document.querySelectorAll('body .container .list-group .list-group-item');
console.log(item1[0]);
body1.insertBefore(newDiv2, item1[0]);