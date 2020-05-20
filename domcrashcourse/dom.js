// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title =  123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID //
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';

// GETELEMENTSBYCLASSNAME //
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < items.length; i++){
//   items[i].style.backgroundColor = '#f4f4f4';
// }

// GETELEMENTSBYTAGNAME //
//var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < li.length; i++){
//   li[i].style.backgroundColor = '#f4f4f4';
// }

// QUERYSELECTOR //
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World'

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND"

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

 //var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// QUERYSELECTORALL //
//var titles = document.querySelectorAll('.title');

//console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even= document.querySelectorAll('li:nth-child(even)');

// for(var i = 0; i < odd.length; i++){
//   odd[i].style.backgroundColor = '#f4f4f4';
//   even[i].style.backgroundColor = '#ccc';
//
/*     part 2  ------------------------------------------ access and create Element */

//TRAVERSING THE DOM //

//var itemList = document.querySelector('#items');
// //parentNode

// console.log(itemList.parentNode.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';

// //parentElement
// var itemList = document.querySelector('#items');
// console.log(itemList.parentElement.parentElement);
// itemList.parentElement.style.backgroundColor = '#ff4';

// childNodes

// console.log(itemList.childNodes); // Space will appear in the list (not to good)

// console.log(itemList.children); //Better. display just the list item
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';


//firstChild

//console.log(itemList.firstChild); // not the better option

//firstElementChild
// console.log(itemList.firstElementChild); //The better Option. it gives directly the first item
// itemList.firstElementChild.textContent = 'Hello 1';


// //lastChild

// console.log(itemList.lastChild); // not the better option

// // lastElementChild
// console.log(itemList.firstElementChild); //The better Option. it gives directly the last item
// itemList.lastElementChild.textContent = 'Hello 4';


// //nextSibling

// console.log(itemList.nextSibling);

// //nextElementSibling

// console.log(itemList.nextElementSibling);

// //previousSibling

// console.log(itemList.previousSibling);

// //previousElementSibling

// console.log(itemList.previousElementSibling);

// itemList.previousElementSibling.style.color = 'green';

///// Now we're gonna create element and insert them to our HTML Page

// // CreateElement

//Create a DIV

// var newDiv = document.createElement('div');
// //Add Class
// newDiv.className = 'hello';

// //Add id
// newDiv.id = 'hello1';

// //Add Attr
// newDiv.setAttribute('title', 'Hello Div');

// //Create Text Node
// var newDivText = document.createTextNode('Hello World');

// //Add text to div

// newDiv.appendChild(newDivText);

// // Add it to the DOM

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// console.log(newDiv);
// newDiv.style.fontSize= '30px';

// container.insertBefore(newDiv, h1);


/* Part 3 ----------------------------- --------------------  EVENT JavaScript*/

// var button = document.getElementById('button').addEventListener
// ('click', buttonClick);


// function buttonClick(e) {
//     //console.log("button Clicked");
//     // document.getElementById('header-title').textContent = 'Changed';
//     // document.querySelector('#main').style.backgroundColor = '#f4f4f4';

//     //console.log(e);
//     // console.log(e.target);
//     // console.log(e.target.id);
//     // console.log(e.target.classList);
 var output = document.getElementById('output');
//     // output.innerHTML = '<h3>' + e.target.id + '</h3>';

//     // console.log(e.type) // type of event;

//     //console.log(e.clientX); // Position of the mouse  X
//     //console.log(e.clientY); // Position of the mouse Y

//     // console.log(e.offsetX);
//     // console.log(e.offsetY);
//     // console.log(e.altKey);
//     // console.log(e.shiftKey);
//     // console.log(e.ctrlKey);   
// }

var button = document.getElementById('button');
var box = document.getElementById('box');
//button.addEventListener('click', runEvent);
//button.addEventListener('dblclick', runEvent);
//button.addEventListener('mousedown', runEvent);
//button.addEventListener('mouseup', runEvent);

// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);

// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);

// box.addEventListener('mousemove', runEvent);

var itemInput = document.querySelector('input[type = "text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');


// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);

// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

// itemInput.addEventListener('input', runEvent);

// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);

form.addEventListener('submit', runEvent);


function runEvent(e){
    e.preventDefault();
    console.log('EVENT TYPE : ' + e.type);
    //console.log(e.target.value);
    // document.getElementById('output').innerHTML = '<h3> '+ e.target.value + ' </h3>'
    // output.innerHTML = '<h3> MouseX: ' + e.offsetX + ' </h3><h3> MouseY: ' + e.offsetY + ' </h3>';

    // document.body.style.backgroundColor = "rgb(" + e.offsetX + ", "+ e.offsetY +" , 40 )";
}