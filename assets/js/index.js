//Detecting button pressed.
$("button").click(function(){
  makeSound($(this).html())
  animateButton($(this).html())
});

//Detecting keyboard press.
$(document).keydown(function(event){
  makeSound(event.key)
  animateButton(event.key)
})

//Play the appropriate sound according to the button or the keboard pressed.
function makeSound(key){
  switch (key) {
    case 'w':
      playSound("tom-1");;
      break;

    case 'a':
    playSound("tom-2");
      break;

    case 's':
      playSound("tom-3");
      break;

    case 'd':
      playSound("tom-4");
      break;

    case 'j':
      playSound("snare");
      break;

    case 'k':
    playSound("crash");
      break;

    case 'l':
    playSound("kick-bass");
      break;

    default:
    console.log(this.innerHTML)
  }
}

function playSound(soundName){
  var audio = new Audio("assets/sounds/" + soundName +".mp3");
  audio.play();
}

//Make animation for the pressed button.
function animateButton(key){
  $("." + key).addClass("pressed");
  setTimeout(function(){
    $("." + key).removeClass("pressed");
  }, 100)
}
