class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }


    displayProduct() {
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price}`);
    }


    calculateTax(TaxPercentage) {
        const tax = this.price * (TaxPercentage / 100);
        const finalPrice = this.price + tax;
        console.log(`Final Price: $${finalPrice.toFixed(2)}`);
    }

    applyDiscount(discountPercentage) {
        const discount = this.price * (discountPercentage / 100);
        const discountedPrice = this.price - discount;
        console.log(`Discounted Price: $${discountedPrice.toFixed(2)}`);
    }

    static comparePrices(product1, product2) {
        if (product1.price > product2.price) {
            console.log(`${product1.name} is more expensive than ${product2.name}.`);

        } else if (product1.price < product2.price) {
            console.log(`${product2.name} is more expensive than ${product1.name}.`);

        } else {
            console.log(`${product1.name} and ${product2.name} have the same price.`);
        }


    }
}

const product1 = new Product("Laptop", 950);
const product2 = new Product("Smartphone", 950);
product2.displayProduct();
product2.calculateTax(15);
product2.applyDiscount(10);
Product.comparePrices(product1, product2);