console.log(localStorage.getItem("user"));


document.getElementById("username-slider").innerHTML = JSON.parse(
    localStorage.getItem("user")
  ).firstname;
  