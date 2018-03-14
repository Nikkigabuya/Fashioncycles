var shirt = document.getElementById("shirt");
var oldshirt = document.getElementById("oldshirt");
var dirtyshirt = document.getElementById("dirtyshirt");
var fabricroll = document.getElementById("fabricroll");

window.onscroll = function(){

    var y = window.pageYOffset;
  //  shirt.style.top = 200 + y  + "px";

 if(y >= 4000){

     shirt.style.top= 200 + y + "px";

     }
     if(y >= 6000){

         oldshirt.style.top= 200 + y + "px";

         }
         if(y >= 7000){

             dirtyshirt.style.top= 200 + y + "px";

             }





  //  if(y < 3000){
    //  shirt.style.top= 4000 + y  + "px";

  //  }else{

    //shirt.style.top = 200 + y  + "px";
   //}

  // if( y < 1000){
//     fabric.style.top= 4000 + y  + "px";

  // }else{

//   fabric.style.top = 100 + y  + "px";
 //}

  if(y > 550){
  document.getElementById("text_fabricleft").style.left = "100px";
  } else {
  document.getElementById("text_fabricleft").style.left = "-35px";
  }

  if(y > 800){
  document.getElementById("text_fabricright").style.left = "50px";
  } else {
  document.getElementById("text_fabricright").style.right = "-35px";
  }

  if(y > 1000){
  document.getElementById("text_fabricleft2").style.left = "50px";
  } else {
  document.getElementById("text_fabricleft2").style.left = "-35px";
  }

  if(y > 800){
  document.getElementById("text_fabricright2").style.left = "50px";
  } else {
  document.getElementById("text_fabricright2").style.right = "-35px";
}

if(y > 4000){
document.getElementById("hanger").style.left = "500px";
} else {
document.getElementById("hanger").style.left = "-35px";
}}
