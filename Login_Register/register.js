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
    registerUser(formData);
    console.log(formData);
  });
});

async function registerUser(data) {
  const userData = data;
  try {
    const response = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();
    console.log(data); // Gelen mesajı consola yazdır

    // İşlem başarılıysa kullanıcıyı bilgilendir
    if (response.ok) {
      alert("User registered successfully!");
    } else {
      alert("Error: " + data.message);
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
}
