// 🧠 STEP 1: SELECT ELEMENTS
// - Select the checkbox element using document.getElementById("subscribeCheckbox")
// - Select the status paragraph element with id="statusText"
// - Select the reset button with id="resetBtn"
// Write your code here

const checkbox = document.getElementById("subscribeCheckbox");
const statusText = document.getElementById("statusText");
const button = document.getElementById("resetBtn");



// 💾 STEP 2: LOAD SAVED STATE FROM localStorage
// - Use localStorage.getItem("isSubscribed") to check if there’s a saved value
// - Compare it to the string "true" to decide if it should be checked
// - Set checkbox.checked based on the result
// - Update the statusText to show "Subscribed ✅" or "Not subscribed ❌"
// Write your code here

const isSubscribed = localStorage.getItem("isSubscribed"); // load saved state from localStorage
checkbox.checked = isSubscribed === "true"; // compare to string "true" to set the check box state
statusText.textContent = checkbox.checked ? "subscribed ✅ " : "Not subscribed ❌ "; // update the status text based on the saved value

// ** localStorage.getItem("isSubscribed") reads the saved value ("true" or "false") from the browser.
// ** checkbox.checked = isSubscribed === "true"; converts the string into a boolean to set the checkbox
// ** the ternary updates the <p> to visuall show the subscription state 
    // ternary operator : condition ? valueIfTrue : valueIfFalse
    // condition is a test that evaluates true or false 
    



// 🎯 STEP 3: UPDATE STATE WHEN CHECKBOX CHANGES
// - Add a "change" event listener to the checkbox
// Inside the listener:
//   - Save the new state using localStorage.setItem("isSubscribed", checkbox.checked)
//   - Update the status paragraph text accordingly
//   - Update aria-pressed for accessibility ("true" or "false")
// Write your code here


checkbox.addEventListener("change", () => { 
    localStorage.setItem("isSubscribed" , checkbox.checked); // save the new state in localStorage

    statusText.textContent = checkbox.checked ? "subscribed ✅ " : "Not Subscribed ❌ " // update the status text
    // checkbox.setAttribute("aria-pressed", checkbox.checked ? "true" : "false");

});




// 🔄 STEP 4: RESET FUNCTIONALITY
// - Add a "click" event listener to the reset button
// Inside the listener:
//   - Use localStorage.removeItem("isSubscribed") to clear saved state
//   - Uncheck the checkbox
//   - Reset the statusText to "Not subscribed ❌"
//   - Reset aria-pressed to "false"
// Write your code here

button.addEventListener("click", () => {
    localStorage.removeItem("isSubscribed");  // clear the saved state
    checkbox.checked = false;  // uncheck the box
    statusText.textContent = "Not Subscribed ❌"; // reset the status text
    // checkbox.setAttribute("aria-pressed", "false");



});

//  statusText.textContent = checkbox.checked ? "subscribed ✅ " : "Not Subscribed ❌ "  
//  in step 2: Shows the correct status when the page first loads.
// used again in step 3: Updates the status dynamically whenever the user interacts with the checkbox.
// ** Even though it’s the same line, it’s needed in both places because one handles initial state and the other handles user interaction.✅ 


// aria-pressed: used for toggle buttons is technically not needed with checkboxes
// <button> dont have a built in "pressed" state so we use aria-pressed="true" or "false"

// checkboxes alreaady have a built in state 
// <input type = "checkbox"> already has a checked property 
// screen reader automatically announce whether its checked or unchecked 
// adding aria-pressed to a checkboc is redundant and invalid - the browser already exposes
// this information via the native checkboc behavior

// aria-live is useful because its used on an element like <p> that announces dynamic changes to screen readers
// aria-live tells screen read "subscribed" or "not subscribed" out 