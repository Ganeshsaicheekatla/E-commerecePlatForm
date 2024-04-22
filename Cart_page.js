

function notify(item_id , cost)
{
    var parentElement = document.getElementById(item_id).parentElement.parentElement.parentElement.parentElement;
     var json_obj={};
     json_obj.key=item_id;
     json_obj.value=parentElement.innerHTML;
   //console.log(json_obj.value);
   if(localStorage.getItem(item_id)==null)
   {

    //storing present item into local storage in the form of json formate
    localStorage.setItem(item_id,JSON.stringify(json_obj));
 //   console.log(JSON.stringify(parentElement));
//    console.log(JSON.parse(localStorage.getItem(item_id)).key);

      //to calculate total price
      if(localStorage.length!=0)
      {
        var price=localStorage.getItem('cost');
        localStorage.setItem('cost',Number(price)+Number(cost));
        
      }
      else
      { //when item are empty
         localStorage.setItem('cost',0);
      }
      
  
   
   }
   else
   {
    console.log("already in local storage");
   }
}


function load_page_items(){

    var parent=document.querySelector('.row');
    if(localStorage.length!=0 && localStorage.length!=1)
    {
      
    
    parent.innerHTML="";
    for(var i=0;i<localStorage.length;i++)
    {
          var key=localStorage.key(i);
          
          if(key.length < 10 && key!=='cost')
          {
                    
            //getting item from local storage
            var item=localStorage.getItem(key);


        //creating parent tag to the present adding item and adding class
          var div=document.createElement("div");
          div.classList.add("col","px-5", "my-2");

          
          //getting the item form the local storage in the form of json object
          div.innerHTML+=JSON.parse(item).value;

          //append the new item to page
          parent.append(div);
        
         
         }
    }
  }
  else{
    //when cart items empty then this will be shown
     parent.innerHTML=`<div class='col d-flex flex-column align-items-center justify-content-center show-now'> 
     <div class='your_cart'>your cart is empty</div><div class='clickme'><a href='Electronics.html'>
     <button class='btn btn-primary'><i class='fa fas fa-shopping-cart px-5'></i>Shop now</button></a></div></div>`;
  }


  //counting the noof items in cart
  
   document.querySelector('.noof_items ').querySelector('.number').innerHTML=localStorage.length-1;
  
  //calculating the cost 86
  cal_totalprice();

   
}

function cal_totalprice()
{
   //calculating the total cost of cart items
   document.querySelector('.price').innerHTML=localStorage.getItem('cost');
} 

function remove_cost(cost)
{
   //updating the cost after item removed
   let pre_cost=localStorage.getItem('cost');
   localStorage.setItem('cost',Number(pre_cost)-Number(cost));
   document.querySelector('.price').innerHTML=localStorage.getItem('cost');
}


function remove_me(key,cost)
{
  //  var parent=document.querySelector(pre).parentElement.parentElement;
    console.log(localStorage.getItem(key));
    localStorage.removeItem(key);

    //updating the cost 92
    remove_cost(cost);
    
    

    //loding cart items 40
    load_page_items();

   console.log(key);
}
