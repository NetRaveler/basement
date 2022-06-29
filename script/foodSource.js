let vegfood = [];
let fruitfood = [];
let huntfood = [];


// Food Item Factory Funciton
const VegItem = function(shelfLife, name, type, qty, ...args) {
    this.type = type;
    this.name = name;
    this.shelfLife = shelfLife;
    this.qty = qty;
    this.biomes = args;

};
const FruitItem = function(shelfLife, name, type, qty, ...args) {
    this.type = type;
    this.name = name;
    this.shelfLife = shelfLife;
    this.qty = qty;
    this.biomes = args;

};

const HuntItem = function(shelfLife, name, type, qty, ...args) {
    this.type = type;
    this.name = name;
    this.shelfLife = shelfLife;
    this.qty = qty;
    this.biomes = args;

};

// vegetable list - Shelflife, NAME, TYPE, Arctic, Coastal, Desert, Forest, Grassland, Hill, Mountain, Swamp, Underdark, Urban
let artichokes = new VegItem(4, "Artichokes", "Vegetable", 0, "n", "n", "n", "n", "y", "n", "n", "n", "n", "y");
addToVeg(artichokes);
let eggplants = new VegItem(4, "Eggplants", "Vegetable", 0, "n", "n", "y", "n", "y", "y", "y", "n", "n", "y");
addToVeg(eggplants);
let asparagus = new VegItem(4, "Asparagus", "Vegetable", 0, "n", "n", "n", "n", "y", "y", "y", "n", "n", "y");
addToVeg(asparagus);
let blackbeans = new VegItem(4, "Black Beans", "Vegetable", 0, "n", "n", "y", "n", "n", "y", "y", "n", "n", "y");
addToVeg(blackbeans);
let greenbeans = new VegItem(4, "Green Beans", "Vegetable", 0, "n", "n", "y", "y", "y", "y", "n", "n", "n", "y");
addToVeg(greenbeans);
let lentils = new VegItem(4, "Lentils", "Vegetable", 0, "n", "n", "n", "y", "y", "y", "y", "n", "n", "y");
addToVeg(lentils);
let peanuts = new VegItem(4, "Peanuts", "Vegetable", 0, "n", "n", "y", "n", "y", "n", "n", "n", "n", "y");
addToVeg(peanuts);
let peas = new VegItem(4, "Peas", "Vegetable", 0, "n", "n", "y", "y", "y", "y", "n", "n", "n", "y");
addToVeg(peas);
let broccoli = new VegItem(4, "Broccoli", "Vegetable", 0, "n", "n", "n", "y", "y", "y", "n", "n", "n", "y");
addToVeg(broccoli);
let cabbage = new VegItem(4, "Cabbage", "Vegetable", 0, "n", "n", "n", "n", "n", "y", "y", "y", "n", "y");
addToVeg(cabbage);
let celery = new VegItem(4, "Celery", "Vegetable", 0, "n", "y", "n", "n", "y", "n", "n", "y", "n", "y");
addToVeg(celery);
let spinach = new VegItem(4, "Spinach", "Vegetable", 0, "y", "n", "n", "n", "y", "y", "y", "n", "n", "y");
addToVeg(spinach);
let lettuce = new VegItem(4, "Lettuce", "Vegetable", 0, "n", "n", "n", "y", "y", "y", "n", "n", "n", "y");
addToVeg(lettuce);
let mushroom = new VegItem(4, "Mushroom", "Vegetable", 0, "n", "n", "n", "y", "n", "n", "n", "y", "y", "y");
addToVeg(mushroom);
let okra = new VegItem(4, "Okra", "Vegetable", 0, "n", "n", "y", "n", "y", "n", "n", "n", "n", "y");
addToVeg(okra);
let garlic = new VegItem(4, "Garlic", "Vegetable", 0, "n", "n", "y", "n", "y", "n", "n", "n", "n", "y");
addToVeg(garlic);
let leeks = new VegItem(4, "Leeks", "Vegetable", 0, "n", "n", "n", "n", "y", "y", "n", "n", "n", "y");
addToVeg(leeks);
let onions = new VegItem(4, "Onions", "Vegetable", 0, "n", "n", "n", "y", "y", "n", "n", "n", "n", "y");
addToVeg(onions);
let bellpeppers = new VegItem(4, "Bell Peppers", "Vegetable", 0, "n", "n", "y", "n", "y", "n", "n", "n", "n", "y");
addToVeg(bellpeppers);
let carrots = new VegItem(4, "Carrots", "Vegetable", 0, "n", "n", "y", "y", "y", "y", "n", "n", "n", "y");
addToVeg(carrots);
let corn = new VegItem(4, "Corn", "Vegetable", 0, "n", "n", "y", "n", "y", "y", "y", "n", "n", "y");
addToVeg(corn);
let rutabage = new VegItem(4, "Rutabage", "Vegetable", 0, "y", "y", "n", "y", "n", "y", "y", "n", "n", "y");
addToVeg(rutabage);
let potatoes = new VegItem(4, "Potatoes", "Vegetable", 0, "n", "n", "y", "y", "y", "y", "n", "n", "n", "y");
addToVeg(potatoes);
let sweetpoatoes = new VegItem(4, "Sweet Poatoes", "Vegetable", 0, "n", "n", "y", "y", "y", "y", "n", "n", "n", "y");
addToVeg(sweetpoatoes);
let turnips = new VegItem(4, "Turnips", "Vegetable", 0, "y", "y", "y", "n", "y", "y", "n", "n", "n", "y");
addToVeg(turnips);
let squashe = new VegItem(4, "Squashe", "Vegetable", 0, "n", "n", "y", "y", "y", "y", "y", "n", "n", "y");
addToVeg(squashe);
let cucumber = new VegItem(4, "Cucumber", "Vegetable", 0, "n", "n", "y", "y", "y", "y", "n", "n", "n", "y");
addToVeg(cucumber);
let tomatoes = new VegItem(4, "Tomatoes", "Vegetable", 0, "n", "n", "n", "y", "y", "y", "n", "n", "n", "y");
addToVeg(tomatoes);

// Fruit List - Shelflife, NAME, TYPE, Arctic, Coastal, Desert, Forest, Grassland, Hill, Mountain, Swamp, Underdark, Urban
let strawberries = new FruitItem(4, "Strawberries", "Fruit", 0, "n", "y", "n", "y", "y", "y", "y", "n", "n", "y");
addToFruit(strawberries);
let mangos = new FruitItem(4, "Mangos", "Fruit", 0, "n", "y", "n", "n", "n", "n", "n", "y", "n", "y", );
addToFruit(mangos);


// Hunting List - Shelflife, NAME, TYPE, Arctic, Coastal, Desert, Forest, Grassland, Hill, Mountain, Swamp, Underdark, Urban
let alligator = new HuntItem(4, "Alligator", "Hunting", 0, "n", "y", "n", "n", "n", "n", "n", "y", "n", "n");
addToHunt(alligator);
let antelope = new HuntItem(4, "Antelope", "Hunting", 0, "n", "n", "y", "n", "y", "n", "n", "n", "n", "n");
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