

const submit = document.getElementById("submit");
const signup_form = document.getElementById("signup-form");
const userName = document.getElementById("userName");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
const cnfPass = document.getElementById("cnfPass");
const error = document.querySelector(".error");
const success = document.querySelector(".success");
const profile_container = document.querySelector(".profile-container");
const singup_container = document.querySelector(".singup-container");
const btns = document.querySelector(".btns");
const btnp = document.querySelector(".btnp");
const logOut = document.querySelector(".logout");
btns.addEventListener("click", () => {
    window.location.href=('./index.html')
   });
   btnp.addEventListener("click", () => {
     console.log("Clicked profile");
     window.location.href=('./Profile.html')
   });

let arr = [];
submit.addEventListener("click", (e) => {
  e.preventDefault();
  //if any field is empty
  if (
    userName.value.trim() == "" ||
    email.value.trim() == "" ||
    pass.value.trim() == "" ||
    cnfPass.value.trim() == ""
  ) {
    error.style.display = "block";
    return;
  }
  if (pass.value.trim() !== cnfPass.value.trim()) {
    error.innerHTML += "  -pass unmatch";
    error.style.display = "block";
    return;
  }

  let obj = {
    name: userName.value.trim(),
    email: email.value.trim(),
    pass: pass.value.trim(),
    cnfPass: cnfPass.value.trim(),
  };
  arr.push(obj);
  //   console.log(JSON.stringify(arr));
  localStorage.setItem("myArr", JSON.stringify(arr));
  success.style.display = "block";
  error.style.display = "none";
  restForm();
 window.location.href=("./Profile.html")
});

//clearing the form;
function restForm() {
  signup_form.reset();
}
