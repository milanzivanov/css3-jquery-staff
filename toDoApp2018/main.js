let addTodo = document.getElementById("addTodo");
let todoInput = document.getElementById("addInput");
let todoList = document.getElementById("todoList");

addTodo.addEventListener("click", function() {
    let todoText = todoInput.value;
    todoInput.value = "";

    if (todoText === "") {
        alert("no no empty!!!");
         
    } else {
        let todo = document.createElement("DIV");
        todo.classList.add("todo");
        todo.innerHTML = todoText;
    
        let removeBtn = document.createElement("BUTTON");
        removeBtn.classList.add("delite");
        removeBtn.innerHTML = "Delite";
        removeBtn.addEventListener("click", function() {
            todo.parentNode.removeChild(todo);
        });
        todo.append(removeBtn);
        todoList.append(todo);
    }

});