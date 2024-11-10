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
// Smoothie class with pricing feature
class Smoothie {
    constructor(name, size, ingredients, sweetness) {
        this.name = name;
        this.size = size;
        this.ingredients = ingredients;
        this.sweetness = sweetness;
        this.price = this.calculatePrice();
    }
