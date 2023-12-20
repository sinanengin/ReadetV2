document.getElementById('login').addEventListener('submit', function(event){
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const formData = {
        email: email,
        password: password
    };

    console.log(formData);
}) 