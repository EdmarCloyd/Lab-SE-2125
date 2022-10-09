function validate() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username == "" && password == "") {
        alert(" Username and Password can't be blank");
        return;
    } else if (username.length < 3 && password.length < 3) {
        alert("Username and Password must be at least 3 characters long")
        return;
    } else if (username == "edmarcloyd" && password == "password123") {
        window.location.href = "main.html";
    }
}