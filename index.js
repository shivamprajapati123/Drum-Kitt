for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  let ele1 = document.getElementsByTagName("button")[i];

  ele1.addEventListener("click", function y() {
    console.log(this);
    var button_Inner_Html = this.innerHTML;
    make_Sound(button_Inner_Html);
    correct_button(button_Inner_Html);
  });

  document.addEventListener("keypress", function (clicked_key) {
    make_Sound(clicked_key.key);
    correct_button(clicked_key.key);
  });
}
function make_Sound(key) {
  switch (key) {
    case "w":
      var audio1 = new Audio("sounds/tom-1.mp3");
      audio1.play();
      break;
    case "a":
      var audio1 = new Audio("sounds/tom-2.mp3");
      audio1.play();
      break;
    case "s":
      var audio1 = new Audio("sounds/tom-3.mp3");
      audio1.play();
      break;
    case "d":
      var audio1 = new Audio("sounds/tom-4.mp3");
      audio1.play();
      break;
    case "j":
      var audio1 = new Audio("sounds/snare.mp3");
      audio1.play();
      break;
    case "k":
      var audio1 = new Audio("sounds/crash.mp3");
      audio1.play();
      break;
    case "l":
      var audio1 = new Audio("sounds/kick-bass.mp3");
      audio1.play();
      break;

    default:
      break;
  }
}
function correct_button(pressed_key) {
    var active_key=document.querySelector("."+ pressed_key);
    active_key.classList.add("pressed");
    setTimeout(function(){active_key.classList.remove("pressed")},100)
}
