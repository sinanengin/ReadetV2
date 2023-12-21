document.getElementById('forgot-password').addEventListener('submit', function(event){
    event.preventDefault();
    const email = document.getElementById('email').value;
    const formData = {
        email: email
    };

    console.log(formData);
}) 