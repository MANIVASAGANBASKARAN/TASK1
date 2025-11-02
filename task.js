document.getElementById("loginform").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let message = document.getElementById("message");

    if (username === "admin" && password === "1234") {
        message.style.color = "green";
        message.textContent = "Login successful! Redirecting...";
       
    } else {
        message.style.color = "red";
        message.textContent = "Invalid username or password!";
         setTimeout(() => {
            window.location.href = "https://www.w3schools.com";
        }, 2000);
    }
});


