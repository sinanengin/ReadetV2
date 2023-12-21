document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.getElementById("register");
  registerForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const birthdate = document.getElementById("birthdate").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const formData = {
      firstname: firstname,
      lastname: lastname,
      birthdate: birthdate,
      email: email,
      password: password,
    };

    console.log(formData);
  });
});
