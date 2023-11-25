function win(dst) {
  window.open(dst)
}
function goto(dst) {
    location.assign(dst);
}
function Hamburg() {
  var x = document.getElementById("TopnavJS");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
