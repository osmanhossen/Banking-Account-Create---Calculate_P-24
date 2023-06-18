// step: 1
document.getElementById("btn_submit").addEventListener("click", function () {
  // step: 2
  const userEmail = document.getElementById("user_email");
  const email = userEmail.value;
  // step: 3
  const userPassword = document.getElementById("user_password");
  const password = userPassword.value;
  // step: 4
  if (email === "Hridoy@gmail.com" && password === "P_Expert") {
    window.location.href = "bank_report.html";
  } else {
    alert("Please Check Your Email And Password");
  }
});
document
  .getElementById("Create_Account")
  .addEventListener("click", function () {
    window.location.href = "create_account.html";
  });
