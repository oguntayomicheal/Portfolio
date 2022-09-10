function mobileMenu (){
    let headerDisplay = document.getElementById("header_display")
    var menu = document.getElementById("menu")
    if (menu.style.display === "block"){
        menu.style.display = "none";
        headerDisplay.style.display = "block";
    } else {
        menu.style.display = "block";
        headerDisplay.style.display = "none";
    }
}
document.getElementById("menu_icon").addEventListener('click', mobileMenu);

document.getElementById("close_icon").addEventListener('click', mobileMenu);

let menu_list = document.querySelectorAll(".menu_list");
for (i = 0; i<menu_list.length; i++) {
    menu_list[I].addEventListener("click", mobileMenu);
}
