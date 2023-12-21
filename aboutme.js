console.log(localStorage.getItem("user"));

document.getElementById("fname").innerHTML = JSON.parse(
  localStorage.getItem("user")
).firstname;

document.getElementById("lname").innerHTML = JSON.parse(
  localStorage.getItem("user")
).lastname;

document.getElementById("bdate").innerHTML = JSON.parse(
  localStorage.getItem("user")
).birthdate;

document.getElementById("email").innerHTML = JSON.parse(
  localStorage.getItem("user")
).email;
