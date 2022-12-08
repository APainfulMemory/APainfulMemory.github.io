function win(dst) {
  window.open(dst)
}
function goto(dst) {
    location.assign(dst);
}

function myFunction() {
  var x = document.getElementById("demo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}
