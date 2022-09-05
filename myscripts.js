function mobileMenu (){
    let z = document.getElementById("header_display")
    var x = document.getElementById("menu")
    if (x.style.display === "block"){
        x.style.display = "none";
        z.style.display = "block";
    } else {
        x.style.display = "block";
        z.style.display = "none";
    }
}
document.getElementById("menu_icon").addEventListener('click', mobileMenu);

document.getElementById("close_icon").addEventListener('click', mobileMenu);

