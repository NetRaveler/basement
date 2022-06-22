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
export { vegfood, fruitfood, huntfood };