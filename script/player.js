// object Vegetable
// biome
// shelf life / rotten
// weight

let vegfood = [];
let fruitfood = [];
let huntfood = [];

// Food Item Factory Funciton
const VegItem = function(shelfLife, name, type, ...args) {
    this.type = type;
    this.name = name;
    this.shelfLife = shelfLife;
    this.biomes = args;

};
const FruitItem = function(shelfLife, name, type, ...args) {
    this.type = type;
    this.name = name;
    this.shelfLife = shelfLife;
    this.biomes = args;

};

const HuntItem = function(shelfLife, name, type, ...args) {
    this.type = type;
    this.name = name;
    this.shelfLife = shelfLife;
    this.biomes = args;

};

// vegetable list - Shelflife, NAME, TYPE, Arctic, Coastal, Desert, Forest, Grassland, Hill, Mountain, Swamp, Underdark, Urban
let artichokes = new VegItem(100, "Artichokes", "Vegetable", "n", "n", "n", "n", "y", "n", "n", "n", "n", "y");
addToVeg(artichokes);
let eggplants = new VegItem(100, "Eggplants", "Vegetable", "n", "n", "y", "n", "y", "y", "y", "n", "n", "y");
addToVeg(eggplants);
let asparagus = new VegItem(100, "Asparagus", "Vegetable", "n", "n", "n", "n", "y", "y", "y", "n", "n", "y");
addToVeg(asparagus);
let blackbeans = new VegItem(100, "Black Beans", "Vegetable", "n", "n", "y", "n", "n", "y", "y", "n", "n", "y");
addToVeg(blackbeans);
let greenbeans = new VegItem(100, "Green Beans", "Vegetable", "n", "n", "y", "y", "y", "y", "n", "n", "n", "y");
addToVeg(greenbeans);
let lentils = new VegItem(100, "Lentils", "Vegetable", "n", "n", "n", "y", "y", "y", "y", "n", "n", "y");
addToVeg(lentils);
let peanuts = new VegItem(100, "Peanuts", "Vegetable", "n", "n", "y", "n", "y", "n", "n", "n", "n", "y");
addToVeg(peanuts);
let peas = new VegItem(100, "Peas", "Vegetable", "n", "n", "y", "y", "y", "y", "n", "n", "n", "y");
addToVeg(peas);
let broccoli = new VegItem(100, "Broccoli", "Vegetable", "n", "n", "n", "y", "y", "y", "n", "n", "n", "y");
addToVeg(broccoli);
let cabbage = new VegItem(100, "Cabbage", "Vegetable", "n", "n", "n", "n", "n", "y", "y", "y", "n", "y");
addToVeg(cabbage);
let celery = new VegItem(100, "Celery", "Vegetable", "n", "y", "n", "n", "y", "n", "n", "y", "n", "y");
addToVeg(celery);
let spinach = new VegItem(100, "Spinach", "Vegetable", "y", "n", "n", "n", "y", "y", "y", "n", "n", "y");
addToVeg(spinach);
let lettuce = new VegItem(100, "Lettuce", "Vegetable", "n", "n", "n", "y", "y", "y", "n", "n", "n", "y");
addToVeg(lettuce);
let mushroom = new VegItem(100, "Mushroom", "Vegetable", "n", "n", "n", "y", "n", "n", "n", "y", "y", "y");
addToVeg(mushroom);
let okra = new VegItem(100, "Okra", "Vegetable", "n", "n", "y", "n", "y", "n", "n", "n", "n", "y");
addToVeg(okra);
let garlic = new VegItem(100, "Garlic", "Vegetable", "n", "n", "y", "n", "y", "n", "n", "n", "n", "y");
addToVeg(garlic);
let leeks = new VegItem(100, "Leeks", "Vegetable", "n", "n", "n", "n", "y", "y", "n", "n", "n", "y");
addToVeg(leeks);
let onions = new VegItem(100, "Onions", "Vegetable", "n", "n", "n", "y", "y", "n", "n", "n", "n", "y");
addToVeg(onions);
let bellpeppers = new VegItem(100, "Bell Peppers", "Vegetable", "n", "n", "y", "n", "y", "n", "n", "n", "n", "y");
addToVeg(bellpeppers);
let carrots = new VegItem(100, "Carrots", "Vegetable", "n", "n", "y", "y", "y", "y", "n", "n", "n", "y");
addToVeg(carrots);
let corn = new VegItem(100, "Corn", "Vegetable", "n", "n", "y", "n", "y", "y", "y", "n", "n", "y");
addToVeg(corn);
let rutabage = new VegItem(100, "Rutabage", "Vegetable", "y", "y", "n", "y", "n", "y", "y", "n", "n", "y");
addToVeg(rutabage);
let potatoes = new VegItem(100, "Potatoes", "Vegetable", "n", "n", "y", "y", "y", "y", "n", "n", "n", "y");
addToVeg(potatoes);
let sweetpoatoes = new VegItem(100, "Sweet Poatoes", "Vegetable", "n", "n", "y", "y", "y", "y", "n", "n", "n", "y");
addToVeg(sweetpoatoes);
let turnips = new VegItem(100, "Turnips", "Vegetable", "y", "y", "y", "n", "y", "y", "n", "n", "n", "y");
addToVeg(turnips);
let squashe = new VegItem(100, "Squashe", "Vegetable", "n", "n", "y", "y", "y", "y", "y", "n", "n", "y");
addToVeg(squashe);
let cucumber = new VegItem(100, "Cucumber", "Vegetable", "n", "n", "y", "y", "y", "y", "n", "n", "n", "y");
addToVeg(cucumber);
let tomatoes = new VegItem(100, "Tomatoes", "Vegetable", "n", "n", "n", "y", "y", "y", "n", "n", "n", "y");
addToVeg(tomatoes);

// Fruit List - Shelflife, NAME, TYPE, Arctic, Coastal, Desert, Forest, Grassland, Hill, Mountain, Swamp, Underdark, Urban
let strawberries = new FruitItem(100, "Strawberries", "Fruit", "n", "y", "n", "y", "y", "y", "y", "n", "n", "y");
addToFruit(strawberries);
let mangos = new FruitItem(100, "Mangos", "Fruit", "n", "y", "n", "n", "n", "n", "n", "y", "n", "y", );
addToFruit(mangos);


// Hunting List - Shelflife, NAME, TYPE, Arctic, Coastal, Desert, Forest, Grassland, Hill, Mountain, Swamp, Underdark, Urban
let alligator = new HuntItem(100, "Alligator", "Hunting", "n", "y", "n", "n", "n", "n", "n", "y", "n", "n");
addToHunt(alligator);
let antelope = new HuntItem(100, "Antelope", "Hunting", "n", "n", "y", "n", "y", "n", "n", "n", "n", "n");
addToHunt(antelope);

// adds a VegItem object to the vegfood array
function addToVeg(product) {
    vegfood.splice(0, 0, product);
    return vegfood;

}

// adds a FruitItem object to the fruitfood array
function addToFruit(product) {
    fruitfood.splice(0, 0, product);
    return fruitfood;

}

// adds a HuntItem object to the huntfood array
function addToHunt(product) {
    huntfood.splice(0, 0, product);
    return huntfood;

}
// Listening for Sorting Events


// Sort food table when Listening even is triggered
function alphaSort() {
    if (document.getElementById("selectSort").checked == true) {
        randomByChoice.sort((a, b) => a.name.localeCompare(b.name));
    }
    randomTable();
}

function typeSort() {

    if (document.getElementById("selectSort").checked == true) {
        randomByChoice.sort((a, b) => a.type.localeCompare(b.type));
    }
    randomTable();
}

// Sort biomes for ALL tables

function biomeSort(clicked_id) {
    for (i = 0; i < vegfood.length; i++) {
        if (vegfood[i].biomes[clicked_id] == "y") {

            move(vegfood, i);
        }

    }
    for (f = 0; f < fruitfood.length; f++) {
        if (fruitfood[f].biomes[clicked_id - 100] == "y") {
            move(fruitfood, f);
        }
    }
    for (h = 0; h < huntfood.length; h++) {
        if (huntfood[h].biomes[clicked_id - 200] == "y") {

            move(huntfood, h);
        }
    }

    if (document.getElementById("selectSort").checked == true) {

        for (r = 0; r < randomByChoice.length; r++) {
            if (randomByChoice[r].biomes[clicked_id - 300] == "y") {

                move(randomByChoice, r);
            }
        }

        randomTable();
    }
    // Rebuild food table based on sorting 
}
// Reorder food arry to generate table

function move(arr, oldLocation) {
    var mover = arr.splice(oldLocation, 1);
    arr.splice(0, 0, mover[0]);
    return arr, mover;

}

// Get a random selection of food Items in stated Biome
// 


let randomByChoice = [];
let randomByBiome = [];
let randomByType = [];

function randomCart() {
    randomByChoice = [];
    randomByBiome = [];
    randomByType = [];
    let sort = document.getElementById("selectSort").checked;
    let biome = document.getElementById("selectBiome").value;
    let type = document.getElementById("selectType").value;

    // Sort biomes by selected
    if (biome != "all") {
        for (h = 0; h < huntfood.length; h++) {
            if (huntfood[h].biomes[biome] == "y") {
                randomByBiome.splice(0, 0, huntfood[h]);
            }
        }
        for (f = 0; f < fruitfood.length; f++) {
            if (fruitfood[f].biomes[biome] == "y") {
                randomByBiome.splice(0, 0, fruitfood[f]);
            }
        }

        for (v = 0; v < vegfood.length; v++) {
            if (vegfood[v].biomes[biome] == "y") {
                randomByBiome.splice(0, 0, vegfood[v]);
            }

        }
    } else if ((biome == "all")) {
        for (h = 0; h < huntfood.length; h++) {
            randomByBiome.splice(0, 0, huntfood[h]);

        }
        for (f = 0; f < fruitfood.length; f++) {
            randomByBiome.splice(0, 0, fruitfood[f]);

        }

        for (v = 0; v < vegfood.length; v++) {
            randomByBiome.splice(0, 0, vegfood[v]);
        }
    }
    // Sort type by selected
    if (type != "all") {
        for (t = 0; t < randomByBiome.length; t++) {
            if (randomByBiome[t].type == type) {
                randomByChoice.splice(0, 0, randomByBiome[t]);

            }
        }
    } else if ((type == "all")) {
        for (t = 0; t < randomByBiome.length; t++) {
            randomByChoice.splice(0, 0, randomByBiome[t]);


        }
    }

    randomTable()
}


document.getElementById("312").addEventListener("click", function() {
    alphaSort(this.id)
});
document.getElementById("313").addEventListener("click", function() {
    typeSort(this.id)
});
document.getElementById("submit").addEventListener("click", function() {
    randomCart();
});

// Generate Random Table
function randomTable() {

    DisplaySearch.innerHTML = "";

    for (i = 0; i < randomByChoice.length; i++) {

        let table = document.createElement("table");
        let name = document.createElement("p");
        let type = document.createElement("p");
        let shelfLife = document.createElement("p");
        let number = document.createElement("p");

        // loop for table settings
        if (i % 2 == 0) {
            table.classList.add("odd");
        } else {
            table.classList.add("even");
        }

        name.innerHTML = randomByChoice[i].name;
        table.appendChild(name);
        name.classList.add('title');

        type.innerHTML = randomByChoice[i].type;
        table.appendChild(type);

        shelfLife.innerHTML = randomByChoice[i].shelfLife;
        table.appendChild(shelfLife);


        DisplaySearch.appendChild(table);
    }

}