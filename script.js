const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


const addTodo = () => {
   
    if(todoInput.value == '') {
        return;
    }

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo-item');
    todoList.appendChild(todoDiv);

    const todoLi = document.createElement('li');
    todoLi.innerText = todoInput.value;
    todoDiv.appendChild(todoLi);

    const checkBtn = document.createElement('button');
    checkBtn.innerHTML = '<i class="fa fa-check">';
    checkBtn.classList.add('check');
    todoDiv.appendChild(checkBtn);

     // ADDING CHECK FUNCTION
        checkBtn.addEventListener('click', () => {
            const checkd = todoLi.classList.toggle('checked');
    })

    const trashBtn = document.createElement('button');
    trashBtn.innerHTML = '<i class="fa fa-trash">';
    trashBtn.classList.add('trash');
    todoDiv.appendChild(trashBtn); 

     // DELETING A TODO ITEM
        trashBtn.addEventListener('click', () => {
            todoLi.style.backgroundColor = 'rgb(223, 63, 63)';
            todoLi.style.transition = '0.2s ease-in-out';
            todoLi.addEventListener('transitionend', () => {
                todoDiv.remove()
            })    
    }); 
    
    todoInput.value = '';
} 



todoButton.addEventListener('click', addTodo);

todoInput.addEventListener('keypress', (e) => {
      if(e.keyCode === 13) {
        e.preventDefault();
        addTodo(); 
      }
});





