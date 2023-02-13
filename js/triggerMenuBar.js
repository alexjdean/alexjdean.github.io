function triggerMenu() {
    let menu_items = document.getElementById("myMenu");

    if(menu_items.className === "menu") {
        menu_items.className += " responsive";
    } else {
        menu_items.className = "menu";
    }
}