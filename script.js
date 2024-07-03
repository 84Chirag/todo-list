/*
let btn = document.getElementById('btn-1');
let btn2 = document.getElementById('btn-2');
btn.addEventListener("click", (e) => {
  e.preventDefault()
  let titlec = title.value;
  let descriptionc = description.value;

  localStorage.setItem("todo", JSON.stringify([titlec, descriptionc]));
  let todo = document.getElementById('todo');
  // localstorage.getItem("todo")
  todo.innerHTML = `
  <h1> ${titlec} </h1>
  <p> ${descriptionc} </p>
  `
  title.value = "";
  description.value = "";
})

btn2.addEventListener("click", (e) => {
  e.preventDefault()
  localStorage.removeItem("todo");
  todo.innerHTML = "";
  title.value = "";
  description.value = "";

})
*/

/*
let btn = document.getElementById('btn-1');
let btn2 = document.getElementById('btn-2');
let todo = JSON.parse(localStorage.getItem("todo")) || [];

btn.addEventListener("click", (e) => {
  e.preventDefault();

  let titlec = title.value;
  let descriptionc = description.value;

  todo.push([titlec, descriptionc]);
  localStorage.setItem("todo", JSON.stringify(todo));

  displaytodo();
  
  title.value = "";
  description.value = "";
});

btn2.addEventListener("click", (e) => {
  e.preventDefault();

  localStorage.removeItem("todo");
  todo = [];
  displaytodo();
  
  title.value = "";
  description.value = "";
});

function displaytodo() {
  
  let todoContainer = document.getElementById('todo');
  todoContainer.innerHTML = ""; // Clear the existing todos
  
  for (let todos of todo) {
    let title = todos[0];
    let description = todos[1];
  
    let todoItem = document.createElement("div");
    todoItem.innerHTML = `
      <h1>${title}</h1>
      <p>${description}</p>
    `;
    todoContainer.appendChild(todoItem);
  }
}

displaytodo();
*/

let btn = document.getElementById('btn-1');
let btn2 = document.getElementById('btn-2');
let btn4 = document.getElementById('btn-4');
let todo = JSON.parse(localStorage.getItem("todo")) || [];
let editIndex = null;

btn.addEventListener("click", (e) => {
  e.preventDefault();

  let titlec = title.value;
  let descriptionc = description.value;

  todo.push([titlec, descriptionc]);
  localStorage.setItem("todo", JSON.stringify(todo));

  displaytodo();

  title.value = "";
  description.value = "";
});

btn2.addEventListener("click", (e) => {
  e.preventDefault();

  localStorage.removeItem("todo");
  todo = [];
  displaytodo();

  title.value = "";
  description.value = "";
});

btn4.addEventListener("click", (e) => {
  e.preventDefault();

  let titlec = title.value;
  let descriptionc = description.value;

  todo[editIndex] = [titlec, descriptionc];
  localStorage.setItem("todo", JSON.stringify(todo));

  displaytodo();

  title.value = "";
  description.value = "";

  btn4.classList.add('d-none');
  btn.classList.remove('d-none');
});

function displaytodo() {

  let todoContainer = document.getElementById('card');
  todoContainer.innerHTML = ""; // Clear the existing todos

  for (let i = 0; i < todo.length; i++) {
    let title = todo[i][0];
    let description = todo[i][1];

    let todoItem = document.createElement('div');
    todoItem.classList.add('todo-list');
    todoItem.classList.add('col-lg-3');
    todoItem.classList.add('mt-4');
    todoItem.innerHTML = `
      <h1>${title}</h1>
      <p>${description}</p>
      <button id="btn-3-${i}" class="btn btn-danger mb-2 btn4"> Delete </button>
      <button id="btn-5-${i}" class="btn btn-info mb-2 btn4"> Edit </button>
    `;
    todoContainer.appendChild(todoItem);

    let btn3 = document.getElementById(`btn-3-${i}`);
    btn3.addEventListener("click", (e) => {
      e.preventDefault();

      todo.splice(i, 1);
      localStorage.setItem("todo", JSON.stringify(todo));

      displaytodo();
    });

    let btn5 = document.getElementById(`btn-5-${i}`);
    btn5.addEventListener("click", (e) => {
      e.preventDefault();

      title.value = title;
      description.value = description;

      btn4.classList.remove('d-none');
      btn.classList.add('d-none');

      editIndex = i;
    });
  }
}

displaytodo();
