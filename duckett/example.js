// change 1 element
var header = document.getElementById('header');

header.className = 'nav';


//change nodeList
var list = document.querySelectorAll('li[id]');

list.className = 'hot';

// change text in an element
var itemTwo = document.getElementById('two');
var elText = itemTwo.firstChild.nodeValue;
elText = elText.replace('kale', 'nuts');
itemTwo.firstChild.nodeValue = elText;

// Adding content with innerHTML
var item = document.getElementById('one')
var itemContent = item.innerHTML;
item.innerHTML = '<a href=\"http://example.org\">' + itemContent + '</a>';

// adding content with DOM manipulation
var newItem = document.createElement('li');
var newTxt = document.createTextNode('quinoa');
newItem.appendChild(newTxt);
var position = document.getElementsByTagName('ul')[0];
position.appendChild(newItem);

// removing an element
var removeEl = document.getElementsByTagName('li')[3];
var containerEl = removeEl.parentNode;
containerEl.removeChild(removeEl);

// add items to start and end of list
var list2 = document.getElementsByTagName('ul')[0];

var lastNewListItem = document.createElement('li');
var lastNewText = document.createTextNode('eggs');
lastNewListItem.appendChild(lastNewText);
list2.appendChild(lastNewListItem);

// add new item to start of list
var frontNewListItem = document.createElement('li');
var firstNewText = document.createTextNode('bananas');
frontNewListItem.appendChild(firstNewText);
list2.insertBefore(frontNewListItem, list2.firstChild);

// add a class to all items 
var listItems = document.querySelectorAll('li');
for(var i = 0; i < listItems.length; i++){
	listItems[i].className ='in-bag';
}

// // add items to the heading
var heading = document.querySelector('h2');
var headingText = heading.firstChild.nodeValue;
var totalItems = listItems.length;
var newHeading =  headingText + '<br> Shopping Cart: <span>' + totalItems + '</span>';
heading.innerHTML = newHeading;


// event delegation

function getTarget(e) {
	if(!e) {
		e = window.event;
	}
	return e.target || e.srcElement;
}

function itemDone(e) {
	var target;
	var elParent;
	var elGrandparent;
	target = getTarget(e);
	console.log(target);
	elParent = target.parentNode;
	console.log(elParent);
	elGrandparent = target.parentNode.parentNode;
	console.log(elGrandparent);
	elGrandparent.remove(elParent);

	if (e.preventDefault) {
		e.preventDefault();
	} else {
		e.returnValue = false;
	}
}	

var el = document.getElementById('shoppingList');
	if (el.addEventListener) {
		el.addEventListener('click', function(e) {
			itemDone(e);
		}, false);
	} else {
		el.attachEvent('onclick', function(e){ itemDone(e); });
	}


// load

function setup() {
	var textInput;
	textInput = document.getElementById('username');
	textInput.focus();
}
window.addEventListener('load', setup, false);












