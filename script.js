
let userInput = document.getElementById("email");
let errorDisp = document.querySelector(".mailbox");
let errorMsg = document.querySelector(".error-message");
let submitButton = document.querySelector(".submit");

let regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+)[.]([a-z]{2,4})$/;

submitButton.addEventListener("click", () => {
  if(regx.test(userInput.value)){
    userInput.style.border = "2px solid green";
    errorDisp.classList.remove("active");
    errorMsg.style.display = "none";
  } else {
    errorDisp.classList.add("active");
    errorMsg.style.display = "unset";
  }
})