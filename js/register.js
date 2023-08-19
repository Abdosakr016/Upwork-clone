// getting data from local storage
let usersString = localStorage.getItem("users");

// declaring varaibles
let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let registerBtn = document.querySelector("#sign_up");

// submission:-
function submitForm(e) {
  e.preventDefault();
  let user = {
    username: username.value,
    email: email.value,
    password: password.value,
  };
  let users = JSON.parse(localStorage.getItem("users")) || [];
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users, null, "\n"));

  setTimeout(() => {
    window.location = "login.html";
  }, 1500);
}
