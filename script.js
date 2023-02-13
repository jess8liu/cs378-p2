// Get all of the menu items and checkout
const menu_label = document.querySelectorAll(".menu-label");
const checkout = document.querySelectorAll(".checkout");
const button_order = set.querySelector(".order");
const button_clear = set.querySelector(".clear");

let subtotal = 0;
document.getelementbyid ("subtotal").innerHTML = 0;

menu_label.forEach(function (set) {
    // Get buttons associated with each menu item
    const button_add = set.querySelector(".add");
    const button_remove = set.querySelector(".remove");

    // Get item price and total and set it to 0
    const item_price = parseInt(set.querySelector(".menu-price").dataset.price);
    let num_items = 0;
    var item_total = document.getElementById("menu-item-total");
    var checkout_subtotal = document.getElementById("subtotal");

    button_add.addEventListener("click", function () {
        // Add to items total and increase subtotal price
        num_items++;
        subtotal += item_price;
        item_total.innerHTML = toString(num_items);
        checkout_subtotal.innerHTML = toString(subtotal);
    });

    button_remove.addEventListener("click", function () {
        // Ensure that the item_total does not go into negatives
        if (item_total > 0) {
            num_items--;
            subtotal -= item_price;
            item_total.innerHTML = toString(num_items);
            checkout_subtotal.innerHTML = toString(subtotal);
        }
    });

    button_clear.addEventListener("click", function () {
        // Clear all orders and subtotal
        document.getElementById("subtotal").innerHTML = "0";
    });
 
    button_order.addEventListener("click", function () {
        // Do an alert

    });
});
// alert('hello world');