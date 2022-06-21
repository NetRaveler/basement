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

window.onload = function() {
    document.getElementById("0").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("1").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("2").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("3").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("4").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("5").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("6").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("7").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("8").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("9").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("12").addEventListener("click", function() {
        alphaSort(this.id)
    });
    document.getElementById("100").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("101").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("102").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("103").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("104").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("105").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("106").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("107").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("108").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("109").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("112").addEventListener("click", function() {
        alphaSort(this.id)
    });
    document.getElementById("200").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("201").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("202").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("203").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("204").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("205").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("206").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("207").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("208").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("209").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("212").addEventListener("click", function() {
        alphaSort(this.id)
    });
    // Generate Food table when page is loaded
    foodTable()
}

// Sort food table when Listening even is triggered
function alphaSort() {
    vegfood.sort((a, b) => a.name.localeCompare(b.name));
    fruitfood.sort((a, b) => a.name.localeCompare(b.name));
    huntfood.sort((a, b) => a.name.localeCompare(b.name));
    foodTable();
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
    // Rebuild food table based on sorting 
    foodTable();
}
// Reorder food arry to generate table

function move(arr, oldLocation) {
    let mover = arr.splice(oldLocation, 1);
    arr.splice(0, 0, mover[0]);
    return arr;
}


function foodTable() {

    // loops through food array
    let foodDisplayVeg = document.getElementById("foodDisplayVeg");
    let foodDisplayFruit = document.getElementById("foodDisplayFruit");
    let foodDisplayHunting = document.getElementById("foodDisplayHunting");
    foodDisplayVeg.innerHTML = ""
    foodDisplayFruit.innerHTML = ""
    foodDisplayHunting.innerHTML = ""

    // Build Veg table
    for (i = 0; i < vegfood.length; i++) {

        let table = document.createElement("table");
        let name = document.createElement("p");
        let type = document.createElement("p");
        let shelfLife = document.createElement("p");

        // loop for table settings
        if (i % 2 == 0) {
            table.classList.add("odd");
        } else {
            table.classList.add("even");
        }

        name.innerHTML = vegfood[i].name;
        table.appendChild(name);
        name.classList.add('title');

        shelfLife.innerHTML = vegfood[i].shelfLife;
        table.appendChild(shelfLife);

        // loop through biomes
        for (j = 0; j < vegfood[i].biomes.length; j++) {
            let biomes = document.createElement("p");

            // Places a check if in biome
            if (vegfood[i].biomes[j] == "y") {
                biomes.innerHTML = "<img src=\"../images/greenc.png\" width=\"25px\" height=\"25px\" >";
            }
            // Places an x if not in biome
            else {
                biomes.innerHTML = "<img src=\"../images/redx.png\" width=\"25px\" height=\"25px\" >";
            }
            table.appendChild(biomes);


            foodDisplayVeg.appendChild(table);
        }
    }

    // Build fruit table

    for (f = 0; f < fruitfood.length; f++) {

        let table = document.createElement("table");
        let name = document.createElement("p");
        let type = document.createElement("p");
        let shelfLife = document.createElement("p");

        // loop for table settings
        if (f % 2 == 0) {
            table.classList.add("odd");
        } else {
            table.classList.add("even");
        }

        name.innerHTML = fruitfood[f].name;
        table.appendChild(name);
        name.classList.add('title');

        shelfLife.innerHTML = fruitfood[f].shelfLife;
        table.appendChild(shelfLife);

        // loop through biomes
        for (g = 0; g < fruitfood[f].biomes.length; g++) {
            let biomes = document.createElement("p");

            // Places a check if in biome
            if (fruitfood[f].biomes[g] == "y") {
                biomes.innerHTML = "<img src=\"../images/greenc.png\" width=\"25px\" height=\"25px\" >";
            }
            // Places an x if not in biome
            else {
                biomes.innerHTML = "<img src=\"../images/redx.png\" width=\"25px\" height=\"25px\" >";
            }
            table.appendChild(biomes);
        }

        foodDisplayFruit.appendChild(table);
    }

    // Build Hunting table

    for (h = 0; h < huntfood.length; h++) {

        let table = document.createElement("table");
        let name = document.createElement("p");
        let type = document.createElement("p");
        let shelfLife = document.createElement("p");

        // loop for table settings
        if (h % 2 == 0) {
            table.classList.add("odd");
        } else {
            table.classList.add("even");
        }
        name.innerHTML = huntfood[h].name;
        table.appendChild(name);
        name.classList.add('title');

        shelfLife.innerHTML = huntfood[h].shelfLife;
        table.appendChild(shelfLife);

        // loop through biomes
        // loop through biomes
        for (k = 0; k < huntfood[h].biomes.length; k++) {
            let biomes = document.createElement("p");

            // Places a check if in biome
            if (huntfood[h].biomes[k] == "y") {
                biomes.innerHTML = "<img src=\"../images/greenc.png\" width=\"25px\" height=\"25px\" id=\"yes\">";
            }
            // Places an x if not in biome
            else {
                biomes.innerHTML = "<img src=\"../images/redx.png\" width=\"25px\" height=\"25px\" id=\"no\">";
            }
            table.appendChild(biomes);
        }
        foodDisplayHunting.appendChild(table);
    }
    // Zoom in and out and change image

    document.querySelector('#zoomin').addEventListener('click', () => {
        document.querySelector('#bookright').classList.add('zoomin');
        document.querySelector('#bookleft').classList.add('pushback');
        document.getElementById('zoomout').style.visibility = 'visible';
        document.getElementById('zoomin').style.visibility = 'hidden';

    });
    document.querySelector('#zoomout').addEventListener('click', () => {
        document.querySelector('#bookright').classList.remove('zoomin');
        document.querySelector('#bookleft').classList.remove('pushback');
        document.getElementById('zoomout').style.visibility = 'hidden';
        document.getElementById('zoomin').style.visibility = 'visible';
    });

}