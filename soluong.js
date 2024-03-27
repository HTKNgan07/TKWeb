document.getElementById("increase-btn").addEventListener("click", function() {
    increaseQuantity();
});

document.getElementById("decrease-btn").addEventListener("click", function() {
    decreaseQuantity();
});

function increaseQuantity() {
    let quantityInput = document.getElementById("quantity-input");
    let currentValue = parseInt(quantityInput.value);
    quantityInput.value = currentValue + 1;
}

function decreaseQuantity() {
    let quantityInput = document.getElementById("quantity-input");
    let currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
    }
}
