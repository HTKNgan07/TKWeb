document.getElementById("increase1-btn").addEventListener("click", function() {
    increaseQuantity1();
});

document.getElementById("decrease1-btn").addEventListener("click", function() {
    decreaseQuantity1();
});

function increaseQuantity1() {
    let quantityInput = document.getElementById("quantity1-input");
    let currentValue = parseInt(quantityInput.value);
    quantityInput.value = currentValue + 1;
}

function decreaseQuantity1() {
    let quantityInput = document.getElementById("quantity1-input");
    let currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
    }
}
