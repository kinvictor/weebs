function myFunction(x) {
    if (x.matches) { // If media query matches
      document.body.style.backgroundColor = "yellow";
    } else {
     document.body.style.backgroundColor = "pink";
    }
  }
  
  var x = window.matchMedia("(min-width: 768px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes


const hamThreeNav = document.querySelector('.ham-nav .fa-bars')
const hamCloseNav = document.querySelector('.ham-nav .fa-times')
const mainNav = document.querySelector('.master-nav .main-nav')
hamThreeNav.addEventListener('click', (()=> {
  hamThreeNav.style.display = 'none';
  hamCloseNav.style.display = 'flex'
  mainNav.classList.add('dor')
}))

hamCloseNav.addEventListener('click', (()=> {
  hamCloseNav.style.display = 'none';
  hamThreeNav.style.display = 'flex'
  mainNav.classList.remove('dor')
}))
