document
  .getElementById("forgot-password")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const lastname = document.getElementById("lname").value;
    const firstname = document.getElementById("fname").value;
    const birthdate = document.getElementById("birthdate").value;
    const newPassword = document.getElementById("newPassword").value;
    const formData = {
      firstname: firstname,
      lastname: lastname,
      birthdate: birthdate,
      email: email,
      newPassword: newPassword,
    };
    resetPassword(formData);
    console.log(formData);
  });

async function resetPassword(data) {
  const userData = data;

  try {
    const response = await fetch("http://localhost:5000/forgotpassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Password reset successful. Message: " + data.message);
    } else {
      alert("Error: " + data.message);
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
}
