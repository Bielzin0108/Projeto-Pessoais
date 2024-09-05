let loginForm = document.querySelector(".my-form");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let email = document.getElementsById("email");
    let password = document.getElementsById("password");

    console.log("Email:", email.value);
    console.log("Password:", password.value);
})