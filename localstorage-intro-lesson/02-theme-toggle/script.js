// 🧠 STEP 1: SELECT THE BUTTON AND BODY
// Use document.getElementById() to select the button with id="toggleThemeBtn"
// We also select the <body> element so we can add/remove a CSS class for dark mode

const togglebtn = document.getElementById("toggleThemeBtn");
const body = document.body;   // does not need a get element 

// 💾 STEP 2: LOAD SAVED THEME ON PAGE LOAD
// Check localStorage for the key "theme"
// If the value is "dark", we add a class of "dark" to the body to enable dark mode

const savedTheme = localStorage.getItem("theme"); // localStorage is the browsers built in storage ".getItem("theme"); looks for a value saved under the key "theme"
 if (savedTheme === "dark") {                     // checks to see if what we got back from local storage is a string "dark" if yes the code inside it runs
    document.body.classList.add("dark");         
 }
//document.body points directly to your <body> in HTML
// .classList.add("dark") attaches the CSS class dark to <body> 
// once that class is ther any CSS rules targeting .dark will apply

// 🎯 STEP 3: TOGGLE THE THEME WHEN THE BUTTON IS CLICKED
// When the user clicks the button:
// - toggle the "dark" class on the body
// - save the current theme in localStorage as "dark" or "light"

                                               // got the button at the top of page
togglebtn.addEventListener("click", () => {   // add event listnere make button clickable
      document.body.classList.toggle("dark");     // toggle the "dark" class on <body>
      
      if(document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      };
});

// .toggle(): comes from .classList
// .contains: comes from .classList
// .setItem: comes from the localStorage 
// localStorage.setItem("key" , "value"); ** stores key ="theme", value="dark"
