// Get the root element
let r = document.querySelector(':root')
const homePage = document.getElementById("home-page")
const menuBtn = document.getElementById("menu-btn")
let menuIsOpen = false
const nav = document.getElementById("navigation")
menuBtn.addEventListener("click", function(){
    if(!menuIsOpen){
        nav.style.right = "0%"
        menuBtn.classList.add('isOpen')
        menuIsOpen = true
        // homePage.style.filter = "blur(0px)"
    }
    else{
        nav.style.right = "-100%"
        menuBtn.classList.remove('isOpen')
        menuIsOpen = false
        // homePage.style.filter = "blur(3px)"
    }
})

// --- THIS IS THE CODE FOR THE 3 COLORED BUTTONS --- //
function myFunction_set(color) {
    r.style.setProperty('--color', color)
  }
  
  function toGreen(){
      myFunction_set("#32c267")
  }
  function toBlue(){
      myFunction_set("#59a5ff")
  }
  function toOrange(){
      myFunction_set("#ff8b00")
  }
  // --- END --- //

  // -- THIS IS THE CODE FOR THE THEME SWITCHER ON MOBILE -- //
