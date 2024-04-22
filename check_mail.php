<?php

include "connect.php";


//for password decrytion
function password_decrypt(string $pass){
  $pass_dec="";
for($i=0;$i<strlen($pass);$i++){
  switch($i%4)
  {
    case 0:$pass_dec.=chr(ord($pass[$i])-1);
         break;
    case 1:$pass_dec.=chr(ord($pass[$i])+4);
         break;
    case 2:$pass_dec.=str_rot13(chr(ord($pass[$i])));;
         break;
    default:$pass_dec.=chr(ord($pass[$i])-23);
          
  }

}
return $pass_dec;
}


//checking wheter user already exists are not
function check_email(string $email,$conn)
{


     $stmt="select * from `Users`";
    
     $result=mysqli_query($conn,$stmt);

     if(mysqli_num_rows($result)>0){

       while($row=mysqli_fetch_assoc($result))
         if($row['cust_email']==$email)
           return false;
     }
     
     return true;

     
     
}


//checking login creditial
if(isset($_POST['signin']))
{
  $email= $_POST['email'];
  $pass =$_POST['pass'];

  $stmt="SELECT cust_pass from Users where cust_email='".$email."'";

  $result=mysqli_query($conn,$stmt);

  //$row=mysqli_fetch_array($result);

  if(!$result)
  {
    header('location:Unsucessfull_registration.html');
  }
  else{

   while($row=$result->fetch_assoc())
   {
      if(password_decrypt($row['cust_pass'])==$pass)
          header('location:Mainpage.html');
     
   }

   header('location:Unsucessfull_registration.html');

  }

}





?>
