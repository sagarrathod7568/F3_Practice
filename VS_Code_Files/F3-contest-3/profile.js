
///checking if local storage exist or not
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
if (localStorage.getItem("myArr")) {
    var Arrays = JSON.parse(localStorage.getItem("myArr"));
    console.log("yes");
    console.log(Arrays);
    document.querySelector(".credential").innerHTML = `
    <p class="pro">Profile </p>
          <p class="fName">Full Name: ${Arrays[0]?.name}</p>
          <p class="Emails">Email: ${Arrays[0]?.email}</p>
          <p class="passwords">Password: ${Arrays[0]?.pass}</p>
    `;
  }
  else
  {
    document.querySelector(".credential").innerHTML = `
    <p class="pro">No Data Found Please <b>Signup...</b></p>
    <a href="./index.html">Click here to <b>Signup...</b></a>
    `
    logOut.style.display = "none";
  }
  
  //

  
  ///////////
  logOut.addEventListener("click", () => {
    localStorage.removeItem("myArr");
    window.location.href=('./index.html')
  });