// alert('hello world');
const menu_buttons = document.querySelectorAll(".menu_buttons");
const checkout_subtotal = document.querySelectorAll(".subtotal");

let subtotal = 0;

menu_buttons.forEach(function (set)) {
    let item_total = 0;

    button_add.addEventListener("click", function () {
        item_total++;

    })

    button_remove.addEventListener("click", function () {
        if (item_total > 0) {
            item_total--;
        }
    })
}