import { vegfood, fruitfood, huntfood } from '/script/foodSource.js';

let randomByChoice = [];
let randomByBiome = [];
let randomByType = [];

function randomCart() {
    randomByChoice = [];
    randomByBiome = [];
    randomByType = [];
    let dice = document.getElementById("selectDice").value;
    let INDEX = dice.selectedIndex;
    let sort = document.getElementById("selectSort").checked;
    let biome = document.getElementById("selectBiome").value;
    let type = document.getElementById("selectType").value;

    // Sort biomes by selected
    if (biome != "all") {
        for (let h = 0; h < huntfood.length; h++) {
            if (huntfood[h].biomes[biome] == "y") {
                randomByBiome.splice(0, 0, huntfood[h]);
            }
        }
        for (let f = 0; f < fruitfood.length; f++) {
            if (fruitfood[f].biomes[biome] == "y") {
                randomByBiome.splice(0, 0, fruitfood[f]);
            }
        }

        for (let v = 0; v < vegfood.length; v++) {
            if (vegfood[v].biomes[biome] == "y") {
                randomByBiome.splice(0, 0, vegfood[v]);
            }

        }
    } else if ((biome == "all")) {
        for (let h = 0; h < huntfood.length; h++) {
            randomByBiome.splice(0, 0, huntfood[h]);

        }
        for (let f = 0; f < fruitfood.length; f++) {
            randomByBiome.splice(0, 0, fruitfood[f]);

        }

        for (let v = 0; v < vegfood.length; v++) {
            randomByBiome.splice(0, 0, vegfood[v]);
        }
    }
    // Sort type by selected
    if (type != "all") {
        for (let t = 0; t < randomByBiome.length; t++) {
            if (randomByBiome[t].type == type) {
                randomByType.splice(0, 0, randomByBiome[t]);

            }
        }
    } else if ((type == "all")) {
        for (let t = 0; t < randomByBiome.length; t++) {
            randomByType.splice(0, 0, randomByBiome[t]);


        }
    }
    // Set size based on dice selected
    randomByType.sort((() => Math.random() - 0.5));
    let low = Math.floor((randomByType.length / dice) - 1);
    let high = Math.ceil((randomByType.length / dice) + 1);

    // if table data is less than dice and 
    if (randomByType.length / dice < 1 && dice / randomByType.length > 1) {
        randomByChoice = Array.from({ length: randomByType.length }, (_, idx) => randomByType[idx % randomByType.length]);
    }
    // if table data is more than dice
    else {
        randomByChoice = Array.from({ length: dice }, (_, idx) => randomByType[idx % randomByType.length]);
    }

    randomTable()
}

function randomTable() {
    let count = "";
    let low = "";
    let high = "";
    let dice = document.getElementById("selectDice").value;

    // if table data is less than dice, Set loop counter

    if (randomByType.length / dice < 1 && dice / randomByType.length > 1) {
        count = randomByChoice.length;
        // if table data is more than dice, Set Loop Counter
    } else {
        count = dice;
    }
    foodDisplayRandom.innerHTML = "";

    for (let i = 0; i < count; i++) {

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

        // Number for tables where dice > data

        if (randomByType.length / dice < 1) {
            // Setting number 1
            if (i == 0) {
                low = Math.floor(((randomByType.length / dice) + 1 + i));
            }
            // Setting table number for > 1
            else {
                low = high + 1;
            }
            high = Math.ceil(((randomByType.length / dice) + 1 + i) * (dice / randomByChoice.length) - 1);
            number.innerHTML = low;
            number.innerHTML += " - ";

            if (high <= dice) {
                number.innerHTML += high;

            }
            // Setting last number 
            if (high > dice) {

                number.innerHTML += dice;
            }
            table.appendChild(number);


            // Number for tables where dice < data

        } else {
            number.innerHTML = i + 1;
            table.appendChild(number);
        }
        name.innerHTML = randomByChoice[i].name;
        table.appendChild(name);
        name.classList.add('title');

        type.innerHTML = randomByChoice[i].type;
        table.appendChild(type);

        shelfLife.innerHTML = randomByChoice[i].shelfLife;
        table.appendChild(shelfLife);

        // loop through biomes
        for (let j = 0; j < randomByChoice[i].biomes.length; j++) {
            let biomes = document.createElement("p");

            // Places a check if in biome
            if (randomByChoice[i].biomes[j] == "y") {
                biomes.innerHTML = "<img src=\"../images/greenc.png\" width=\"25px\" height=\"25px\" >";
            }
            // Places an x if not in biome
            else {
                biomes.innerHTML = "<img src=\"../images/redx.png\" width=\"25px\" height=\"25px\" >";
            }
            table.appendChild(biomes);


            foodDisplayRandom.appendChild(table);
        }
    }
}
export { randomCart, randomTable, randomByChoice };