//question num 01

function createAdder(numToAdd) {
  return function(num) {
    return num + numToAdd;
  }
}


const add5 = createAdder(5);
console.log(add5(10)); 
console.log(add5(20)); 

//question num 2

function searchArray(arr, value) {
  if (arr.length === 0) {
    return false;
  }

  if (arr[0] === value) {
    return true;
  }

  return searchArray(arr.slice(1), value);
}

const arr = [1, 2, 3, 4, 5];
console.log(searchArray(arr, 3));
console.log(searchArray(arr, 6)); 

//question num 3
function addNewParagraph(text) {
  const newParagraph = document.createElement('p');
  

  newParagraph.textContent = text;
  document.body.appendChild(newParagraph);
}
addNewParagraph('This is a new paragraph!');

//question num 4
function addNewListItem(text) {
  const newListItem = document.createElement('li');

  newListItem.textContent = text;
  const unorderedList = document.querySelector('ul');

  unorderedList.appendChild(newListItem);
}

addNewListItem('New List Item');

//question num 5
function changeBackgroundColor(element, color) {
  element.style.backgroundColor = color;
}
const myElement = document.getElementById('my-element');
changeBackgroundColor(myElement, 'red');

// question num 6
function saveObjectToLocalStorage(key, obj) {
  
  const jsonStr = JSON.stringify(obj);
  
  localStorage.setItem(key, jsonStr);
}
const myObj = { name: 'alina', age: 18 };
saveObjectToLocalStorage('myKey', myObj);

//question num 7
function getObjectFromLocalStorage(key) {

  const jsonStr = localStorage.getItem(key);
  
  const obj = JSON.parse(jsonStr);
  
 
  return obj;
}
const myObj2 = getObjectFromLocalStorage('myKey');
console.log(myObj2);
  
// question num 8
function saveObjectToLocalStorage(obj) {

  for (const prop in obj) {

    localStorage.setItem(prop, obj[prop]);
  }
  
  const newObj = {};
  
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);

    newObj[key] = localStorage.getItem(key);
  }

  return newObj;
}
const myObj3 = { name: 'John', age: 28 };
const newObj = saveObjectToLocalStorage(myObj3);
console.log(newObj);

setInterval(
  function() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
  }, 1000);