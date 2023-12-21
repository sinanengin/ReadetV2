document.getElementById("login").addEventListener("submit", function (event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const formData = {
    email: email,
    password: password,
  };
  loginUser(formData);
  console.log(formData);
});

async function loginUser(data) {
  const userData = data;

  try {
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    // Giriş başarılıysa
    if (response.ok) {
      // Kullanıcı bilgilerini localStorage'a kaydet
      localStorage.setItem("user", JSON.stringify(data.user));

      // Ana sayfaya yönlendir
      window.location.href = "/index.html";
    } else {
      // Giriş başarısızsa hata mesajını göster
      alert("Error: " + data.message);
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
}
