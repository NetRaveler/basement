let vegfood = [];
let fruitfood = [];
let meatfood = [];
let miscfood = [];
let dairyfood = [];
let spicefood = [];


// Food Item Factory Funciton
const VegItem = function(shelfLife, name, type, qty, expire, skill, ...args) {
    this.type = type;
    this.name = name;
    this.shelfLife = shelfLife;
    this.qty = qty;
    this.expire = expire;
    this.skill = skill;
    this.biomes = args;

};
const FruitItem = function(shelfLife, name, type, qty, expire, skill, ...args) {
    this.type = type;
    this.name = name;
    this.shelfLife = shelfLife;
    this.qty = qty;
    this.expire = expire;
    this.skill = skill;
    this.biomes = args;

};

const MeatItem = function(shelfLife, name, type, qty, expire, skill, ...args) {
    this.type = type;
    this.name = name;
    this.shelfLife = shelfLife;
    this.qty = qty;
    this.expire = expire;
    this.skill = skill;
    this.biomes = args;

};

const MiscItem = function(shelfLife, name, type, qty, expire, skill, type1, ...args) {
    this.type = type;
    this.type1 = type1;
    this.name = name;
    this.shelfLife = shelfLife;
    this.qty = qty;
    this.expire = expire;
    this.skill = skill;
    this.biomes = args;
};

const DairyItem = function(shelfLife, name, type, qty, expire, skill, ...args) {
    this.type = type;
    this.name = name;
    this.shelfLife = shelfLife;
    this.qty = qty;
    this.expire = expire;
    this.skill = skill;
    this.biomes = args;
};
const SpiceItem = function(shelfLife, name, type, qty, expire, skill, ...args) {
    this.shelfLife = shelfLife;
    this.type = type;
    this.name = name;
    this.qty = qty;
    this.expire = expire;
    this.skill = skill;
    this.biomes = args;

};


// vegetable list - Shelflife, NAME, TYPE, QTY, EXPIRE, SKILL, BIOMES: Arctic, Coastal, Desert, Forest, Grassland, Hill, Mountain, Swamp, Underdark, Urban
let artichokes = new VegItem(4, "Artichokes", "Vegetable", 0, 4, "Foraging", "n", "n", "n", "n", "y", "n", "n", "n", "n", "y");
addToVeg(artichokes);
let eggplants = new VegItem(4, "Eggplants", "Vegetable", 0, 4, "Foraging", "n", "n", "y", "n", "y", "y", "y", "n", "n", "y");
addToVeg(eggplants);
let asparagus = new VegItem(4, "Asparagus", "Vegetable", 0, 4, "Foraging", "n", "n", "n", "n", "y", "y", "y", "n", "n", "y");
addToVeg(asparagus);
let blackbeans = new VegItem(4, "Black Beans", "Vegetable", 0, 4, "Foraging", "n", "n", "y", "n", "n", "y", "y", "n", "n", "y");
addToVeg(blackbeans);
let greenbeans = new VegItem(4, "Green Beans", "Vegetable", 0, 4, "Foraging", "n", "n", "y", "y", "y", "y", "n", "n", "n", "y");
addToVeg(greenbeans);
let lentils = new VegItem(4, "Lentils", "Vegetable", 0, 4, "Foraging", "n", "n", "n", "y", "y", "y", "y", "n", "n", "y");
addToVeg(lentils);
let peanuts = new VegItem(4, "Peanuts", "Vegetable", 0, 4, "Foraging", "n", "n", "y", "n", "y", "n", "n", "n", "n", "y");
addToVeg(peanuts);
let peas = new VegItem(4, "Peas", "Vegetable", 0, 4, "Foraging", "n", "n", "y", "y", "y", "y", "n", "n", "n", "y");
addToVeg(peas);
let broccoli = new VegItem(4, "Broccoli", "Vegetable", 0, 4, "Foraging", "n", "n", "n", "y", "y", "y", "n", "n", "n", "y");
addToVeg(broccoli);
let cabbage = new VegItem(4, "Cabbage", "Vegetable", 0, 4, "Foraging", "n", "n", "n", "n", "n", "y", "y", "y", "n", "y");
addToVeg(cabbage);
let celery = new VegItem(4, "Celery", "Vegetable", 0, 4, "Foraging", "n", "y", "n", "n", "y", "n", "n", "y", "n", "y");
addToVeg(celery);
let spinach = new VegItem(4, "Spinach", "Vegetable", 0, 4, "Foraging", "y", "n", "n", "n", "y", "y", "y", "n", "n", "y");
addToVeg(spinach);
let lettuce = new VegItem(4, "Lettuce", "Vegetable", 0, 4, "Foraging", "n", "n", "n", "y", "y", "y", "n", "n", "n", "y");
addToVeg(lettuce);
let mushroom = new VegItem(4, "Mushroom", "Vegetable", 0, 4, "Foraging", "n", "n", "n", "y", "n", "n", "n", "y", "y", "y");
addToVeg(mushroom);
let okra = new VegItem(4, "Okra", "Vegetable", 0, 4, "Foraging", "n", "n", "y", "n", "y", "n", "n", "n", "n", "y");
addToVeg(okra);
let garlic = new VegItem(4, "Garlic", "Vegetable", 0, 4, "Foraging", "n", "n", "y", "n", "y", "n", "n", "n", "n", "y");
addToVeg(garlic);
let leeks = new VegItem(4, "Leeks", "Vegetable", 0, 4, "Foraging", "n", "n", "n", "n", "y", "y", "n", "n", "n", "y");
addToVeg(leeks);
let onions = new VegItem(4, "Onions", "Vegetable", 0, 4, "Foraging", "n", "n", "n", "y", "y", "n", "n", "n", "n", "y");
addToVeg(onions);
let bellpeppers = new VegItem(4, "Bell Peppers", "Vegetable", 0, 4, "Foraging", "n", "n", "y", "n", "y", "n", "n", "n", "n", "y");
addToVeg(bellpeppers);
let carrots = new VegItem(4, "Carrots", "Vegetable", 0, 4, "Foraging", "n", "n", "y", "y", "y", "y", "n", "n", "n", "y");
addToVeg(carrots);
let corn = new VegItem(4, "Corn", "Vegetable", 0, 4, "Foraging", "n", "n", "y", "n", "y", "y", "y", "n", "n", "y");
addToVeg(corn);
let rutabage = new VegItem(4, "Rutabage", "Vegetable", 0, 4, "Foraging", "y", "y", "n", "y", "n", "y", "y", "n", "n", "y");
addToVeg(rutabage);
let potatoes = new VegItem(4, "Potatoes", "Vegetable", 0, 4, "Foraging", "n", "n", "y", "y", "y", "y", "n", "n", "n", "y");
addToVeg(potatoes);
let sweetpoatoes = new VegItem(4, "Sweet Poatoes", "Vegetable", 0, 4, "Foraging", "n", "n", "y", "y", "y", "y", "n", "n", "n", "y");
addToVeg(sweetpoatoes);
let turnips = new VegItem(4, "Turnips", "Vegetable", 0, 4, "Foraging", "y", "y", "y", "n", "y", "y", "n", "n", "n", "y");
addToVeg(turnips);
let squashe = new VegItem(4, "Squashe", "Vegetable", 0, 4, "Foraging", "n", "n", "y", "y", "y", "y", "y", "n", "n", "y");
addToVeg(squashe);
let cucumber = new VegItem(4, "Cucumber", "Vegetable", 0, 4, "Foraging", "n", "n", "y", "y", "y", "y", "n", "n", "n", "y");
addToVeg(cucumber);
let tomatoes = new VegItem(4, "Tomatoes", "Vegetable", 0, 4, "Foraging", "n", "n", "n", "y", "y", "y", "n", "n", "n", "y");
addToVeg(tomatoes);

// Fruit List - Shelflife, NAME, TYPE, QTY, EXPIRE, SKILL, BIOMES: Arctic, Coastal, Desert, Forest, Grassland, Hill, Mountain, Swamp, Underdark, Urban
let strawberries = new FruitItem(4, "Strawberries", "Fruit", 0, 4, "Foraging", "n", "y", "n", "y", "y", "y", "y", "n", "n", "y");
addToFruit(strawberries);
let mangos = new FruitItem(4, "Mangos", "Fruit", 0, 4, "Foraging", "n", "y", "n", "n", "n", "n", "n", "y", "n", "y", );
addToFruit(mangos);
let oranges = new FruitItem(4, "Oranges", "Fruit", 0, 4, "Foraging", "n", "y", "n", "n", "n", "n", "n", "n", "n", "y", );
addToFruit(oranges);
let pineapple = new FruitItem(4, "Pineapple", "Fruit", 0, 4, "Foraging", "n", "y", "n", "n", "n", "n", "n", "n", "n", "y", );
addToFruit(pineapple);
let grapes = new FruitItem(4, "Grapes", "Fruit", 0, 4, "Foraging", "n", "y", "n", "n", "n", "n", "n", "n", "n", "y", );
addToFruit(grapes);
let watermelon = new FruitItem(4, "Watermelon", "Fruit", 0, 4, "Foraging", "n", "y", "y", "n", "n", "n", "n", "n", "n", "y", );
addToFruit(watermelon);
let blueberries = new FruitItem(4, "Blueberries", "Fruit", 0, 4, "Foraging", "n", "y", "n", "n", "n", "n", "n", "y", "n", "y", );
addToFruit(blueberries);
let apples = new FruitItem(4, "Apples", "Fruit", 0, 4, "Foraging", "n", "y", "y", "n", "n", "y", "n", "y", "n", "y", );
addToFruit(apples);
let peaches = new FruitItem(4, "Peaches", "Fruit", 0, 4, "Foraging", "n", "y", "y", "n", "n", "y", "n", "n", "n", "y", );
addToFruit(peaches);
let raspberries = new FruitItem(4, "Raspberries", "Fruit", 0, 4, "Foraging", "n", "y", "n", "y", "y", "y", "y", "n", "n", "y", );
addToFruit(raspberries);
let cherries = new FruitItem(4, "Cherries", "Fruit", 0, 4, "Foraging", "n", "y", "n", "y", "n", "n", "n", "n", "n", "y", );
addToFruit(cherries);
let plums = new FruitItem(4, "Plums", "Fruit", 0, 4, "Foraging", "n", "y", "y", "y", "n", "y", "n", "n", "n", "y", );
addToFruit(plums);
let pears = new FruitItem(4, "Pears", "Fruit", 0, 4, "Foraging", "n", "y", "n", "n", "n", "y", "n", "n", "n", "y", );
addToFruit(pears);
let lemons = new FruitItem(4, "Lemons", "Fruit", 0, 4, "Foraging", "n", "y", "n", "n", "n", "n", "n", "n", "n", "y", );
addToFruit(lemons);
let cantaloup = new FruitItem(4, "Cantaloup", "Fruit", 0, 4, "Foraging", "n", "y", "n", "n", "n", "n", "n", "n", "n", "y", );
addToFruit(cantaloup);
let avacados = new FruitItem(4, "Avacados", "Fruit", 0, 4, "Foraging", "n", "y", "n", "n", "n", "n", "n", "n", "n", "y", );
addToFruit(avacados);
let coconut = new FruitItem(4, "Coconut", "Fruit", 0, 4, "Foraging", "n", "y", "n", "n", "n", "n", "n", "n", "n", "y", );
addToFruit(coconut);
let honeydew = new FruitItem(4, "Honeydew", "Fruit", 0, 4, "Foraging", "n", "y", "n", "n", "n", "n", "n", "n", "n", "y", );
addToFruit(honeydew);
let nectarines = new FruitItem(4, "Nectarines", "Fruit", 0, 4, "Foraging", "n", "y", "y", "n", "n", "n", "n", "n", "n", "y", );
addToFruit(nectarines);
let apricots = new FruitItem(4, "Apricots", "Fruit", 0, 4, "Foraging", "n", "y", "y", "n", "n", "n", "n", "n", "n", "y", );
addToFruit(apricots);
let grapefruit = new FruitItem(4, "Grapefruit", "Fruit", 0, 4, "Foraging", "n", "y", "n", "n", "n", "n", "n", "n", "n", "y", );
addToFruit(grapefruit);
let pomegranat = new FruitItem(4, "Pomegranat", "Fruit", 0, 4, "Foraging", "n", "y", "y", "n", "n", "y", "n", "n", "n", "y", );
addToFruit(pomegranat);
let limes = new FruitItem(4, "Limes", "Fruit", 0, 4, "Foraging", "n", "y", "n", "n", "n", "n", "n", "y", "n", "y", );
addToFruit(limes);
let berries = new FruitItem(4, "Berriess", "Fruit", 0, 4, "Foraging", "y", "y", "n", "y", "y", "y", "y", "n", "n", "y", );
addToFruit(berries);
let kiwi = new FruitItem(4, "Kiwi", "Fruit", 0, 4, "Foraging", "n", "y", "n", "n", "n", "n", "n", "n", "n", "y", );
addToFruit(kiwi);
let figs = new FruitItem(4, "Figs", "Fruit", 0, 4, "Foraging", "n", "y", "n", "n", "n", "n", "n", "n", "n", "y", );
addToFruit(figs);
let blackberries = new FruitItem(4, "Black Berries", "Fruit", 0, 4, "Foraging", "n", "y", "n", "y", "y", "y", "y", "n", "n", "y", );
addToFruit(blackberries);




// Meat List - Shelflife, NAME, TYPE, QTY, EXPIRE, SKILL, BIOMES: Arctic, Coastal, Desert, Forest, Grassland, Hill, Mountain, Swamp, Underdark, Urban
let alligator = new MeatItem(4, "Alligator", "Meat", 0, 4, "Hunting", "n", "y", "n", "n", "n", "n", "n", "y", "n", "n");
addToMeat(alligator);
let antelope = new MeatItem(4, "Antelope", "Meat", 0, 4, "Hunting", "n", "n", "y", "n", "y", "n", "n", "n", "n", "n");
addToMeat(antelope);
let bear = new MeatItem(4, "Bear", "Meat", 0, 4, "Hunting", "y", "n", "n", "y", "n", "y", "y", "y", "n", "n");
addToMeat(bear);
let bison = new MeatItem(4, "Bison", "Meat", 0, 4, "Hunting", "n", "n", "n", "n", "y", "y", "n", "n", "n", "n");
addToMeat(bison);
let muskox = new MeatItem(4, "Muskox", "Meat", 0, 4, "Hunting", "y", "n", "n", "n", "n", "n", "n", "n", "n", "n");
addToMeat(muskox);
let caribou = new MeatItem(4, "Caribou", "Meat", 0, 4, "Hunting", "y", "n", "n", "n", "n", "n", "y", "n", "n", "n");
addToMeat(caribou);
let bobcat = new MeatItem(4, "Bobcat", "Meat", 0, 4, "Hunting", "n", "y", "y", "y", "y", "y", "y", "y", "n", "n");
addToMeat(bobcat);
let lynx = new MeatItem(4, "Lynx", "Meat", 0, 4, "Hunting", "y", "n", "n", "y", "n", "n", "y", "n", "n", "n");
addToMeat(lynx);
let jaguar = new MeatItem(4, "Jaguar", "Meat", 0, 4, "Hunting", "n", "y", "n", "y", "n", "y", "y", "y", "n", "n");
addToMeat(jaguar);
let mountainlion = new MeatItem(4, "Mountain Lion", "Meat", 0, 4, "Hunting", "n", "n", "n", "n", "n", "y", "y", "n", "n", "n");
addToMeat(mountainlion);
let deer = new MeatItem(4, "Deer", "Meat", 0, 4, "Hunting", "n", "y", "y", "y", "y", "y", "y", "y", "n", "n");
addToMeat(deer);
let elk = new MeatItem(4, "Elk", "Meat", 0, 4, "Hunting", "n", "n", "n", "n", "n", "n", "y", "y", "n", "n");
addToMeat(elk);
let goat = new MeatItem(4, "Goat", "Meat", 0, 4, "Hunting", "y", "n", "y", "n", "y", "y", "y", "n", "n", "y");
addToMeat(goat);
let moose = new MeatItem(4, "Moose", "Meat", 0, 4, "Hunting", "n", "n", "n", "n", "n", "y", "y", "n", "n", "n");
addToMeat(moose);
let sheep = new MeatItem(4, "Sheep", "Meat", 0, 4, "Hunting", "n", "n", "y", "n", "y", "y", "y", "n", "n", "y");
addToMeat(sheep);
let walrus = new MeatItem(4, "Walrus", "Meat", 0, 4, "Hunting", "y", "y", "n", "n", "n", "n", "n", "n", "n", "n");
addToMeat(walrus);
let seal = new MeatItem(4, "Seal", "Meat", 0, 4, "Hunting", "y", "y", "n", "n", "n", "n", "n", "n", "n", "n");
addToMeat(seal);
let wolf = new MeatItem(4, "Wolf", "Meat", 0, 4, "Hunting", "y", "n", "y", "y", "y", "y", "y", "n", "n", "n");
addToMeat(wolf);
let snake = new MeatItem(4, "Snake", "Meat", 0, 4, "Hunting", "n", "y", "y", "y", "y", "y", "n", "y", "n", "n");
addToMeat(snake);
let fowl = new MeatItem(4, "Fowl", "Meat", 0, 4, "Hunting", "n", "y", "y", "y", "y", "y", "n", "y", "n", "n");
addToMeat(fowl);
let pheasant = new MeatItem(4, "Pheasant", "Meat", 0, 4, "Hunting", "n", "y", "y", "y", "y", "y", "n", "n", "n", "n");
addToMeat(pheasant);
let cow = new MeatItem(4, "Cow", "Meat", 0, 4, "Hunting", "n", "n", "n", "n", "n", "n", "n", "n", "n", "y");
addToMeat(cow);
let chicken = new MeatItem(4, "Chicken", "Meat", 0, 4, "Hunting", "n", "n", "n", "n", "n", "n", "n", "n", "n", "y");
addToMeat(chicken);
let turkey = new MeatItem(4, "Turkey", "Meat", 0, 4, "Hunting", "n", "n", "n", "y", "n", "y", "n", "n", "n", "y");
addToMeat(turkey);
let pig = new MeatItem(4, "Pig", "Meat", 0, 4, "Hunting", "n", "n", "y", "y", "y", "y", "n", "n", "n", "y");
addToMeat(pig);
let turtle = new MeatItem(4, "Turtle", "Meat", 0, 4, "Hunting", "n", "y", "n", "n", "n", "n", "n", "y", "n", "n");
addToMeat(turtle);




// Misc List - Shelflife, NAME, TYPE, QTY, EXPIRE, SKILL, TYPE1, BIOMES: Arctic, Coastal, Desert, Forest, Grassland, Hill, Mountain, Swamp, Underdark, Urban
let nuts = new MiscItem(10, "Nuts", "Misc", 0, 4, "Foraging", "Nuts", "n", "y", "y", "y", "y", "y", "y", "y", "y", "y");
addToMisc(nuts);
let birdeggs = new MiscItem(4, "Bird Eggs", "Misc", 0, 4, "Foraging", "Eggs", "y", "y", "y", "y", "y", "y", "y", "y", "y", "y");
addToMisc(birdeggs);
let snakeeggs = new MiscItem(4, "Snake Eggs", "Misc", 0, 4, "Foraging", "Eggs", "n", "y", "y", "y", "y", "y", "y", "y", "y", "n");
addToMisc(snakeeggs);
let mushrooms = new MiscItem(10, "Mushrooms", "Misc", 0, 4, "Foraging", "Mushrooms", "n", "y", "y", "y", "y", "y", "y", "y", "y", "y");
addToMisc(mushrooms);

// Dairy List - Shelflife, NAME, TYPE, QTY, EXPIRE, SKILL, BIOMES
let butter = new DairyItem(4, "Butter", "Dairy", 0, 4, "Purchasing", "n", "n", "n", "n", "n", "n", "n", "n", "n", "y");
addToDairy(butter);
let casein = new DairyItem(4, "Casein", "Dairy", 0, 4, "Purchasing", "n", "n", "n", "n", "n", "n", "n", "n", "n", "y");
addToDairy(casein);
let cowcheese = new DairyItem(10, "Cow Cheese", "Dairy", 0, 4, "Purchasing", "n", "n", "n", "n", "n", "n", "n", "n", "n", "y");
addToDairy(cowcheese);
let cream = new DairyItem(4, "Cream", "Dairy", 0, 4, "Purchasing", "n", "n", "n", "n", "n", "n", "n", "n", "n", "y");
addToDairy(cream);
let custards = new DairyItem(4, "Custards", "Dairy", 0, 4, "Purchasing", "n", "n", "n", "n", "n", "n", "n", "n", "n", "y");
addToDairy(custards);
let curds = new DairyItem(4, "Curds", "Dairy", 0, 4, "Purchasing", "n", "n", "n", "n", "n", "n", "n", "n", "n", "y");
addToDairy(curds);
let fermentedmilk = new DairyItem(10, "Fermented Milk", "Dairy", 0, 4, "Purchasing", "n", "n", "n", "n", "n", "n", "n", "n", "n", "y");
addToDairy(fermentedmilk);
let goatcheese = new DairyItem(10, "Goat Cheese", "Dairy", 0, 4, "Purchasing", "n", "n", "n", "n", "n", "n", "n", "n", "n", "y");
addToDairy(goatcheese);
let milk = new DairyItem(4, "Milk", "Dairy", 0, 4, "Purchasing", "n", "n", "n", "n", "n", "n", "n", "n", "n", "y");
addToDairy(milk);
let yogurt = new DairyItem(8, "Yogurt", "Dairy", 0, 4, "Purchasing", "n", "n", "n", "n", "n", "n", "n", "n", "n", "y");
addToDairy(yogurt);


// Spices List - SHELFLIFE, NAME, TYPE, QTY, EXPIRE, SKILL, BIOMES
let allspice = new SpiceItem("na", "Allspire", "Spice", 0, 0, "Purchasing", "n", "n", "n", "n", "n", "n", "n", "n", "n", "y");
addToSpice(allspice);
let anise = new SpiceItem("na", "Anise", "Spice", 0, 0, "Purchasing", "n", "n", "n", "n", "n", "n", "n", "n", "n", "y");
addToSpice(anise);
let caraway = new SpiceItem("na", "Caraway", "Spice", 0, 0, "Purchasing", "n", "n", "n", "n", "n", "n", "n", "n", "n", "y");
addToSpice(caraway);
let cardamom = new SpiceItem("na", "Cardamom", "Spice", 0, 0, "Purchasing", "n", "n", "n", "n", "n", "n", "n", "n", "n", "y");
addToSpice(cardamom);
let celeryseed = new SpiceItem("na", "Celery Seed", "Spice", 0, 0, "Purchasing", "n", "n", "n", "n", "n", "n", "n", "n", "n", "y");
addToSpice(celeryseed);
let chiles = new SpiceItem("na", "Chiles", "Spice", 0, 0, "Purchasing", "n", "n", "n", "n", "n", "n", "n", "n", "n", "y");
addToSpice(chiles);
let cinnamon = new SpiceItem("na", "Cinnamon", "Spice", 0, 0, "Purchasing", "n", "n", "n", "n", "n", "n", "n", "n", "n", "y");
addToSpice(cinnamon);
let clover = new SpiceItem("na", "Clover", "Spice", 0, 0, "Purchasing", "n", "n", "n", "n", "n", "n", "n", "n", "n", "y");
addToSpice(clover);
let coriander = new SpiceItem("na", "Coriander", "Spice", 0, 0, "Purchasing", "n", "n", "n", "n", "n", "n", "n", "n", "n", "y");
addToSpice(coriander);
let cumin = new SpiceItem("na", "Cumin", "Spice", 0, 0, "Purchasing", "n", "n", "n", "n", "n", "n", "n", "n", "n", "y");
addToSpice(cumin);
let dillseed = new SpiceItem("na", "Dill Seed", "Spice", 0, 0, "Purchasing", "n", "n", "n", "n", "n", "n", "n", "n", "n", "y");
addToSpice(dillseed);
let driedherbs = new SpiceItem("na", "Dried Herbs", "Spice", 0, 0, "Purchasing", "n", "n", "n", "n", "n", "n", "n", "n", "n", "y");
addToSpice(driedherbs);
let fennel = new SpiceItem("na", "Fennel", "Spice", 0, 0, "Purchasing", "n", "n", "n", "n", "n", "n", "n", "n", "n", "y");
addToSpice(fennel);
let ginger = new SpiceItem("na", "Ginger", "Spice", 0, 0, "Purchasing", "n", "n", "n", "n", "n", "n", "n", "n", "n", "y");
addToSpice(ginger);
let groundpepper = new SpiceItem("na", "Ground Pepper", "Spice", 0, 0, "Purchasing", "n", "n", "n", "n", "n", "n", "n", "n", "n", "y");
addToSpice(groundpepper);
let juniperberries = new SpiceItem("na", "Juniper Berries", "Spice", 0, 0, "Purchasing", "n", "n", "n", "n", "n", "n", "n", "n", "n", "y");
addToSpice(juniperberries);
let mace = new SpiceItem("na", "Mace", "Spice", 0, 0, "Purchasing", "n", "n", "n", "n", "n", "n", "n", "n", "n", "y");
addToSpice(mace);
let mustardseed = new SpiceItem("na", "Mustard Seed", "Spice", 0, 0, "Purchasing", "n", "n", "n", "n", "n", "n", "n", "n", "n", "y");
addToSpice(mustardseed);
let nigella = new SpiceItem("na", "Nigella", "Spice", 0, 0, "Purchasing", "n", "n", "n", "n", "n", "n", "n", "n", "n", "y");
addToSpice(nigella);
let nutmeg = new SpiceItem("na", "Nutmeg", "Spice", 0, 0, "Purchasing", "n", "n", "n", "n", "n", "n", "n", "n", "n", "y");
addToSpice(nutmeg);
let peppercorn = new SpiceItem("na", "Peppercorn", "Spice", 0, 0, "Purchasing", "n", "n", "n", "n", "n", "n", "n", "n", "n", "y");
addToSpice(peppercorn);
let saffrom = new SpiceItem("na", "Saffrom", "Spice", 0, 0, "Purchasing", "n", "n", "n", "n", "n", "n", "n", "n", "n", "y");
addToSpice(saffrom);
let salt = new SpiceItem("na", "Salt", "Spice", 0, 0, "Purchasing", "n", "n", "n", "n", "n", "n", "n", "n", "n", "y");
addToSpice(salt);
let sugar = new SpiceItem("na", "Sugar", "Spice", 0, 0, "Purchasing", "n", "n", "n", "n", "n", "n", "n", "n", "n", "y");
addToSpice(sugar);
let sumac = new SpiceItem("na", "Sumac", "Spice", 0, 0, "Purchasing", "n", "n", "n", "n", "n", "n", "n", "n", "n", "y");
addToSpice(sumac);
let turmeric = new SpiceItem("na", "Turmeric", "Spice", 0, 0, "Purchasing", "n", "n", "n", "n", "n", "n", "n", "n", "n", "y");
addToSpice(turmeric);
let vanilla = new SpiceItem("na", "Vanilla", "Spice", 0, 0, "Purchasing", "n", "n", "n", "n", "n", "n", "n", "n", "n", "y");
addToSpice(vanilla);





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

// adds a MeatItem object to the huntfood array
function addToMeat(product) {
    meatfood.splice(0, 0, product);
    return meatfood;

}

function addToMisc(product) {
    miscfood.splice(0, 0, product);
    return miscfood;

}

function addToDairy(product) {
    dairyfood.splice(0, 0, product);
    return dairyfood;

}

function addToSpice(product) {
    spicefood.splice(0, 0, product);
    return spicefood;

}

export { vegfood, fruitfood, meatfood, miscfood, dairyfood, spicefood };