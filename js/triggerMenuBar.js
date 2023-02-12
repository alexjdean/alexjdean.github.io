function triggerMenu() {
    let menu_items = document.getElementById("myMenu");
    menu_items.className = (menu_items.className === "menu") ? "menu responsive" : "menu";
}