console.log("Hello, the first JS of my portfolio site!");

function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
    x.className += ' responsive';
    } else {
        x.className = 'navtoggle';
    }
}