var shirt = document.getElementById("shirt");
var oldshirt = document.getElementById("oldshirt");
var dirtyshirt = document.getElementById("dirtyshirt");
var fabricroll = document.getElementById("fabricroll");
var earth = document.getElementById("earth");

window.onscroll = function(){

    var y = window.pageYOffset;
  //  shirt.style.top = 200 + y  + "px";

 if(y >= 4000){

     shirt.style.top= 170 + y + "px";

     }
     if(y >= 5500){

         oldshirt.style.top= 140 + y + "px";

         }
         if(y >= 7000){

             dirtyshirt.style.top= 140 + y + "px";

           }

           if(y >= 9000){

               earth.style.top= 25 + y + "px";

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




if(y > 4000){
document.getElementById("hanger").style.left = "575px";
} else {
document.getElementById("hanger").style.left = "-35px";
}}
