$(document).ready(function () {
  var xhttp = new XMLHttpRequest();

  $("#signup").click(function (e) {
    e.preventDefault();
    var email = $("#emailInput1").val();
    var password = $("#passwordInput1").val();

    if (email == "" && password == "") return;

    xhttp.onreadystatechange = function () {
      if (this.status === 200) {
        window.alert("User Created Successfully");
      }
    };

    var data = { email: email, password: password };
    xhttp.open("POST", "http://127.0.0.1:5501/signup");
    xhttp.setRequestHeader("Content-type", "application/json; charset=utf-8");
    xhttp.send(JSON.stringify(data));
  });

  $("#signin").click(function (e) {
    var email = $("#emailInput2").val();
    var password = $("#passwordInput2").val();

    if (email == "" && password == "") return;

    xhttp.onreadystatechange = function () {
      if (this.status === 200) {
        window.alert("Signed In Successfuly");
      }
    };

    var data = { email: email, password: password };
    xhttp.open("POST", "http://127.0.0.1:5501/signin");
    xhttp.setRequestHeader("Content-type", "application/json; charset=utf-8");
    xhttp.send(JSON.stringify(data));
  });
});
