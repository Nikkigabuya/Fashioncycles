var shirt = document.getElementById("shirt");

window.onscroll = function(){

    var y = window.pageYOffset;
  //  shirt.style.top = 200 + y  + "px";

    if(y < 3000){
      shirt.style.top= 4000 + y  + "px";

    }else{

    shirt.style.top = 200 + y  + "px";
   }

   if( y < 1000){
     fabric.style.top= 4000 + y  + "px";

   }else{

   fabric.style.top = 100 + y  + "px";
  }

  if(y > 550){
  document.getElementById("text_fabricleft").style.left = "50px";
  } else {
  document.getElementById("text_fabricleft").style.left = "-35px";
  }

  if(y > 800){
  document.getElementById("text_fabricright").style.left = "800px";
  } else {
  document.getElementById("text_fabricright").style.left = "-35px";
  }


};
