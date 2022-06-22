import { vegfood, fruitfood, huntfood } from '/script/foodSource.js';

let searchByChoice = [];
let searchByBiome = [];
let searchByType = [];

function searchCart() {
    searchByChoice = [];
    searchByBiome = [];
    searchByType = [];
    let sort = document.getElementById("selectSort").checked;
    let biome = document.getElementById("selectBiome").value;
    let type = document.getElementById("selectType").value;

    // Sort biomes by selected
    if (biome != "all") {
        for (let h = 0; h < huntfood.length; h++) {
            if (huntfood[h].biomes[biome] == "y") {
                searchByBiome.splice(0, 0, huntfood[h]);
            }
        }
        for (let f = 0; f < fruitfood.length; f++) {
            if (fruitfood[f].biomes[biome] == "y") {
                searchByBiome.splice(0, 0, fruitfood[f]);
            }
        }

        for (let v = 0; v < vegfood.length; v++) {
            if (vegfood[v].biomes[biome] == "y") {
                searchByBiome.splice(0, 0, vegfood[v]);
            }

        }
    } else if ((biome == "all")) {
        for (let h = 0; h < huntfood.length; h++) {
            searchByBiome.splice(0, 0, huntfood[h]);

        }
        for (let f = 0; f < fruitfood.length; f++) {
            searchByBiome.splice(0, 0, fruitfood[f]);

        }

        for (let v = 0; v < vegfood.length; v++) {
            searchByBiome.splice(0, 0, vegfood[v]);
        }
    }
    // Sort type by selected
    if (type != "all") {
        for (let t = 0; t < searchByBiome.length; t++) {
            if (searchByBiome[t].type == type) {
                searchByChoice.splice(0, 0, searchByBiome[t]);

            }
        }
    } else if ((type == "all")) {
        for (let t = 0; t < searchByBiome.length; t++) {
            searchByChoice.splice(0, 0, searchByBiome[t]);


        }
    }

    searchTable()
}

// Generate search Table
function searchTable() {

    DisplaySearch.innerHTML = "";

    for (let i = 0; i < searchByChoice.length; i++) {

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

        name.innerHTML = searchByChoice[i].name;
        table.appendChild(name);
        name.classList.add('title');

        type.innerHTML = searchByChoice[i].type;
        table.appendChild(type);

        shelfLife.innerHTML = searchByChoice[i].shelfLife;
        table.appendChild(shelfLife);


        DisplaySearch.appendChild(table);
    }
}

export { searchCart, searchTable, searchByChoice }