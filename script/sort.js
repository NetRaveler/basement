// Sort food table when Listening even is triggered
import { foodTable } from '/script/foodTable.js';
import { searchTable, searchByChoice } from '/script/playerSearch.js';
import { randomTable, randomByChoice } from '/script/randomTable.js';
import { vegfood, fruitfood, meatfood, dairyfood, spicefood } from '/script/foodSource.js';

// Sort for DM page
function alphaSort() {
    vegfood.sort((a, b) => a.name.localeCompare(b.name));
    fruitfood.sort((a, b) => a.name.localeCompare(b.name));
    meatfood.sort((a, b) => a.name.localeCompare(b.name));
    dairyfood.sort((a, b) => a.name.localeCompare(b.name));
    spicefood.sort((a, b) => a.name.localeCompare(b.name));
    if (document.getElementById("selectSort").checked == true) {
        randomByChoice.sort((a, b) => a.name.localeCompare(b.name));
    }
    foodTable();
    randomTable();
}

function typeSort() {

    if (document.getElementById("selectSort").checked == true) {
        randomByChoice.sort((a, b) => a.type.localeCompare(b.type));
    }
    randomTable();
}

function skillSort() {

    if (document.getElementById("selectSort").checked == true) {
        randomByChoice.sort((a, b) => a.skill.localeCompare(b.skill));
    }
    randomTable();
}

// Sort biomes for ALL tables

function biomeSort(clicked_id) {
    for (let i = 0; i < vegfood.length; i++) {
        if (vegfood[i].biomes[clicked_id] == "y") {

            move(vegfood, i);
        }

    }
    for (let f = 0; f < fruitfood.length; f++) {
        if (fruitfood[f].biomes[clicked_id - 100] == "y") {
            move(fruitfood, f);
        }
    }
    for (let h = 0; h < meatfood.length; h++) {
        if (meatfood[h].biomes[clicked_id - 200] == "y") {

            move(meatfood, h);
        }
    }
    for (let h = 0; h < dairyfood.length; h++) {
        if (dairyfood[h].biomes[clicked_id - 400] == "y") {

            move(dairyfood, h);
        }
    }
    for (let h = 0; h < spicefood.length; h++) {
        if (spicefood[h].biomes[clicked_id - 500] == "y") {

            move(spicefood, h);
        }
    }

    if (document.getElementById("selectSort").checked == true) {

        for (let r = 0; r < randomByChoice.length; r++) {
            if (randomByChoice[r].biomes[clicked_id - 300] == "y") {

                move(randomByChoice, r);
            }
        }

        randomTable();
    }
    // Rebuild food table based on sorting 
    foodTable();
}
// Reorder food arry to generate table

function move(arr, oldLocation) {
    var mover = arr.splice(oldLocation, 1);
    arr.splice(0, 0, mover[0]);
    return arr, mover;

}

//Sort for Player page


function palphaSort() {

    if (document.getElementById("selectSort").checked == true) {
        searchByChoice.sort((a, b) => a.name.localeCompare(b.name));
    }
    searchTable();

}

function ptypeSort() {

    if (document.getElementById("selectSort").checked == true) {
        searchByChoice.sort((a, b) => a.type.localeCompare(b.type));
    }
    searchTable();
}

function pskillSort() {

    if (document.getElementById("selectSort").checked == true) {
        searchByChoice.sort((a, b) => a.skill.localeCompare(b.skill));
    }
    searchTable();
}

export { alphaSort, typeSort, biomeSort, palphaSort, ptypeSort, skillSort, pskillSort };