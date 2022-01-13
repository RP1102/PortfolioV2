// - THIS IS THE CODE FOR THE THEME SWITCHER - // 
const body = document.body
const links = document.getElementById("navigation")
const topBarEl = document.getElementById("topbar-el")

const themeSwitcher = document.querySelector('input[type=checkbox]')
themeSwitcher.checked = false

themeSwitcher.addEventListener("change", function(){
    if(this.checked){
        body.style.backgroundColor = "rgba(27, 27, 27)"
        // body.style.backgroundColor = "#3e4372"
        body.style.color = "#F7F7F7"
        r.style.setProperty('--textColor', "#F7F7F7")
        r.style.setProperty('--themeContent',"rgba( 42, 42, 42, 1 )")
        r.style.setProperty('--themeShadow',"0 8px 32px 0 rgba(  12, 12, 12 , 0.37 )")
        r.style.setProperty('--gadgetColor', "rgb( 42, 42, 42)")

    }
    else{
        body.style.backgroundColor = "rgba(247, 247, 247, 1)"
        // body.style.backgroundColor = "#eeedff"
        body.style.color = "#1b1b1b"
        r.style.setProperty('--textColor', "#1b1b1b")
        r.style.setProperty('--themeContent', "rgba( 255, 255, 255, 1 )")
        r.style.setProperty('--themeShadow',"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px")
        r.style.setProperty('--gadgetColor', "rgb( 255, 255, 255)")
    }
})
// - END - //