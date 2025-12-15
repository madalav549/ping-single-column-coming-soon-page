let form = document.querySelector("form");
let emailInput = document.getElementById("email-input");
let errorMsg = document.getElementById("customError");

form.addEventListener("submit", function (e){
  e.preventDefault();
  let emailValue = emailInput.value.trim();

  if (!validateEmail(emailValue)){
    errorMsg.style.display = "block";
    emailInput.classList.toggle("error-state")
  } else{
    form.submit();
  }
});

function validateEmail(email){
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};
