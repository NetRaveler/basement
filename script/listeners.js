function dmListen() {

    document.querySelector('#zoomin').addEventListener('click', () => {
        document.querySelector('#bookright').classList.add('zoomin');
        document.querySelector('#bookleft').classList.add('zoomoutleft');
        document.querySelector('.content').classList.add('zoomincontent');
        document.getElementById('zoomout').style.visibility = 'visible';
        document.getElementById('zoomin').style.visibility = 'hidden';

    });
    document.querySelector('#zoomout').addEventListener('click', () => {
        document.querySelector('#bookright').classList.remove('zoomin');
        document.querySelector('#bookleft').classList.remove('zoomoutleft');
        document.querySelector('.content').classList.remove('zoomincontent');
        document.getElementById('zoomout').style.visibility = 'hidden';
        document.getElementById('zoomin').style.visibility = 'visible';
    });

    document.getElementById("0").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("1").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("2").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("3").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("4").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("5").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("6").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("7").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("8").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("9").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("12").addEventListener("click", function() {
        alphaSort(this.id)
    });
    document.getElementById("100").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("101").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("102").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("103").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("104").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("105").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("106").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("107").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("108").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("109").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("112").addEventListener("click", function() {
        alphaSort(this.id)
    });
    document.getElementById("200").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("201").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("202").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("203").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("204").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("205").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("206").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("207").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("208").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("209").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("212").addEventListener("click", function() {
        alphaSort(this.id)
    });
    document.getElementById("300").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("301").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("302").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("303").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("304").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("305").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("306").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("307").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("308").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("309").addEventListener("click", function() {
        biomeSort(this.id)
    });
    document.getElementById("312").addEventListener("click", function() {
        alphaSort(this.id)
    });
    document.getElementById("313").addEventListener("click", function() {
        typeSort(this.id)
    });
    document.getElementById("submit").addEventListener("click", function() {
        randomCart();
    });
}

function playerListen() {

    document.getElementById("312").addEventListener("click", function() {
        palphaSort(this.id)
    });
    document.getElementById("313").addEventListener("click", function() {
        ptypeSort(this.id)
    });
    document.getElementById("submit").addEventListener("click", function() {
        searchCart();
    });
    document.getElementById('search').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchCart();
        }
    });
    document.getElementById('longRest').addEventListener("click", function() {
        longRest();
    });
}

export { dmListen, playerListen };
import { searchCart } from '/script/playerSearch.js';
import { randomCart } from '/script/randomTable.js';
import { alphaSort, typeSort, biomeSort, palphaSort, ptypeSort } from '/script/sort.js';
import { longRest } from "/script/playerInventory.js";