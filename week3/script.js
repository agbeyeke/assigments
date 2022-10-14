
function submit() {
  var email = document.getElementById("email").value
  var psw = document.getElementById("password").value

  if ((email == "username@web.com") && (psw == "password")) {
    window.location.href ="success-page.html"
  } else {
    alert("email or password incorrect")
  }
}
