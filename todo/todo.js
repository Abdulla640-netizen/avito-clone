const taskInput = document.getElementById("newTaskInput");
const addTaskButton = document.getElementById("addTaskButton");
const todoList = document.getElementById("todoList");
addTaskButton.addEventListener("click", function () {
  const listItem = document.createElement('li');

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskInput.value;

        // кнопка редактировать
        const editButton = document.createElement('button');
        editButton.className = 'icon-btn edit';
        editButton.innerHTML = '✏️';
        editButton.addEventListener('click', function(e) {
            e.stopPropagation();
            startEditing();
        });

        // кнопка удалить
        const deleteButton = document.createElement('button');
        deleteButton.className = 'icon-btn delete';
        deleteButton.innerHTML = '🗑';
        deleteButton.addEventListener('click', function(e) {
            e.stopPropagation();
            listItem.classList.add('fade-out');
            setTimeout(() => listItem.remove(), 300);
        });

        // отметка выполненной задачи
        listItem.addEventListener('click', function() {
            listItem.classList.toggle('completed');
        });

        listItem.appendChild(taskSpan);
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);

        todoList.appendChild(listItem);

        // === редактирование ===
        function startEditing() {
            const input = document.createElement('input');
            input.type = 'text';
            input.value = taskSpan.textContent;
            input.className = 'edit-input';

            const saveButton = document.createElement('button');
            saveButton.className = 'icon-btn save';
            saveButton.innerHTML = '✅';

            saveButton.addEventListener('click', function(e) {
                e.stopPropagation();
                if (input.value.trim() !== '') {
                    taskSpan.textContent = input.value.trim();
                }
                finishEditing();
            });

            input.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') saveButton.click();
                if (e.key === 'Escape') finishEditing();
            });

            listItem.replaceChild(input, taskSpan);
            listItem.replaceChild(saveButton, editButton);
            input.focus();

            function finishEditing() {
                listItem.replaceChild(taskSpan, input);
                // saveButton.remove();
                listItem.replaceChild(editButton,saveButton);
            }
        }

  taskInput.value = "";
});






// remove -удалить
// replaceChild - заменить дочерний элемент
// finishEditing - завершить редактирование
// focus-фокус
// trim-текст без пробелов
// stopPropagation-
// createElement-создание элемента
// startEditing-начать редоктирование
// setTimeout-
// toggle-переключатель
