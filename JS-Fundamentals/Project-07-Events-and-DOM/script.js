const primaryButton = document.querySelector("button");
const secondaryButton = document.getElementById("btnById");
const dangerButton = document.getElementsByClassName("btnByClass")[0];

const message = document.getElementById("message");
const message2 = document.getElementById("message2");
const listItems = document.getElementsByTagName("li");
const allButtonsNL = document.querySelectorAll("button");



console.log({primaryButton, 
    secondaryButton, 
    dangerButton, 
    message,
    message2,
    listItems,
    allButtonsNL});



const showPrimaryMessage = () => {
    message.innerText = "Primary button clicked!";
    message.classList.add("highlight");

    console.log("Primary button message");

}




const showSecondaryMessage = () => {

    message2.innerText = "Secondary button clicked!"
    message2.classList.toggle("highlight");

    console.log("Secondary button message");

}




const dangerAlert = () => {
    alert("Danger button pressed!");
    console.log("Button Alert message");
}


const countListItems = () => {
    console.log(`you have ${listItems.length} list itmes` );
}
countListItems(); // call function


primaryButton.addEventListener("click", showPrimaryMessage);
// secondaryButton.addEventListener("click", showSecondaryMessage);
dangerButton.addEventListener("click", dangerAlert);

// Bonus:
// ➤ Use a forEach loop on allButtonsNL to:
//    - log each button’s text when clicked
//    - run countListItems() every time ANY button is clicked
// */


allButtonsNL.forEach =(btn) => {
    btn.addEventListener("click", () => {
    console.log(`${btn.textContent}- log using queryselector`);
});

btn.addEventListener("click", countListItems);

};

// EXTRA BUTTONS //
const btn3 = document.getElementsByClassName("btn3")[0];
const btn4 = document.getElementsByClassName("btn4")[0];
const message3 =document.getElementById("message3");
const message4 =document.getElementById("message4");


console.log ({
    btn3,btn4,message3,message4
});

const pinkButton = () => {

    message3.innerText = "My favorite color is pink";
    message3.classList.add("pink");


    console.log("Favorite color");
}

const greenButton = () => {

    message4.innerText = "Just kidding! Green is actually my favorite color.";
    message4.classList.add("green");

    console.log("Actual favorite color")
}


btn3.addEventListener("click", pinkButton);
btn4.addEventListener("click", greenButton);


// text inside button//

// const btn3 = document.getElementsByClassName("btn3")[0];
// const btn4 = document.getElementsByClassName("btn4")[0];
// const message3 =document.getElementById("message3");
// const message4 =document.getElementById("message4");


// console.log ({
//     btn3,btn4,message3,message4
// });

// const pinkButton = () => {

//     btn3.innerText = "My favorite color is pink";
//     btn3.classList.add("pink");


//     console.log("Favorite color");
// }

// const greenButton = () => {

//     btn4.innerText = "Just kidding! Green is actually my favorite color.";
//     btn4.classList.add("green");

//     console.log("Actual favorite color")
// }



// btn3.addEventListener("click", pinkButton);
// btn4.addEventListener("click", greenButton);














