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

// vegetable list - Shelflife, NAME, TYPE, Arctic, Coastal, Desert, Forest, Grassland, Hill, Mountain, Swamp, Underdark, Urban
let artichokes = new FoodItem(100, "Artichokes", "Vegetable", "n","n","n","n","y","n","n","n","n","y");
addToFood(artichokes);
let eggplants = new FoodItem(100, "Eggplants", "Vegetable", "n","n","y","n","y","y","y","n","n","y");
addToFood(eggplants);
let asparagus = new FoodItem(100, "Asparagus", "Vegetable", "n","n","n","n","y","y","y","n","n","y");
addToFood(asparagus);
let blackbeans = new FoodItem(100, "Black Beans", "Vegetable",  "n","n","y","n","n","y","y","n","n","y");
addToFood(blackbeans);
let greenbeans = new FoodItem(100, "Green Beans", "Vegetable",  "n","n","y","y","y","y","n","n","n","y");
addToFood(greenbeans);
let lentils = new FoodItem(100, "Lentils", "Vegetable",  "n","n","n","y","y","y","y","n","n","y");
addToFood(lentils);
let peanuts = new FoodItem(100, "Peanuts", "Vegetable",  "n","n","y","n","y","n","n","n","n","y");
addToFood(peanuts);
let peas = new FoodItem(100, "Peas", "Vegetable",  "n","n","y","y","y","y","n","n","n","y");
addToFood(peas);
let broccoli = new FoodItem(100, "Broccoli", "Vegetable",  "n","n","n","y","y","y","n","n","n","y");
addToFood(broccoli);
let cabbage = new FoodItem(100, "Cabbage", "Vegetable",  "n","n","n","n","n","y","y","y","n","y");
addToFood(cabbage);
let celery = new FoodItem(100, "Celery", "Vegetable",  "n","y","n","n","y","n","n","y","n","y");
addToFood(celery);
let spinach = new FoodItem(100, "Spinach", "Vegetable",  "y","n","n","n","y","y","y","n","n","y");
addToFood(spinach);
let lettuce = new FoodItem(100, "Lettuce", "Vegetable",  "n","n","n","y","y","y","n","n","n","y");
addToFood(lettuce);
let mushroom = new FoodItem(100, "Mushroom", "Vegetable",  "n","n","n","y","n","n","n","y","y","y");
addToFood(mushroom);
let okra = new FoodItem(100, "Okra", "Vegetable",  "n","n","y","n","y","n","n","n","n","y");
addToFood(okra);
let garlic = new FoodItem(100, "Garlic", "Vegetable",  "n","n","y","n","y","n","n","n","n","y");
addToFood(garlic);
let leeks = new FoodItem(100, "Leeks", "Vegetable",  "n","n","n","n","y","y","n","n","n","y");
addToFood(leeks);
let onions = new FoodItem(100, "Onions", "Vegetable",  "n","n","n","y","y","n","n","n","n","y");
addToFood(onions);
let bellpeppers = new FoodItem(100, "Bell Peppers", "Vegetable",  "n","n","y","n","y","n","n","n","n","y");
addToFood(bellpeppers);
let carrots = new FoodItem(100, "Carrots", "Vegetable",  "n","n","y","y","y","y","n","n","n","y");
addToFood(carrots);
let corn = new FoodItem(100, "Corn", "Vegetable",  "n","n","y","n","y","y","y","n","n","y");
addToFood(corn);
let rutabage = new FoodItem(100, "Rutabage", "Vegetable",  "y","y","n","y","n","y","y","n","n","y");
addToFood(rutabage);
let potatoes = new FoodItem(100, "Potatoes", "Vegetable",  "n","n","y","y","y","y","n","n","n","y");
addToFood(potatoes);
let sweetpoatoes = new FoodItem(100, "Sweet Poatoes", "Vegetable",  "n","n","y","y","y","y","n","n","n","y");
addToFood(sweetpoatoes);
let turnips = new FoodItem(100, "Turnips", "Vegetable",  "y","y","y","n","y","y","n","n","n","y");
addToFood(turnips);
let squashe = new FoodItem(100, "Squashe", "Vegetable",  "n","n","y","y","y","y","y","n","n","y");
addToFood(squashe);
let cucumber = new FoodItem(100, "Cucumber", "Vegetable",  "n","n","y","y","y","y","n","n","n","y");
addToFood(cucumber);
let tomatoes = new FoodItem(100, "Tomatoes", "Vegetable",  "n","n","n","y","y","y","n","n","n","y");
addToFood(tomatoes);

// Fruit List - Shelflife, NAME, TYPE, Arctic, Coastal, Desert, Forest, Grassland, Hill, Mountain, Swamp, Underdark, Urban
let strawberries = new FoodItem(100, "Strawberries", "Fruit",  "n","y","n","y","y","y","y","n","n","y");
addToFood(strawberries);
let mangos = new FoodItem(100, "Mangos", "Fruit",  "n","y","n","n","n","n","n","y","n","y",);
addToFood(mangos);


// Hunting List - Shelflife, NAME, TYPE, Arctic, Coastal, Desert, Forest, Grassland, Hill, Mountain, Swamp, Underdark, Urban
let alligator = new FoodItem(100, "Alligator", "Hunting",  "n","y","n","n","n","n","n","y","n","n");
addToFood(alligator);
let antelope = new FoodItem(100, "Antelope", "Hunting", "n","n","y","n","y","n","n","n","n","n");
addToFood(antelope);

// adds a FoodItem object to the food array
function addToFood(product) {
    food.splice(0, 0, product);
    return food;
    
}


function foodTable() {
    
    // loops through food array
    let foodDisplayVeg = document.getElementById("foodDisplayVeg");
    let foodDisplayFruit = document.getElementById("foodDisplayFruit");
    let foodDisplayHunting = document.getElementById("foodDisplayHunting");

    for (i = 0; i < food.length; i++) {
    
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
        
        // loop to check for Vegetables
        if (food[i].type == "Vegetable"){
        name.innerHTML = food[i].name;
        table.appendChild(name);

        shelfLife.innerHTML = food[i].shelfLife;
        table.appendChild(shelfLife);
            
            // loop through biomes
            for (j = 0; j < food[i].biomes.length; j++) {
            let biomes = document.createElement("p");
            
            // Places a check if in biome
            if (food[i].biomes[j] == "y"){
            biomes.innerHTML = "<img src=\"../images/greenc.png\" width=\"25px\" height=\"25px\" >";
            }
            // Places an x if not in biome
            else{
                biomes.innerHTML = "<img src=\"../images/redx.png\" width=\"25px\" height=\"25px\" >";  
            }
            table.appendChild(biomes);
            }
                 
        foodDisplayVeg.appendChild(table);
        }

        // loop to check for Fruit
        if (food[i].type == "Fruit"){
            name.innerHTML = food[i].name;
            table.appendChild(name);
    
            shelfLife.innerHTML = food[i].shelfLife;
            table.appendChild(shelfLife);
    
            // loop through biomes
            for (j = 0; j < food[i].biomes.length; j++) {
                let biomes = document.createElement("p");
                
                // Places a check if in biome
                if (food[i].biomes[j] == "y"){
                biomes.innerHTML = "<img src=\"../images/greenc.png\" width=\"25px\" height=\"25px\" >";
                }
                // Places an x if not in biome
                else{
                    biomes.innerHTML = "<img src=\"../images/redx.png\" width=\"25px\" height=\"25px\" >";  
                }
                table.appendChild(biomes);
                }   

            foodDisplayFruit.appendChild(table);
            }

        // loop to check for Hunting
        if (food[i].type == "Hunting"){
            name.innerHTML = food[i].name;
            table.appendChild(name);
    
            shelfLife.innerHTML = food[i].shelfLife;
            table.appendChild(shelfLife);
    
            // loop through biomes
            // loop through biomes
            for (j = 0; j < food[i].biomes.length; j++) {
                let biomes = document.createElement("p");
                
                // Places a check if in biome
                if (food[i].biomes[j] == "y"){
                biomes.innerHTML = "<img src=\"../images/greenc.png\" width=\"25px\" height=\"25px\" id=\"yes\">";
                }
                // Places an x if not in biome
                else{
                    biomes.innerHTML = "<img src=\"../images/redx.png\" width=\"25px\" height=\"25px\" id=\"no\">";  
                }
                table.appendChild(biomes);
                }
                    

            foodDisplayHunting.appendChild(table);
            }

    }
}
