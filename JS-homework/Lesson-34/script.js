let shoppingList = [
    {
        product: "apple", quantity: 2, bought: true, price: 10,
        sum: function () {
            return this.quantity * this.price;
        },
    },
    {
        product: "lime", quantity: 3, bought: false, price: 13,
        sum: function () {
            return this.quantity * this.price;
        },
    },
    {
        product: "pineapple", quantity: 1, bought: false, price: 17,
        sum: function () {
            return this.quantity * this.price;
        },
    },
];

function displayShoppingList() {
    // Відфільтруємо придбані та непридбані продукти
    let unboughtProducts = shoppingList.filter(product => !product.bought);
    let boughtProducts = shoppingList.filter(product => product.bought);

    // Виведемо непридбані продукти
    console.log("Unbought products:");
    unboughtProducts.forEach(product => {
        console.log(`- ${product.product} (${product.quantity} x ${product.price}$ = ${product.sum()}$)`);
    });

    // Виведемо придбані продукти
    console.log("\nBought products:");
    boughtProducts.forEach(product => {
        console.log(`- ${product.product} (${product.quantity} x ${product.price}$ = ${product.sum()}$)`);
    });
}

function buyProduct(productName) {
    let productIndex = shoppingList.findIndex(product => product.product === productName);

    if (productIndex >= 0) {
        shoppingList[productIndex].bought = true;
        console.log(`Product "${productName}" was bought.`);
    } else {
        console.log(`Product "${productName}" not found.`);
    }
}

displayShoppingList();
buyProduct("lime");
displayShoppingList();


