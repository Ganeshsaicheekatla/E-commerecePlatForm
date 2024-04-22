$(document).ready(function(){

    $(".btn_cancel").click(function(){
     
          $(".Buying_product").fadeOut(500);
          document.querySelector("body").classList.remove("disable-scrolling");
         
    });
   

$(".buy").click(function(){
    
     // console.log($(window).scrollTop());
     // $(".Buying_product").css({"top":"`$(window).scrollTop()`px"});
    // $("html, body").animate({ scrollTop: "0" });
     $(".Buying_product").css({"z-index":"100"});
     $(".Buying_product").css("top",$(document).scrollTop());
    // $("html").draggable({ scroll: false });

    document.querySelector("body").classList.add("disable-scrolling");

      $(".Buying_product").fadeIn(500);

      var item = this.parentElement.parentElement.parentElement.parentElement;
      var item_d=document.getElementsByClassName("Buying_product")[0].firstElementChild;
      console.log(item);
      console.log(item_d);
      

      

      //image from 
      
      var img_src_buying=item.firstElementChild.getElementsByTagName("img")[0].src;
      var buying=document.getElementsByClassName("Buying_product")[0].firstElementChild.firstElementChild.querySelector(".product-img");
      var img_destination=buying.getElementsByTagName("img")[0];
      img_destination.src=img_src_buying;
     

      //title from
      var sou=item.querySelector(".item-content").querySelector(".item-title").textContent;
      var des=item_d.querySelector(".card").firstElementChild;
           des.innerHTML=sou;

     //series
     sou =item.querySelector(".item-content").querySelector(".model").textContent;
     des=item_d.querySelector(".card").querySelector(".card-body").querySelector(".ans").getElementsByClassName("series")[0];
     des.innerHTML=sou;

     //original price
     sou=item.querySelector(".item-content").querySelector(".item").getElementsByTagName("span")[0].getElementsByTagName("strong")[0].textContent;
     des=item_d.querySelector(".card").querySelector(".card-body").querySelector(".ans").getElementsByClassName("org")[0].querySelector("strong");
     des.innerHTML=sou;

     //selling price
    sou=item.querySelector(".item-content").querySelector(".item").getElementsByTagName("span")[0].getElementsByTagName("span")[0].textContent;
    des=item_d.querySelector(".card").querySelector(".card-body").querySelector(".ans").getElementsByClassName("sel")[0].querySelector("span");
    des.innerHTML=sou;
     

    //discount price
    sou=item.querySelector(".item-content").querySelector(".item").getElementsByTagName("span")[0].getElementsByTagName("span")[1].textContent;
    des=item_d.querySelector(".card").querySelector(".card-body").querySelector(".ans").getElementsByClassName("sel")[0].querySelector("button");
    des.innerHTML=sou;
      console.log(sou);
      
    
  })



});



//user info
function over(){
    document.querySelector(".user-details").style.display="block";
}
function leave(){
    document.querySelector(".user-details").style.display="none";
}
