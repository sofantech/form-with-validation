let validateform=document.getElementById("validate-form");
let userName=validateform.getElementById("userName");
let userEmail=validateform.getElementById("userEmail");
let password=validateform.getElementById("password");
var passwpatern=  /^[A-Za-z]\w{7,14}$/;
let confPassword=validateform.getElementById("conf-password");
let age=validateform.getElementById("age");
let phoneNum=validateform.getElementById("phoneNum");
var phoneno = /^\d{10}$/;
let url=validateform.getElementById("url");
let message=validateform.getElementById("message");
let btn=validateform.getElementById("send-btn");
let error_ms=validateform.getElementById("error-ms");

validateform.onsubmit=function (e) {
    let validat_name=false;
    let validat_email=false;
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let validat_password=false;
    let validat_age=false;
    let validat_phonenum=false;
    let validat_url=false;
    let urlpattern=/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
    if (validat_name.value !=="" & validat_name.value >3 & validat_name.value <10) {
        validat_name=true;
        console.log("valdiate name is ok");
        
    }
    else
    {
        validat_name=false;
        console.log("error validate name");
    }
    if (!userEmail.value.match(pattern)) {
        validat_email=false;
        console.log("email text error");
        
    }
    else
    {
        console.log("email is valied");
    }

    if (password.value.toupercase() ==password.value && password.value >=6 && password.value ===confPassword.value & password.value.match(passwpatern)) {
        validat_password=true;
        console.log("validate password");
        
    }
    else
    {
        console.log("passward is error");
    }
    if (age.value >=18) {
        validat_age=true;
        console.log("validate ok");
        
    }
    else
    {
        console.log("age must be over 18 years");
    }
    if (phoneNum.value.length ==9 & phoneNum.value) {
        
    }
    else
    {

    }
    if (url.value !=="" & message.value.match(urlpattern)) {
        console.log("url valide");
        
    }
    else
    {
        console.log("url is not valied");
    }
    if (message.value !== "" & message.value.length > 20) {
        console.log("message valied");
        
    }
    else
    {
        console.log("message is not valed")
    }


    
}
