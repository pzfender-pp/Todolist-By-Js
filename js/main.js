const input = document.querySelector('#user-input');
const addBtn = document.querySelector('#user-add');
const listItem = document.querySelector('#list-items');
const userItem = document.querySelector('.user-item');


// add todo item function
function addTodo() {
  const todoItem = input.value;
  // Create div
  const divItems = document.createElement('div');
  const divTodo = document.createElement('div');
  // Create li
  const li = document.createElement('li');
  // Create i
  const iTag = document.createElement('i');
  //Create p
  const pTag = document.createElement('p');

  // Add class to div
  divItems.classList.add('user-items');
  divTodo.classList.add('todo-item');
  // Add class to li
  li.classList.add('user-item');
  // Add class to iTag
  iTag.setAttribute('class', 'far fa-minus-square');
  // Add class to pTag
  pTag.classList.add('finished');

  // Check input condition and append to list-items
  if (todoItem.trim() === '') {
    alert('Please input some item')
  }else {
    li.innerHTML = todoItem;
    pTag.innerHTML = 'Finished';
    divTodo.appendChild(li);
    divTodo.appendChild(pTag);
    divItems.appendChild(divTodo);
    divItems.appendChild(iTag);
    listItem.appendChild(divItems);
    input.value = '';
  }
}

// remove todo item function
function removeTodo(e) {
  const item = e.target;
  let parentItem = item.parentElement;
  if (item.className === 'far fa-minus-square'){
    parentItem.remove();
  }
  if (item.className === 'user-item') {
    item.classList.add('line-through')
    if (item.classList[1] === 'line-through'){
      item.nextElementSibling.style.display = "block";
    }
  }
}



// addEventListenner
addBtn.addEventListener('click', addTodo);
listItem.addEventListener('click', removeTodo);