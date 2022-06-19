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

// vegetable list
let artichokes = new FoodItem(100, "Artichokes", "Vegetable", "Grassland", "Urban");
addToFood(artichokes);
let eggplants = new FoodItem(100, "Eggplants", "Vegetable", "Desert", "Grassland", "Hill" ,"Mountain", "Urban");
addToFood(eggplants);

// adds a FoodItem object to the food array
function addToFood(product) {
    food.splice(1, 0, product);
    return food;
}


function foodTable() {
    // loops through food array

    let foodDisplay = document.getElementById("foodDisplay");

    for (i = 0; i < food.length; i++) {
        
        let type = document.createElement("p");
        let name = document.createElement("p");
        let shelfLife = document.createElement("p");

        type.innerHTML = food[i].type;
        foodDisplay.appendChild(type);

        name.innerHTML = food[i].name;
        foodDisplay.appendChild(name);

        shelfLife.innerHTML = food[i].shelfLife;
        foodDisplay.appendChild(shelfLife);
    }
}

