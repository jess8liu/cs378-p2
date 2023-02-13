// Get all of the menu items and checkout
const menu_label = document.querySelectorAll(".menu-label");
const checkout = document.querySelectorAll(".checkout");

let subtotal = 0;
// document.getelementbyid ("subtotal").innerHTML = 0;

menu_label.forEach(function (set) {
    // Get buttons associated with each menu item
    const button_add = set.querySelector(".add");
    const button_remove = set.querySelector(".remove");

    // Get item price and total and set it to 0
    const item_price = parseInt(set.querySelector(".menu-price").dataset.price-val);
    let item_total = 0;

    button_add.addEventListener("click", function () {
        // Add to items total and increase subtotal price
        item_total++;
        subtotal += item_price;
    });

    button_remove.addEventListener("click", function () {
        // Ensure that the item_total does not go into negatives
        if (item_total > 0) {
            item_total--;
            subtotal -= item_price;
        }
    });
});

checkout.forEach(function (set) {

});

// alert('hello world');