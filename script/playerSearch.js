import { vegfood, fruitfood, meatfood, miscfood, dairyfood, spicefood } from '/script/foodSource.js';
import { addIventory } from "/script/playerInventory.js"

let searchByChoice = [];
let searchByBiome = [];
let searchByType = [];
let searchBySkill = [];


function searchCart() {
    let search = document.getElementById("search").value.toLowerCase();

    searchByChoice = [];
    searchByBiome = [];
    searchByType = [];
    searchBySkill = [];
    let sort = document.getElementById("selectSort").checked;
    let biome = document.getElementById("selectBiome").value;
    let type = document.getElementById("selectType").value;
    let skill = document.getElementById("selectSkill").value;


    // Sort biomes by selected
    if (biome != "all") {
        for (let h = 0; h < meatfood.length; h++) {
            if (meatfood[h].biomes[biome] == "y") {
                searchByBiome.splice(0, 0, meatfood[h]);
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
        for (let m = 0; m < miscfood.length; m++) {
            if (miscfood[m].biomes[biome] == "y") {
                searchByBiome.splice(0, 0, miscfood[m]);
            }

        }
        for (let d = 0; d < dairyfood.length; d++) {
            if (dairyfood[d].biomes[biome] == "y") {
                searchByBiome.splice(0, 0, dairyfood[d]);
            }

        }
        for (let s = 0; s < spicefood.length; s++) {
            if (spicefood[s].biomes[biome] == "y") {
                searchByBiome.splice(0, 0, spicefood[s]);
            }

        }
    } else if ((biome == "all")) {
        for (let h = 0; h < meatfood.length; h++) {
            searchByBiome.splice(0, 0, meatfood[h]);

        }
        for (let f = 0; f < fruitfood.length; f++) {
            searchByBiome.splice(0, 0, fruitfood[f]);

        }

        for (let v = 0; v < vegfood.length; v++) {
            searchByBiome.splice(0, 0, vegfood[v]);
        }
        for (let m = 0; m < miscfood.length; m++) {
            searchByBiome.splice(0, 0, miscfood[m]);
        }
        for (let d = 0; d < dairyfood.length; d++) {
            searchByBiome.splice(0, 0, dairyfood[d]);
        }
        for (let s = 0; s < spicefood.length; s++) {
            searchByBiome.splice(0, 0, spicefood[s]);
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

    // Sort skill by selected
    if (skill != "all") {
        for (let s = 0; s < searchByType.length; s++) {
            if (searchByType[s].skill == skill) {
                searchBySkill.splice(0, 0, searchByType[s]);

            }
        }
    } else if ((skill == "all")) {
        for (let s = 0; s < searchByType.length; s++) {
            searchBySkill.splice(0, 0, searchByType[s]);


        }
    }

    // Take input from user, compare with available options
    // searchByType[];
    if (search != "") {
        for (let i = 0; i < searchBySkill.length; i++) {
            if (searchBySkill[i].name.toLowerCase().includes(search)) {
                searchByChoice.splice(0, 0, searchBySkill[i]);
            }

        }
    } else if (search == "") {
        for (let t = 0; t < searchBySkill.length; t++) {
            searchByChoice.splice(0, 0, searchBySkill[t]);
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
        let skill = document.createElement("p");
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

        skill.innerHTML = searchByChoice[i].skill;
        table.appendChild(skill);

        if (searchByChoice[i].shelfLife != 0) {
            shelfLife.innerHTML = searchByChoice[i].shelfLife;
            table.appendChild(shelfLife);
        }
        if (searchByChoice[i].shelfLife == "na") {
            shelfLife.innerHTML = "";
            table.appendChild(shelfLife);
        }

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

        document.getElementById(searchByChoice[i].name + "add").addEventListener("click", function(q, s) {
            addIventory(qty);
        });
    }

}

export { searchCart, searchTable, searchByChoice }