// object Vegetable
// biome
// shelf life / rotten
// weight
let food = [];


// Food Item Factory Funciton
const FoodItem = function(biome, shelfLife, name, type) {
    this.type = type;
    this.name = name;
    this.biome = biome;
    this.shelfLife = shelfLife;

};
// adds
function addToFood(arg) {
    food.splice(1, 0, arg);
    return food;
}