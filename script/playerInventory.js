import { searchByChoice } from "/script/playerSearch.js";


let playerInventory = [];

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
        let skill = document.createElement("p");
        let shelfLife = document.createElement("p");
        let expire = document.createElement("p");
        let qty = document.createElement("p");
        let min = document.createElement("p");
        let plus = document.createElement("p");

        plus.classList.add("redx");
        min.classList.add("redx");
        name.classList.add("inventoryp")
        type.classList.add("inventoryp")
        skill.classList.add("inventoryp")
        shelfLife.classList.add("inventoryp")
        expire.classList.add("inventoryp")
        qty.classList.add("inventoryp")


        qty.id = ('Qty' + i)

        table.id = ('item' + i);

        shelfLife.id = ('shelfLife' + i);


        let addQty = document.createElement("input");


        name.innerHTML = playerInventory[i].name;
        name.id = playerInventory[i].name;
        table.appendChild(name);


        type.innerHTML = playerInventory[i].type;
        table.appendChild(type);

        skill.innerHTML = playerInventory[i].skill;
        table.appendChild(skill);

        expire.id = "days" + i;



        if (playerInventory[i].shelfLife != 0) {
            expire.innerHTML = parseInt((playerInventory[i].expire * parseInt(playerInventory[i].qty)) / parseInt(playerInventory[i].qty));
            table.appendChild(expire);
            shelfLife.innerHTML = parseInt(playerInventory[i].shelfLife) * parseInt(playerInventory[i].qty) - (parseInt(playerInventory[i].shelfLife) - parseInt(playerInventory[i].expire));
            table.appendChild(shelfLife);

        }

        if (expire.innerHTML == "NaN") {
            expire.innerHTML = 0;
        }

        if (playerInventory[i].shelfLife == "na") {
            expire.innerHTML = "";
            table.appendChild(expire);
            shelfLife.innerHTML = "";
            table.appendChild(shelfLife);
        }



        qty.innerHTML = playerInventory[i].qty;
        table.appendChild(qty);

        plus.id = "plus" + i;
        plus.innerHTML = '<img src="../images/greenplus.png" width="25" height="25"></img>';
        table.appendChild(plus);

        min.id = "min" + i;
        min.innerHTML = '<img src="../images/redmin.png" width="25" height="25"></img>';
        table.appendChild(min);




        DisplayIventory.appendChild(table);
        document.getElementById('min' + i).addEventListener("click", function(r) {
            remove(this.id);
        });
        document.getElementById('plus' + i).addEventListener("click", function(a) {
            add(this.id);
        });


    }

    document.getElementById('longRest').style.visibility = 'visible';
    document.getElementById('inventoryHeader').style.visibility = 'visible';

}

//REMOVE AMOUNT WHEN LONGREST IS CLICKED

function longRest() {
    for (let i = 0; i < playerInventory.length; i++) {
        if (document.getElementById('days' + i).innerHTML > 0) {
            playerInventory[i].expire = playerInventory[i].expire - 1;
            document.getElementById('days' + i).innerHTML = playerInventory[i].expire;
            document.getElementById('shelfLife' + i).innerHTML = parseInt(playerInventory[i].shelfLife) * parseInt(playerInventory[i].qty) - (parseInt(playerInventory[i].shelfLife) - parseInt(playerInventory[i].expire));
        }
        if (playerInventory[i].expire == 0 && playerInventory[i].qty >= 1 && document.getElementById('shelfLife' + i) != 0 && playerInventory[i].shelfLife != "na") {

            playerInventory[i].expire = playerInventory[i].shelfLife;
            document.getElementById('days' + i).innerHTML = playerInventory[i].expire;

            playerInventory[i].qty = playerInventory[i].qty - 1;
            document.getElementById('Qty' + i).innerHTML = playerInventory[i].qty

        }

        if (playerInventory[i].qty == 0) {

            document.getElementById('days' + i).innerHTML = 0;
            document.getElementById('shelfLife' + i).innerHTML = 0;


        }
    }

}
// ADD QTY WHEN + IS CLICKED

function add(a) {
    for (let i = 0; i < playerInventory.length; i++) {
        if (document.getElementById('plus' + i).id == a && document.getElementById('days' + i).innerHTML != 0) {
            playerInventory[i].qty = parseInt(playerInventory[i].qty) + 1;
            document.getElementById('Qty' + i).innerHTML = playerInventory[i].qty;
            document.getElementById('shelfLife' + i).innerHTML = parseInt(playerInventory[i].shelfLife) * parseInt(playerInventory[i].qty) - (parseInt(playerInventory[i].shelfLife) - parseInt(playerInventory[i].expire));
            if (playerInventory[i].type == "Spice") {
                document.getElementById('days' + i).innerHTML = "";
                document.getElementById('shelfLife' + i).innerHTML = "";

            }
        } else if (document.getElementById('plus' + i).id == a && document.getElementById('days' + i).innerHTML == 0) {
            playerInventory[i].qty = parseInt(playerInventory[i].qty) + 1;
            playerInventory[i].expire = playerInventory[i].shelfLife;
            document.getElementById('days' + i).innerHTML = playerInventory[i].expire;
            document.getElementById('Qty' + i).innerHTML = playerInventory[i].qty;
            document.getElementById('shelfLife' + i).innerHTML = parseInt(playerInventory[i].shelfLife) * parseInt(playerInventory[i].qty) - (parseInt(playerInventory[i].shelfLife) - parseInt(playerInventory[i].expire));
            if (playerInventory[i].type == "Spice") {
                document.getElementById('days' + i).innerHTML = "";
                document.getElementById('shelfLife' + i).innerHTML = "";

            }
        }
    }
}


// REMOVE QTY WHEN - IS CLICKED
function remove(r) {
    for (let i = 0; i < playerInventory.length; i++) {
        if (document.getElementById('min' + i).id == r && playerInventory[i].qty > 1) {
            playerInventory[i].qty = parseInt(playerInventory[i].qty) - 1;
            document.getElementById('Qty' + i).innerHTML = playerInventory[i].qty;
            playerInventory[i].expire = playerInventory[i].shelfLife;
            document.getElementById('days' + i).innerHTML = parseInt((playerInventory[i].expire * parseInt(playerInventory[i].qty)) / parseInt(playerInventory[i].qty));
            document.getElementById('shelfLife' + i).innerHTML = parseInt(playerInventory[i].shelfLife) * parseInt(playerInventory[i].qty) - (parseInt(playerInventory[i].shelfLife) - parseInt(playerInventory[i].expire));
            if (playerInventory[i].type == "Spice") {
                document.getElementById('days' + i).innerHTML = "";
                document.getElementById('shelfLife' + i).innerHTML = "";

            }
        } else if (document.getElementById('min' + i).id == r && playerInventory[i].qty <= 1) {
            playerInventory[i].qty = 0;
            playerInventory[i].expire = playerInventory[i].shelfLife;
            playerInventory.splice(i, 1);
            document.getElementById('item' + i).remove();
            for (let h = i; h < playerInventory.length; h++) {
                if (document.getElementById('item' + (h + 1)) != "item" + i)
                    document.getElementById('item' + (h + 1)).id = "item" + h;
                document.getElementById('days' + (h + 1)).id = "days" + h;
                document.getElementById('shelfLife' + (h + 1)).id = "shelfLife" + h;
                document.getElementById('Qty' + (h + 1)).id = "Qty" + h;
                document.getElementById('min' + (h + 1)).id = "min" + h;
            }
        }
    }
}



export { addIventory, longRest }