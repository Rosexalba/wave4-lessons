// 🧠 STEP 1: LOAD SAVED VISIT COUNT FROM localStorage
// Use localStorage.getItem("visitCount") to get the saved value.
// If no value exists (null), default to 0 using a ternary operator.


let visitCount = localStorage.getItem("visitCount"); // checks if the browser storage for a key called "visitCount"  
visitCount = visitCount ? parseInt(visitCount) : 0;  // ternary operator condition ? valueIfTrue : valueIfFalse
// **visitCount ? - checks if visitCount has a truthy value (not null, undefined, 0, or "")
// **parseInt(visitCount) - converts the string from localStorage like "5" into a number 5
// ** 0 - if theres no value in localStorage, start the counter at 0






// 🔢 STEP 2: INCREMENT THE COUNT
// Add 1 to the count to track the current visit.

visitCount++;   // increment the count by 1

// 💾 STEP 3: SAVE THE NEW COUNT BACK TO localStorage
// Use localStorage.setItem() to store the updated visit count.
localStorage.setItem("visitCount", visitCount); // save the updated count back to local storage
                                                // saves the new number so it presists



// 🖥️ STEP 4: DISPLAY THE VISIT COUNT
// Use document.getElementById() to select the element that will show the count (id="visitDisplay").
// Update its textContent to tell the user how many times they’ve visited.

document.getElementById("visitDisplay").textContent = `you have visited this page ${visitCount} times.`; // display with text input

// ** "visitCount" is a string literal plain text that is used as a key in objects like localStorage
// here it is telling the browser "store the value under the name visitCount" - you can
// not leave out the quotes because JS would think its a variable 
// label on a jar


// ** visitCount is not a string its a container in memory holding a value
// ** using them together means save it back using the string key 
// whats inside the jar 