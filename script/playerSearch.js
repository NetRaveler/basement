import { vegfood, fruitfood, huntfood } from '/script/foodSource.js';
import { addIventory } from "/script/playerInventory.js"

let searchByChoice = [];
let searchByBiome = [];
let searchByType = [];


function searchCart() {
    let search = document.getElementById("search").value.toLowerCase();

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
                searchByType.splice(0, 0, searchByBiome[t]);

            }
        }
    } else if ((type == "all")) {
        for (let t = 0; t < searchByBiome.length; t++) {
            searchByType.splice(0, 0, searchByBiome[t]);


        }
    }

    // Take input from user, compare with available options
    // searchByType[];
    if (search != "") {
        for (let i = 0; i < searchByType.length; i++) {
            if (searchByType[i].name.toLowerCase().includes(search)) {
                searchByChoice.splice(0, 0, searchByType[i]);
            }

        }
    } else if (search == "") {
        for (let t = 0; t < searchByType.length; t++) {
            searchByChoice.splice(0, 0, searchByType[t]);
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
        let qty = document.createElement("select");
        let addQty = document.createElement("input")

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

        qty.id = searchByChoice[i].name;
        qty.options.length = 10;
        qty.options[0].innerHTML = "1";
        qty.options[0].value = "1";

        qty.options[1].innerHTML = "2";
        qty.options[1].value = "2";

        qty.options[2].innerHTML = "3";
        qty.options[2].value = "3";

        qty.options[3].innerHTML = "4";
        qty.options[3].value = "4";

        qty.options[4].innerHTML = "5";
        qty.options[4].value = "5";

        qty.options[5].innerHTML = "6";

        qty.options[6].innerHTML = "7";
        qty.options[6].value = "7";

        qty.options[7].innerHTML = "8";
        qty.options[7].value = "8";

        qty.options[8].innerHTML = "9";
        qty.options[8].value = "9";

        qty.options[9].innerHTML = "10";
        qty.options[9].value = "10";

        table.appendChild(qty);


        addQty.type = "button";

        addQty.value = " Add Item ";
        table.appendChild(addQty);
        addQty.id = searchByChoice[i].name + "add";

        DisplaySearch.appendChild(table);

        document.getElementById(searchByChoice[i].name + "add").addEventListener("click", function(a) {
            addIventory(qty);
        });
    }

}

export { searchCart, searchTable, searchByChoice }