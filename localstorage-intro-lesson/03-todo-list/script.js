// 🧠 STEP 1: SELECT ELEMENTS FROM THE PAGE
// Select the input where users type their todo (id="todoInput")
// Select the button to add the todo (id="addBtn")
// Select the unordered list where todos will appear (id="todoList")
 const input = document.getElementById("todoInput");
 const button = document.getElementById("addBtn");
 const ulList = document.getElementById("todoList");



// 💾 STEP 2: LOAD TODOS FROM LOCALSTORAGE
// Try to get the key "todos" from localStorage
// If it exists, parse the JSON string into an array
// If it doesn’t exist, start with an empty array
// Display any saved todos

const saveTodos = localStorage.getItem("todos")//       save to localStorage tries to read the "todos" key and returns a string if daved or null if nothing is saved
const todos = saveTodos ? JSON.parse(saveTodos) : []; // using the Ternanry operator short hand for if.. else ?: **parse: turn a string into a real object or array using the JSON: is the strucute - turning string into an array "list" or start with and empty array ** 
// JSON.parse(savedTodos) converts the saved string back into an array
// use an empty array []; so the app still works
// grabbed the UlList up top where tasks will appear

//IF ELSE VERSION OF ? TERNARY OPERATOR 
//  let todos;
//    if (savedTodos) {
//   todos = JSON.parse(saveTodos);
//  } else {
//   todos = [];
//  }



function displayTodos() {      
  ulList.innerHTML = "";      // clear existing list so we dont duplicate
  todos.forEach((todo, index) => {   // loop through each todo item in the array
 const li = document.createElement("li");   // create an li for each new task
 li.textContent = todo;          // .textContent: sets the visible text inside the element todo: is a string from your todos array above adding todo will pus the task text inside the list item sos the user can see it 

const deleteBtn = document.createElement("button");  // create element deleteBtn
deleteBtn.textContent = "x"; // delete button context
deleteBtn.style.marginLeft = "10px" // text between space and button

deleteBtn.addEventListener("click", () => {
  todos.splice(index, 1);      // remove the todo from the array
  localStorage.setItem("todos", JSON.stringify(todos)); //update local storage
  displayTodos(); // re-render the list
});  

li.appendChild(deleteBtn);
ulList.appendChild(li);
  });
};

displayTodos();      // Call it, render, display, todos on page load

// 🎯 STEP 3: ADD A TODO
// When the user types something and clicks the button:
// - create a new todo string
// - add it to the todos array
// - save the updated array to localStorage
// - update the page and clear the input

button.addEventListener("click", () => {
  const newTodo = input.value.trim();    // get what the user types and remove extra white space

  if (newTodo === "")    // do nothing if the string is empty
    return;
    todos.push(newTodo);      //Add the new todo to the array

    localStorage.setItem("todos", JSON.stringify(todos));
    // save the updated array to localStorage
    //JSON.stringfy converts the array to a string so localStorage can store it 

    displayTodos(); // call it to display new list update on the page 

    input.value = "";   // clear the input box for the next task
});




// 🔄 STEP 4: RENDER TODOS
// - Clear the list
// - Loop through todos and create a <li> for each
// - Add a ❌ button to delete the todo




