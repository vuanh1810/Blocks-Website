var login = document.querySelector("#login");
var login_txt = document.getElementsByClassName("login_txt");

login_txt[0].style.display = "none";
login_txt[1].style.display = "none";
login_txt[2].style.display = "none";
login_txt[3].style.display = "none";
login_txt[4].style.display = "none";

login.addEventListener("click", function(e){
	if(login_txt[0].style.display == "none"){
		login_txt[0].style.display = "inline";
	} else{
		login_txt[0].style.display = "none";
	}
	if(login_txt[1].style.display == "none"){
		login_txt[1].style.display = "inline";
	} else{
		login_txt[1].style.display = "none";
	}
	if(login_txt[2].style.display == "none"){
		login_txt[2].style.display = "inline";
	} else{
		login_txt[2].style.display = "none";
	}
	if(login_txt[3].style.display == "none"){
		login_txt[3].style.display = "inline";
	} else{
		login_txt[3].style.display = "none";
	}
	if(login_txt[4].style.display == "none"){
		login_txt[4].style.display = "inline";
	} else{
		login_txt[4].style.display = "none";
	}
})

btnLogin.addEventListener("click", function(e)
{
  var btnLogin = document.querySelector("#btnLogin");
	var userName = document.querySelector("#userName").value;
	var password = document.querySelector("#password").value;

	if(userName !== "admin" && password !== 12345){
		alert("Incorrect username or password!");
		document.querySelector("#userName").value = "";
		document.querySelector("#password").value = "";
	} else{
    alert("Welcome!");
		location.assign("./main.html");
	}
})
