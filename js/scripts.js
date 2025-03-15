console.log("Hello! Welcome to my Website")

function menuToggle() {
    var x = document.getElementById('myNavtoggle');

    if (x.className === 'navtoggle') {
        x.className += ' responsive';
      } else {
        x.className = 'navtoggle';
      }
  }