// This project causes your saved name to load on the page. so when you refresh the page the name sticks to the page and is on the page

// 🧠 STEP 1: SELECT ELEMENTS FROM THE PAGE
// Use document.getElementById() to select:
// - the text input where the user types their name (id="nameInput")
// - the button the user clicks to save their name (id="saveBtn")
// - the element where we will display the saved name (id="userDisplay")

const nameInput = document.getElementById("nameInput");
const saveBtn = document.getElementById("saveBtn");
const userDisplay = document.getElementById("userDisplay");



// 💾 STEP 2: LOAD SAVED NAME ON PAGE LOAD
// When the page loads, we check if there's a saved name in localStorage using getItem()
// If there is a name, we update the display element's textContent to show that name

const savedName = localStorage.getItem("username"); // getItem() first check get anything on the page which at this point is nothing

    if (savedName) {                                // if something is saved it shows
        userDisplay.textContent = savedName;
    }



// 🎯 STEP 3: ADD A CLICK EVENT TO THE BUTTON
// When the user clicks the button:
// - we get the value they typed in the input
// - we save that value to localStorage with the key "username"
// - we update the display on the page with the name

saveBtn.addEventListener("click", () => {         // once we add a name setItem() then when we reload page later get item() get triggered again and it get the item
    const name = nameInput.value;                 // name input is my value and im storing it in a variable called name
    localStorage.setItem("username", name);       // save value name to local storage and use the key "username" to access input field and update the user with name
    userDisplay.textContent = name;               // show it 
});

// in the getItem localstorage we created a variable for it because we were storing an if statement inside of it 