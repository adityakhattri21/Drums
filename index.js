
var numberOfDrums=document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfDrums;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",clicked);
}

function clicked(){
var buttonInnerHtml=this.innerHTML;
makeSound(buttonInnerHtml);
animate(buttonInnerHtml);
}

document.addEventListener("keydown",function(event){
  makeSound(event.key); //event captures thee key stroke where as kEy passes only the key associated with it
  animate(event.key); //the variable event acts as an obejct here and captures the information about the event which is pressing the key here.
})


function  makeSound(input){
  switch (input) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    default:
      console.log(this.innerHTML);
  }
}

function animate(currentKey){
  var activeButton=document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}


//
