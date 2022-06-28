import { searchByChoice } from "/script/playerSearch.js";


let playerInventory = [];
let tempIventory = [];

function addIventory(a) {
    playerInventory = [];



    for (let i = 0; i < searchByChoice.length; i++) {
        if (a.id == searchByChoice[i].name) {
            tempIventory.splice(0, 0, searchByChoice[i]);
        }

    }


    for (let i = 0; i < tempIventory.length; i++) {

        let table = document.createElement("table");
        let name = document.createElement("p");
        let type = document.createElement("p");
        let shelfLife = document.createElement("p");
        let number = document.createElement("p");
        let qty = document.createElement("p");
        qty.classList.add('Qty' + i);
        let addQty = document.createElement("input");



        name.innerHTML = tempIventory[i].name;
        table.appendChild(name);
        name.classList.add('title');

        type.innerHTML = tempIventory[i].type;
        table.appendChild(type);

        shelfLife.innerHTML = tempIventory[i].shelfLife;
        table.appendChild(shelfLife);

        qty.innerHTML = "Qty:" + a.value;
        table.appendChild(qty);

        DisplayIventory.appendChild(table);
    }



    alert(tempIventory.length);
}




export { addIventory }