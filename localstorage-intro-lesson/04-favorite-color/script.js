// 🧠 STEP 1: SELECT ELEMENTS FROM THE PAGE
// Use document.getElementById() to select the elements you need:
// - An input where the user types their favorite color (id="colorInput")
// - A button the user clicks to save the color (id="saveColorBtn")
// - A display area where the color will be shown (id="colorDisplay")
const colorInput = document.getElementById("colorInput");
const saveColorBtn = document.getElementById("saveColorBtn");
const colorDisplay = document.getElementById("colorDisplay");

// 💾 STEP 2: LOAD SAVED COLOR FROM localStorage
// Use localStorage.getItem("favoriteColor") to check if a color was saved before.
// If a saved color exists:
// - Set the display text to that color
// - Optionally change the text color to match for visual feedback

const savedColor = localStorage.getItem("favoriteColor");   // checks for previously saved colors
  if (savedColor) {                                        // only runs the next code if there is a saved color
    colorDisplay.textContent = savedColor;                 //  update display text
    colorDisplay.style.color = savedColor;                //change the test color (using CSS styling inside JS)
  }



// 🎯 STEP 3: SAVE COLOR WHEN BUTTON IS CLICKED
// Add a click event listener to the "Save Color" button.
// Inside the event listener:
// - Get the current value from the input field
// - Save it using localStorage.setItem("favoriteColor", value)
// - Update the display area with the color and style.

saveColorBtn.addEventListener("click", () => {      // add event listener with clickable button to run code when clicked
  const favColor = colorInput.value;                // grab what the user typed
  localStorage.setItem("favoriteColor", favColor);  // save it to localStorage
  colorDisplay.textContent = favColor;              // update display text 
  colorDisplay.style.color = favColor;              // change the text color (using CSS styling inside JS)
})


// ** How is the color able to change when input?? **
// .style.color corresponds to the CSS color property
// whatever string you assgin here becomes the color of that element
