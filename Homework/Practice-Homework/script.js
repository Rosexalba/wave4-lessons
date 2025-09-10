

// ======================================================================
// PROJECT: TaskTracker Lite — DOM + Events
// PURPOSE: Connect JavaScript to HTML (DOM) and respond to events.
//
// ✅ REQUIRED NAMES:
//    IDs:        #taskForm, #taskInput, #addBtn, #status, #taskList, #themeBtn
//    Classes:    .header, .container, .task-item, .task-text, .btn,
//                .complete, .delete, .done
//    Variables:  form, input, statusEl, list, themeBtn
//    Functions:  addTaskItem(text), setStatus(message)
// ======================================================================

// STEP 1: Select elements by id and store in variables
     const form = document.getElementById("taskForm");
     const input = document.getElementById("taskInput");
     const statusEl = document.getElementById("status");
     const list = document.getElementById("taskList");
     const themeBtn = document.getElementById("themeBtn");

// STEP 2: Add event listeners
//   - form.submit: preventDefault, validate input, call addTaskItem or setStatus
//   - themeBtn.click: toggle body.dark and aria-pressed

form.addEventListener("submit", (e) => {
    e.preventDefault();                                  // stop page reload so your tasks stay on the page

    const text = input.value.trim();                   // get clean input trim white space

          if(!text) {                                  //! validate input
          setStatus("Please Enter Task..");            //feedback message
            return;                                   // stop if input is empty
    }                                              // if nothing is typed show status message and stop function with return

    addTaskItem(text);                                  // add task to list
    input.value = "";                                   // clear input box
    setStatus("Task Added! <3 ");                       // feedback message
    saveTasks();                                       // FOR local storage: save right after adding a task
});


themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");                   //adds or removes "toggles" dark mode from HTML <body> 

    const pressed = themeBtn.getAttribute("aria-pressed")        // read the current value sting "true" or "false" 
                                            === "true";          // converts it to a boolean true or false so we can work with it in js
    themeBtn.setAttribute("aria-pressed", !pressed);            // set the new value. updates the buttons attribute to reflect the new state screen readers now know the button was toggled // ! meand no JS // if pressed is true !pressed becomes false // if pressed is false, !pressed becomes true
});                                                             // DEFENITON aria-pressed :attribute for the visiually impared 


// STEP 3: Function addTaskItem(text)
//   - Create li.task-item
//   - Add span.task-text, button.btn.complete, button.btn.delete
//   - completeBtn toggles .done
//   - deleteBtn removes li and calls setStatus

const addTaskItem = (text) => {                    // Function
    const li = document.createElement("li");       // create a new <li> element 
    li.classList.add("task-item");                // add a class for styling
    list.appendChild(li);                        // add li to ul

    const span = document.createElement("span");    // create a new <span> element to hold the task text
    span.classList.add("task-text");                // add a class for styling
    span.textContent = text;                        // puts the actual task string inside


    const completeBtn = document.createElement("button"); // create a new <button> for completing a task
    completeBtn.classList.add("btn","complete");          // add a class for styling the complete button
    completeBtn.textContent = " ✓ ";                       // text inside for message letting you know task is completed

    const deleteBtn = document.createElement("button"); //create a new <button> for deleting a task
    deleteBtn.classList.add("btn", "delete");           // add a class for styling the delete button
    deleteBtn.textContent = " x ";                        // text inside for message letting you know task has been deleted

    li.append(span, completeBtn, deleteBtn);            // append add your span and buttons into the <li>                              
    
    completeBtn.addEventListener("click", () => {       // event listner "click" for clickable button 
        li.classList.toggle("done");                    // toggles line through line
        const status = li.classList.contains("done")    // checks if li currently has done class
          ? `Completed: "${text}"`                      // ternary operator- shorthand for if/else
          : `Marked as not done: "${text}"`;            // if task is completed if task is undone
        setStatus(status);                              // calls a seperate function to update message // feedback
        saveTasks();                                   // For local storage: save after marking complete
    });

    deleteBtn.addEventListener("click", () => {
        li.remove();                                  // remove Li task from DOM
        setStatus(`Deleted: "${text}"`);              // updates status message
        saveTasks();                                  // For local storage: save after deleting item
    });


}



// STEP 4: Function setStatus(message)
//   - Update statusEl.textContent

const setStatus = (message) => {                   // helper to show message on the page
    statusEl.textContent = message;                // updates feedback element // can be called anywhere like a delete or complete button
}

// STEP 5 (Optional): Save/load tasks with localStorage

// Save tasks
const saveTasks = () => {           // function to save all tasks
    const tasks = [];               // starts wuth and empty string to collect data

    document.querySelectorAll("#taskList .task-item")   // grabs all tasks <li> elements
                                      .forEach(li => {    // loops over each task
        const text = li.querySelector(".task-text").textContent;  // gets the text of the task
        const done = li.classList.contains("done");               // checks if this task is marked as done
        tasks.push({text,done});                                  // adds an object representing this task to the array
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));          // "tasks" saves something to the browser storage under the key "tasks"
};                                                                 // JSON.stringify(tasks) converts the array of objects into a sting because local storage only stores strings

//Loading tasks 
const loadTasks = () => {                                          // function to load tasks
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];  // converts the string back into an array of objects || reads the saved string from local storage || if theres nothing in the localstorage yet use an empty array
    tasks.forEach(task => {                                         // loops over all saved task
        addTaskItem(task.text);                                      // recreates the task <li> in th DOM
        const lastLi = document.querySelector("#taskList li:last-child");    // grabs the task we just added
        if(task.done) lastLi.classList.add("done");                         //restores the completes state visually 
    });

};

window.addEventListener("DOMContentLoaded", loadTasks);      // in this case we will not use console.log to show result
                                                             // to actually load tasks when the page loads call this funtion

