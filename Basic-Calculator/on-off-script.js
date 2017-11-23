var cButton = document.getElementById('C-Button');
var screen = document.getElementById('screen');
var onButton = true;

cButton.addEventListener("click", function a() {
  if (onButton) {
    screen.value = 'Hello...';
    var keys = document.getElementsByClassName('col-xs-3 button');
    for (var i = 0; i < keys.length; i += 1) {
      keys[i].setAttribute('onclick', "screen.value = this.value");
    }
    console.log(keys);
  } else {
    screen.value = 'Goodbye...';
    var keys = document.getElementsByClassName('col-xs-3 button');
    for (var j = 0; j < keys.length; j += 1) {
      keys[j].removeAttribute('onclick', "screen.value = this.value");
    }
  }
  onButton = !onButton;
})