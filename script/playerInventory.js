import { searchByChoice } from "/script/playerSearch.js";


let playerInventory = [];
let daysLeft = [];
let daysLeftId = [];

function addIventory(q) {
    let DisplayIventory = document.getElementById("DisplayIventory");
    DisplayIventory.innerHTML = ""


    /* BUILD INVETORY BASED ON QTY */

    for (let i = 0; i < searchByChoice.length; i++) {
        if (q.id == searchByChoice[i].name) {
            playerInventory.splice(0, 0, searchByChoice[i]);
            playerInventory[0].qty = parseInt(q.value) + parseInt(playerInventory[0].qty);

        }

    }

    /*REMOVES DUPLICATE ENTRY */

    for (let j = 1; j < playerInventory.length; j++) {
        if (playerInventory[0].name == playerInventory[j].name) {
            playerInventory.splice(j, 1);

        }

    }


    /* GENERATES INVETORY TABLE */

    for (let i = 0; i < playerInventory.length; i++) {

        let table = document.createElement("table");
        let name = document.createElement("p");
        let type = document.createElement("p");
        let shelfLife = document.createElement("p");
        let expire = document.createElement("p");
        let qty = document.createElement("p");

        qty.id = ('Qty' + i)
        qty.classList.add('Qty' + i);



        let addQty = document.createElement("input");


        name.innerHTML = playerInventory[i].name;
        name.id = playerInventory[i].name;
        table.appendChild(name);


        type.innerHTML = playerInventory[i].type;
        table.appendChild(type);

        expire.id = "days" + i;
        expire.innerHTML = parseInt(playerInventory[i].expire);
        table.appendChild(expire);


        shelfLife.innerHTML = parseInt(playerInventory[i].shelfLife) * parseInt(playerInventory[i].qty);
        table.appendChild(shelfLife);

        qty.innerHTML = "Qty:" + playerInventory[i].qty;
        table.appendChild(qty);



        DisplayIventory.appendChild(table);

    }

    document.getElementById('longRest').style.visibility = 'visible';

}


function longRest() {

    for (let i = 0; i < playerInventory.length; i++) {
        if (playerInventory[i].expire > 0) {
            playerInventory[i].expire = playerInventory[i].expire - 1;
            document.getElementById('days' + i).innerHTML = playerInventory[i].expire;

        }
        if (playerInventory[i].expire == 0 && playerInventory[i].qty >= 1) {
            playerInventory[i].expire = playerInventory[i].shelfLife;
            document.getElementById('days' + i).innerHTML = playerInventory[i].expire;

            playerInventory[i].qty = playerInventory[i].qty - 1;
            document.getElementById('Qty' + i).innerHTML = 'Qty:' +
                playerInventory[i].qty

        }
        if (playerInventory[i].qty == 0) {
            playerInventory.splice(i, 1);
        }
    }
    DisplayIventory.appendChild(table);
}



export { addIventory, longRest }