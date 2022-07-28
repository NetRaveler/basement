import { vegfood, fruitfood, meatfood, dairyfood, spicefood } from '/script/foodSource.js';


function foodTable() {

    // loops through food array
    let foodDisplayVeg = document.getElementById("foodDisplayVeg");
    let foodDisplayFruit = document.getElementById("foodDisplayFruit");
    let foodDisplayMeat = document.getElementById("foodDisplayMeat");
    let foodDisplayDairy = document.getElementById("foodDisplayDairy");
    let foodDisplaySpice = document.getElementById("foodDisplaySpices");
    foodDisplayVeg.innerHTML = ""
    foodDisplayFruit.innerHTML = ""
    foodDisplayMeat.innerHTML = ""
    foodDisplayDairy.innerHTML = ""
    foodDisplaySpices.innerHTML = ""

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

    // Build Meat table

    for (let h = 0; h < meatfood.length; h++) {

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
        name.innerHTML = meatfood[h].name;
        table.appendChild(name);
        name.classList.add('title');

        shelfLife.innerHTML = meatfood[h].shelfLife;
        table.appendChild(shelfLife);

        // loop through biomes
        // loop through biomes
        for (let k = 0; k < meatfood[h].biomes.length; k++) {
            let biomes = document.createElement("p");

            // Places a check if in biome
            if (meatfood[h].biomes[k] == "y") {
                biomes.innerHTML = "<img src=\"../images/greenc.png\" width=\"25px\" height=\"25px\" id=\"yes\">";
            }
            // Places an x if not in biome
            else {
                biomes.innerHTML = "<img src=\"../images/redx.png\" width=\"25px\" height=\"25px\" id=\"no\">";
            }
            table.appendChild(biomes);
        }
        foodDisplayMeat.appendChild(table);
    }

    // Build Dairy table

    for (let h = 0; h < dairyfood.length; h++) {

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
        name.innerHTML = dairyfood[h].name;
        table.appendChild(name);
        name.classList.add('title');

        shelfLife.innerHTML = dairyfood[h].shelfLife;
        table.appendChild(shelfLife);

        // loop through biomes
        // loop through biomes
        for (let k = 0; k < dairyfood[h].biomes.length; k++) {
            let biomes = document.createElement("p");

            // Places a check if in biome
            if (dairyfood[h].biomes[k] == "y") {
                biomes.innerHTML = "<img src=\"../images/greenc.png\" width=\"25px\" height=\"25px\" id=\"yes\">";
            }
            // Places an x if not in biome
            else {
                biomes.innerHTML = "<img src=\"../images/redx.png\" width=\"25px\" height=\"25px\" id=\"no\">";
            }
            table.appendChild(biomes);
        }
        foodDisplayDairy.appendChild(table);
    }

    // Build Spice table

    for (let h = 0; h < spicefood.length; h++) {

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
        name.innerHTML = spicefood[h].name;
        table.appendChild(name);
        name.classList.add('title');

        shelfLife.innerHTML = "";
        table.appendChild(shelfLife);

        // loop through biomes
        // loop through biomes
        for (let k = 0; k < spicefood[h].biomes.length; k++) {
            let biomes = document.createElement("p");

            // Places a check if in biome
            if (spicefood[h].biomes[k] == "y") {
                biomes.innerHTML = "<img src=\"../images/greenc.png\" width=\"25px\" height=\"25px\" id=\"yes\">";
            }
            // Places an x if not in biome
            else {
                biomes.innerHTML = "<img src=\"../images/redx.png\" width=\"25px\" height=\"25px\" id=\"no\">";
            }
            table.appendChild(biomes);
        }
        foodDisplaySpice.appendChild(table);
    }
}


export { foodTable };