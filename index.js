for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
      makeSound(this.innerHTML);
      animate(this.innerHTML);
    });
}

document.addEventListener("keydown",function(press){
  makeSound(press.key);
  animate(press.key);
});

function makeSound(key)
{
  switch(key)
  {
    case 'w':
      var aud = new Audio("sounds/tom-1.mp3");
      aud.play();
    break;
    case 'a':
      var aud = new Audio("sounds/tom-2.mp3");
      aud.play();
    break;
    case 's':
      var aud = new Audio("sounds/tom-3.mp3");
      aud.play();
    break;
    case 'd':
      var aud = new Audio("sounds/tom-4.mp3");
      aud.play();
    break;
    case 'j':
      var aud = new Audio("sounds/crash.mp3");
      aud.play();
    break;
    case 'k':
      var aud = new Audio("sounds/snare.mp3");
      aud.play();
    break;
    case 'l':
      var aud = new Audio("sounds/kick-bass.mp3");
      aud.play();
    break;
    default:
    alert("wrong choose");
  }
}

function animate(alp)
{
  document.querySelector("."+alp).classList.add("pressed");
  setTimeout(
    function(){document.querySelector("."+alp).classList.remove("pressed");}
    ,100
  );
}
