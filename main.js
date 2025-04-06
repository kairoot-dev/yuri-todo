var todos = [];

function renderTodos() {
    var todosContainer = document.getElementById("todos");
    todosContainer.innerHTML = "";

    todos.forEach(function(todo) {
        var todoItem = document.createElement("tr");
        todoItem.innerHTML = `<tr>
            <td>${ todo.id }</td>
            <td>${ todo.title }</td>
            <td>
                <button class="btn btn-primary">Edit</button>
                <button class="btn btn-danger">Delete</button>
            </td>
        </tr>`;

        todosContainer.append(todoItem);
    });
}

document.addEventListener('DOMContentLoaded', function(event) {
    var todoForm = document.getElementById("todoForm");

    todoForm.addEventListener('submit', function(e) {
        e.preventDefault();

        var title = document.getElementById("title");
        // generate random id
        var id = Math.random().toString(36).substring(2, 15);

        todos.push({
            id: id,
            title: title.value,
            isCompleted: false,
        });
        
        todoForm.reset();

        renderTodos();
    });
});