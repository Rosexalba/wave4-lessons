

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

const setStatus = (message) => {         // updates the StatusEL element  with whatever message you pass
    statusEl.textContent = message;      // for user feedback message
}

const addTaskItem = (text) => {
    const li = document.createElement("li"); // create a new <li> element
    li.textContent = text;         // put the task test inside
    li.classList.add("task-item"); // add a class for styling
    list.appendChild(li);      // add it to the <ul> in the DOM
}

form.addEventListener("submit", (e) => {
    e.preventDefault();    // stop page reload

    const text = input.value.trim(); // get clean input trim white space

    if(!text) { //! validate input
        setStatus("Please Enter Task..");   //feedback message
        return; // stop if input is empty
    }

    addTaskItem(text); // add task to list
    input.value = ""; // clear input box
    setStatus("Task Added! <3 "); // feedback message
})



// STEP 3: Function addTaskItem(text)
//   - Create li.task-item
//   - Add span.task-text, button.btn.complete, button.btn.delete
//   - completeBtn toggles .done
//   - deleteBtn removes li and calls setStatus

// STEP 4: Function setStatus(message)
//   - Update statusEl.textContent

// STEP 5 (Optional): Save/load tasks with localStorage