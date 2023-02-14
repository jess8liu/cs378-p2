// Get all of the menu items and checkout
const menu_label = document.querySelectorAll(".menu-label");
const button_order = document.querySelector(".order");
const button_clear = document.querySelector(".clear");
const checkout_subtotal = document.querySelector(".subtotal");

const menu_items = ["Indian Curry", "Pork Dumplings", "Greek Gyro", "Spring Soup"];

let subtotal = 0;
checkout_subtotal.innerHTML = 0;

menu_label.forEach(function (set) {
    // Get buttons associated with each menu item
    const button_add = set.querySelector(".add");
    const button_remove = set.querySelector(".remove");

    // Get item price and total and set it to 0
    const item_price = parseInt(set.querySelector(".menu-price").getAttribute("price"));
    let num_items = 0;
    var item_total = set.querySelector(".menu-item-total");
    item_total.innerHTML = 0;

    button_add.addEventListener("click", function () {
        // Add to items total and increase subtotal price
        num_items++;
        subtotal += item_price;
        item_total.innerHTML = num_items;
        checkout_subtotal.innerHTML = subtotal;
    });

    button_remove.addEventListener("click", function () {
        // Ensure that the item_total does not go into negatives
        if (num_items > 0) {
            num_items--;
            subtotal -= item_price;
            item_total.innerHTML = num_items;
            checkout_subtotal.innerHTML = subtotal;
        } else {
            alert("There is nothing to remove!");
        }
    });

    button_clear.addEventListener("click", function () {
        // Clear all orders
        num_items = 0;
        item_total.innerHTML = num_items;
    });
});

button_order.addEventListener("click", function () {
    // Do an alert
    if (subtotal > 0) {
        const message = "Order placed!\n"
        let order_items = "";
        let item_index = 0;

        // Add how many items and which items are in order
        menu_label.forEach(function (set) {
            // Get how many items
            let item_total = set.querySelector(".menu-item-total").innerHTML;

            // Add to message if items actually added
            if (item_total > 0) {
                order_items += item_total+ " " + menu_items[item_index] + " ";
            }
            item_index++;
        });

        // Post message
        alert(message + order_items);
    } else {
        alert("No items in cart.");
    }
});

button_clear.addEventListener("click", function () {
    subtotal = 0;
    checkout_subtotal.innerHTML = 0;
});