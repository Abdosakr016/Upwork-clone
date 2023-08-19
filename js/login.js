let username = document.querySelector("#username");
let password = document.querySelector("#password");
let loginBtn = document.querySelector("#sign_in");

loginBtn.addEventListener("click", function (e) {
  e.preventDefault();

  let users = JSON.parse(localStorage.getItem("users")) || [];
  let user = users.find(
    (u) =>
      (u.username === username.value || u.email === username.value) &&
      u.password === password.value
  );

  if (user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
    setTimeout(() => {
      window.location = "index.html";
    }, 1500);
  } else {
    console.log("no");
  }
});
