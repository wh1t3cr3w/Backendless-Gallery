const changeThemeBtn = document.getElementsByClassName("changeTheme")
const link = document.getElementById("theme-link")
const selectTheme = document.getElementById("selectTheme")

for (let i = 0; i < changeThemeBtn.length; i++) {
    changeThemeBtn[i].addEventListener("click" , (e)=> {
        ChangeTheme(changeThemeBtn[i].dataset.theme)
    })
}

selectTheme.addEventListener("change" , (e)=> {
    ChangeTheme(e.target.value)
})
// input.addEventListener("click", function () { ChangeTheme(); });

function ChangeTheme(theme)
{
    let lightTheme = "css/light.css";
    let darkTheme = "css/dark.css";
    let backendlessTheme = "css/backendless.css";


    let currTheme = link.getAttribute("href");
  

    if(theme === 'light')
    {
   	 currTheme = lightTheme;
   	 theme = "dark";
    }
    else if(theme === 'dark')
    {    
   	 currTheme = darkTheme;
   	 theme = "light";
    }else if(theme === 'bakcendless'){
        currTheme = backendlessTheme
    }else{
        currTheme = backendlessTheme
    }

    link.setAttribute("href", currTheme);

}