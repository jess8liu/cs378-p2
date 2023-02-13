// alert('hello world');
const menu_buttons = document.querySelectorAll(".menu-buttons");
const checkout_subtotal = document.querySelectorAll(".subtotal");

let subtotal = 0;

menu_buttons.forEach(function (set) {
    // Get buttons associated with each menu item
    const button_add = set.querySelector(".add");
    const button_remove = set.querySelector(".remove");

    // Get item price and total and set it to 0
    const item_price = parseInt(set.dataset.factor);
    

    let item_total = 0;

    button_add.addEventListener("click", function () {
        // Add to items total and increase subtotal price
        item_total++;


    });

    button_remove.addEventListener("click", function () {
        // Ensure that the item_total does not go into negatives
        if (item_total > 0) {
            item_total--;
        }
    });
});