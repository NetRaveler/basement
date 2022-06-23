import { vegfood, fruitfood, huntfood } from '/script/foodSource.js';


function foodTable() {

    // loops through food array
    let foodDisplayVeg = document.getElementById("foodDisplayVeg");
    let foodDisplayFruit = document.getElementById("foodDisplayFruit");
    let foodDisplayHunting = document.getElementById("foodDisplayHunting");
    foodDisplayVeg.innerHTML = ""
    foodDisplayFruit.innerHTML = ""
    foodDisplayHunting.innerHTML = ""

    // Build Veg table
    for (let i = 0; i < vegfood.length; i++) {

        let table = document.createElement("table");
        let name = document.createElement("p");
        let shelfLife = document.createElement("p");

        // loop for table settings
        if (i % 2 == 0) {
            table.classList.add("odd");
        } else {
            table.classList.add("even");
        }

        name.innerHTML = vegfood[i].name;
        table.appendChild(name);
        name.classList.add('title');

        shelfLife.innerHTML = vegfood[i].shelfLife;
        table.appendChild(shelfLife);

        // loop through biomes
        for (let j = 0; j < vegfood[i].biomes.length; j++) {
            let biomes = document.createElement("p");

            // Places a check if in biome
            if (vegfood[i].biomes[j] == "y") {
                biomes.innerHTML = "<img src=\"../images/greenc.png\" width=\"25px\" height=\"25px\" >";
            }
            // Places an x if not in biome
            else {
                biomes.innerHTML = "<img src=\"../images/redx.png\" width=\"25px\" height=\"25px\" >";
            }
            table.appendChild(biomes);


            foodDisplayVeg.appendChild(table);
        }
    }

    // Build fruit table

    for (let f = 0; f < fruitfood.length; f++) {

        let table = document.createElement("table");
        let name = document.createElement("p");
        let type = document.createElement("p");
        let shelfLife = document.createElement("p");

        // loop for table settings
        if (f % 2 == 0) {
            table.classList.add("odd");
        } else {
            table.classList.add("even");
        }

        name.innerHTML = fruitfood[f].name;
        table.appendChild(name);
        name.classList.add('title');

        shelfLife.innerHTML = fruitfood[f].shelfLife;
        table.appendChild(shelfLife);

        // loop through biomes
        for (let g = 0; g < fruitfood[f].biomes.length; g++) {
            let biomes = document.createElement("p");

            // Places a check if in biome
            if (fruitfood[f].biomes[g] == "y") {
                biomes.innerHTML = "<img src=\"../images/greenc.png\" width=\"25px\" height=\"25px\" >";
            }
            // Places an x if not in biome
            else {
                biomes.innerHTML = "<img src=\"../images/redx.png\" width=\"25px\" height=\"25px\" >";
            }
            table.appendChild(biomes);
        }

        foodDisplayFruit.appendChild(table);
    }

    // Build Hunting table

    for (let h = 0; h < huntfood.length; h++) {

        let table = document.createElement("table");
        let name = document.createElement("p");
        let type = document.createElement("p");
        let shelfLife = document.createElement("p");

        // loop for table settings
        if (h % 2 == 0) {
            table.classList.add("odd");
        } else {
            table.classList.add("even");
        }
        name.innerHTML = huntfood[h].name;
        table.appendChild(name);
        name.classList.add('title');

        shelfLife.innerHTML = huntfood[h].shelfLife;
        table.appendChild(shelfLife);

        // loop through biomes
        // loop through biomes
        for (let k = 0; k < huntfood[h].biomes.length; k++) {
            let biomes = document.createElement("p");

            // Places a check if in biome
            if (huntfood[h].biomes[k] == "y") {
                biomes.innerHTML = "<img src=\"../images/greenc.png\" width=\"25px\" height=\"25px\" id=\"yes\">";
            }
            // Places an x if not in biome
            else {
                biomes.innerHTML = "<img src=\"../images/redx.png\" width=\"25px\" height=\"25px\" id=\"no\">";
            }
            table.appendChild(biomes);
        }
        foodDisplayHunting.appendChild(table);
    }
}


export { foodTable };