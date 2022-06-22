// object Vegetable
// biome
// shelf life / rotten
// weight

playerListen()

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



// Generate Random Table
function randomTable() {

    DisplaySearch.innerHTML = "";

    for (let i = 0; i < randomByChoice.length; i++) {

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
import { playerListen } from '/script/listeners.js';
import { foodTable } from '/script/foodTable.js';