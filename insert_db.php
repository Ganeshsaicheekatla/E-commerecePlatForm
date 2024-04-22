<?php

//for connection object purpose including connect.php file
include "connect.php";
include "check_mail.php";




function password_encrypt(string $pass){
       $pass_enc="";
   for($i=0;$i<strlen($pass);$i++){
       switch($i%4)
       {
         case 0:$pass_enc.=chr(ord($pass[$i])+1);
              break;
         case 1:$pass_enc.=chr(ord($pass[$i])-4);
              break;
         case 2:$pass_enc.=str_rot13(chr(ord($pass[$i])));;
              break;
         default:$pass_enc.=chr(ord($pass[$i])+23);
               
       }
     
   }
   return $pass_enc;
}







if(isset($_POST['submit']))
{
    $usern=strval($_POST['username']);
    $email=$_POST['email'];
    $pass=$_POST['password'];
    $phno=$_POST['number'];
  //  $pos_mail=strpos($email,'@');
    
   


 //password encrytion before storing 
  $enc=password_encrypt($pass);
 
  
 

  //getting last record sno 
    $stmt="SELECT * FROM `Users`";
    $result=mysqli_query($conn,$stmt);
    $noof_row=mysqli_num_rows($result);

  $user_id=$enc.$noof_row;



  
  //checking wheter user is already exists or not

  if(check_email($email,$conn))
  {
    //preparing stmt to insert user data into database
    $stmt="INSERT INTO `Users` Values('".$user_id."','".$usern."','".$email."',$phno,'".$enc."')";
   
     //executing the prepared statement
     if(mysqli_query($conn,$stmt))
     {
       header('location:Sucessfully_registration.html');
     }
     else
     {
          header('location:Unsucessfull_registration.html');
     }
     
     
  }
  
  else{
     header('location:User_exists.html');
  }
  
 


 
    
    
}





?>

