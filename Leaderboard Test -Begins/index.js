const express=require('express');
const app=express();
app.get("/",function(req,res){
    res.send("Hello World!");
});
app.listen(5000,function(){
    console.log(`App is up and running on port 5000! http://loaclhost:${5000}`);
});////this part not working



// form validation part
function validate(name,email,password) {  
	var result = "";	
	result += validateName(); 	
	result += validateEmail();
	result += validatePassword();
	
	if (result == "") return true;
	return false;	
}

function validateName(name) {
	if (name.length <= 3)
		return "Name should be at least three characters.\n";	
	return "";
}

function validatePassword(password) {
	var password = valueOf("password");
	var retype = valueOf("retype_password");
	
	if (password.length <= 6) 
		return "Password should be at least 6 characters.\n";
	
	if (password != retype) 
		return "Passwords do not match.\n";	
	return "";
}

function validateEmail(email) {
	var email = valueOf("email");
	var retype = valueOf("retype_email");
	
	if (email.indexOf('@') == -1) 
		return "Email should be a valid address.\n";
	
	if (email != retype)
		return "Email addresses do not match.\n";
	return "";	
}
