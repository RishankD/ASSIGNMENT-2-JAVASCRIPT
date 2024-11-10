// This define prices for each ingredient
const ingredientPrices = {
    Banana: 0.5,
    Strawberry: 0.75,
    Blueberry: 0.85,
    Mango: 1.0,
    Spinach: 0.6,
    Kale: 0.7,
    AlmondMilk: 1.0,
    CoconutWater: 0.8,
    Honey: 0.3,
    ProteinPowder: 1.5
};
// Smoothie class 
class Smoothie {
    constructor(name, size, ingredients, sweetness) {
        this.name = name;
        this.size = size;
        this.ingredients = ingredients;
        this.sweetness = sweetness;
        this.price = this.calculatePrice();
    }
    calculatePrice() {
        // Base price based on size
        let basePrice = this.size === "Small" ? 3 : this.size === "Medium" ? 5 : 7;
        // Calculate total cost of selected ingredients
        let ingredientCost = this.ingredients.reduce((total, ingredient) => {
            return total + (ingredientPrices[ingredient] || 0);
        }, 0);
        return basePrice + ingredientCost;
    }

    getOrderSummary() {
        return `
            <h3>Your Smoothie Order:</h3>
            <p><strong>Name:</strong> ${this.name}</p>
            <p><strong>Size:</strong> ${this.size}</p>
            <p><strong>Ingredients:</strong> ${this.ingredients.join(", ")}</p>
            <p><strong>Sweetness Level:</strong> ${this.sweetness}</p>
            <p><strong>Total Price:</strong> $${this.price.toFixed(2)}</p>
        `;
    }
}
