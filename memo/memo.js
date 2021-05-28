let modal = document.getElementsByClassName('modal');


let btn = document.getElementsByClassName("myBtn");


//  <span> va permettre de fermer le modal
let span = document.getElementsByClassName("close");

// quand l'utilisateur clique sur button = ouvre le modal 
for (var i=0; i < btn.length; i++ ){
  btn[i].onclick = function(){
    modal[i].style.display="block";
  };
}



//btn[0].onclick = function() {
  //  modal[0].style.display = "block";
//}

//btn[1].onclick = function() {
   // modal[1].style.display = "block";
//}

// Quand l'utilisateur clicks sur <span> (x), ferme le modal
for (var i=0; span.length; i++){
 btn[i].style.display = "none";
}

//span[0].onclick = function() {
  //  modal[0].style.display = "none";
//}

//span[1].onclick = function() {
   // modal[1].style.display = "none";
//}
