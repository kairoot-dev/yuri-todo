var todos = [
    {
        id: 1,
        title: "Eat",
        isCompleted: false,
    }, 
    {
        id: 2,
        title: "Code",
        isCompleted: false,
    },
    {
        id: 3,
        title: "Sleep",
        isCompleted: false,
    },
    {
        id: 4,
        title: "Repeat",
        isCompleted: false,
    },
];

var selectedTodo = null;


function toggled(){
    if (selectedTodo) {
        selectedTodo.isCompleted = !selectedTodo.isCompleted;
        renderTodos();
    }
};

function renderTodos() {
    var todosContainer = document.getElementById("todos");
    todosContainer.innerHTML = "";

    todos.forEach(function(todo) {
        var todoItem = document.createElement("tr");
        todoItem.innerHTML = `<tr>
            <td>${ todo.id }</td>
            <td>${ todo.title }</td>
            <td>${ todo.isCompleted }<td/>
            <td">
                <button class="btn btn-primary" onClick="editTodo(${todo.id})">Edit</button>
                <button class="btn btn-danger" onClick="deleteTodo(${todo.id})">Delete</button>
            </td>
            
        </tr>`;

        todosContainer.append(todoItem);
    });
}

function deleteTodo(id) {
    const index = todos.findIndex(function(todo) {
        return todo.id === id;
    });

    todos.splice(index, 1);
    renderTodos();
}

function editTodo(id) {
    const todo = todos.find(function(todo) {
        return todo.id === id;
    });

    selectedTodo = todo;

    var title = document.getElementById("title");
    var todoForm = document.getElementById("todoForm");
    var submitButton = document.getElementById("submitButton");
    
    title.value = selectedTodo.title;
    submitButton.innerText = 'Update';
}

function updateTodo() {
    var todoForm = document.getElementById("todoForm");

    var title = document.getElementById("title");
    var newTitle = title.value;

    // Update the todo title
    selectedTodo.title = newTitle;

    const index = todos.findIndex(function(todo) {
        return todo.id === selectedTodo.id;
    });
    
    todos[index] = selectedTodo;

    renderTodos();

    // Reset the form
    selectedTodo = null;
    todoForm.reset();
    submitButton.innerText = 'Submit';
}

function addTodo() {
    var todoForm = document.getElementById("todoForm");

    var title = document.getElementById("title");
    // generate random id
    var date = new Date();
    var id = date.getTime();

    todos.push({
        id: id,
        title: title.value,
        isCompleted: false,
    });
    
    todoForm.reset();

    renderTodos();
}

document.addEventListener('DOMContentLoaded', function(event) {
    renderTodos();


    todoForm.addEventListener('submit', function(e) {
        e.preventDefault();

        if(selectedTodo !== null) {
            updateTodo();
        } else {
           addTodo();
        }
    });
});