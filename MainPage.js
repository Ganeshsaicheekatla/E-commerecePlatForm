//coursel
document.querySelector(".cour_1").style.cssText="transform:rotate(40deg)";

function over(){
    document.querySelector(".user-details").style.display="block";
}
function leave(){
    document.querySelector(".user-details").style.display="none";
}

function sign()
{
    document.querySelector("body").classList.add("disable-scrolling");
    document.querySelector(".forms").classList.remove("d-none");
}