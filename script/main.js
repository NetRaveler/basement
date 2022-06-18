// object Vegetable
// biome
// shelf life / rotten
// weight
let food = [];




// Food Item Factory Funciton
const FoodItem = function(shelfLife, name, type, ...args) {
    this.type = type;
    this.name = name;
    this.shelfLife = shelfLife;
    this.biomes = args;

};
// adds a FoodItem object to the food array
function addToFood(product) {
    food.splice(1, 0, product);
    return food;
}


function foodTable() {
    // loops through food array
    let foodDisplay = document.getElementById("foodDisplay");

    let type = document.createElement("p");
    let name = document.createElement("p");
    let shelfLife = document.createElement("p");

    for (i = 0; i < food.length; i++) {

        type.innerHTML = food[i].type;
        foodDisplay.appendChild(type);

        name.innerHTML = food[i].name;
        foodDisplay.appendChild(name);

        shelfLife.innerHTML = food[i].shelfLife;
        foodDisplay.appendChild(shelfLife);
    }
}

let corn = new FoodItem(100, "corn", "vegetable", "desert", "grassland");
addToFood(corn);