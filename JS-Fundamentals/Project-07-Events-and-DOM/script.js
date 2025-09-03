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
    const message = document.getElementById("message");

    message.innerText = "Primary button clicked!";
    message.classList.add("highlight");

    console.log("Primary button message");

}




const showSecondaryMessage = () => {
    const message2 = document.getElementById("message2");

    message2.innerText = "Secondary button clicked!"
    message2.classList.toggle("highlight");

    console.log("Secondary button message");

}




const dangerAlert = () => {
    alert("Danger button pressed!");
    console.log("Button Alert message");
}


const countListItems = () => {
    const listItems = document.getElementsByTagName("li");
}

 console.log(listItems.length);




primaryButton.addEventListener("click", showPrimaryMessage);
// secondaryButton.addEventListener("click", showSecondaryMessage);
dangerButton.addEventListener("click", dangerAlert);











