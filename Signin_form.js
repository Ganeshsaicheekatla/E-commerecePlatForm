
//toggle the signin and signup pages
function singin()
{
   
   
   document.querySelector(".login-form").classList.add("d-none");
   document.querySelector(".signup").classList.remove("d-none");
   
   
}


function singup(){

   
    document.querySelector(".signup").classList.add("d-none");
    document.querySelector(".login-form").classList.remove("d-none");
}

//home page to remove sign in form
function close_sign_page(){
    document.querySelector('.sign').classList.add('d-none');
    document.querySelector("body").classList.remove("disable-scrolling");
}


//home page to display sign in form
function sign_page(){
    document.querySelector('.sign').classList.remove('d-none');
    document.querySelector("body").classList.add("disable-scrolling");   
}
