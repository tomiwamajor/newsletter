const buttonEl = document.querySelector(".btn");
const signUp = document.querySelector(".sign-up");
const successful = document.querySelector(".successful");
const successfulBtn = document.querySelector(".button");

buttonEl.addEventListener("click", function () {
  const email = document.querySelector(".email").value;

  if (email) {
    console.log(email);
    signUp.style.display = "none";
    successful.style.display = "flex";
    document.querySelector(".user").textContent = email;
  } else {
    console.log("error");
    document.querySelector(".span").style.display = "block";
    document.querySelector(".email").placeholder = "ash#loremcompany.com";
    document.querySelector(".email").style.placeholder = "hsl(4,100%,67%)";
    document.querySelector(".email").style.border =
      "0.2rem solid hsl(4,100%,67%)";
    document.querySelector(".email").style.backgroundColor = "hsl(4,100%,90%)";
  }
});

successfulBtn.addEventListener("click", function () {
  signUp.style.display = "grid";
  successful.style.display = "none";
});
