

//form submit


let email = document.querySelector('.email');
let psd = document.querySelector('.password');
let check = document.querySelector('#rem');
let msg = document.querySelectorAll('.msg');


const refresh = () =>{
  
  if(email.value == ""){
    msg[0].innerText = "Please enter a valid email address or phone number.";
  }if(psd.value == ""){
    msg[1].innerText = "Your password must contain between 4 and 60 characters.";
  }else{
        msg[0].innerText = "";
        msg[1].innerText = "";
        alert('Sign-in succesfully');
  }
  
  email.value = "";
  psd.value = "";
  check.checked = "";
 
}
