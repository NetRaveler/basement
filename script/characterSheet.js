function characterSheet() {

    document.getElementById('pro').value = Math.ceil(1 + (parseInt(document.getElementById('level').value) / 4));
    document.getElementById('strBonus').value = Math.floor((parseInt(document.getElementById('str').value) - 10) / 2);
    document.getElementById('dexBonus').value = Math.floor((parseInt(document.getElementById('dex').value) - 10) / 2);
    document.getElementById('conBonus').value = Math.floor((parseInt(document.getElementById('con').value) - 10) / 2);
    document.getElementById('wisBonus').value = Math.floor((parseInt(document.getElementById('wis').value) - 10) / 2);
    document.getElementById('intBonus').value = Math.floor((parseInt(document.getElementById('int').value) - 10) / 2);
    document.getElementById('chaBonus').value = Math.floor((parseInt(document.getElementById('cha').value) - 10) / 2);

    if (document.getElementById('pacro').checked == true) {
        document.getElementById('acro').value = parseInt(document.getElementById('pro').value) + parseInt(document.getElementById('dexBonus').value);
    } else {
        document.getElementById('acro').value = document.getElementById('dexBonus').value;
    }

    if (document.getElementById('panimal').checked == true) {
        document.getElementById('animal').value = parseInt(document.getElementById('pro').value) + parseInt(document.getElementById('wisBonus').value);
    } else {
        document.getElementById('animal').value = document.getElementById('wisBonus').value;
    }

    if (document.getElementById('parcana').checked == true) {
        document.getElementById('arcana').value = parseInt(document.getElementById('pro').value) + parseInt(document.getElementById('intBonus').value);
    } else {
        document.getElementById('arcana').value = document.getElementById('intBonus').value;
    }

    if (document.getElementById('path').checked == true) {
        document.getElementById('ath').value = parseInt(document.getElementById('pro').value) + parseInt(document.getElementById('strBonus').value);
    } else {
        document.getElementById('ath').value = document.getElementById('strBonus').value;
    }

    if (document.getElementById('pdecep').checked == true) {
        document.getElementById('decep').value = parseInt(document.getElementById('pro').value) + parseInt(document.getElementById('chaBonus').value);
    } else {
        document.getElementById('decep').value = document.getElementById('chaBonus').value;
    }

    if (document.getElementById('phistory').checked == true) {
        document.getElementById('history').value = parseInt(document.getElementById('pro').value) + parseInt(document.getElementById('intBonus').value);
    } else {
        document.getElementById('history').value = document.getElementById('intBonus').value;
    }

    if (document.getElementById('pinsight').checked == true) {
        document.getElementById('insight').value = parseInt(document.getElementById('pro').value) + parseInt(document.getElementById('wisBonus').value);
    } else {
        document.getElementById('insight').value = document.getElementById('wisBonus').value;
    }

    if (document.getElementById('pintim').checked == true) {
        document.getElementById('intim').value = parseInt(document.getElementById('pro').value) + parseInt(document.getElementById('chaBonus').value);
    } else {
        document.getElementById('intim').value = document.getElementById('chaBonus').value;
    }

    if (document.getElementById('pinvest').checked == true) {
        document.getElementById('invest').value = parseInt(document.getElementById('pro').value) + parseInt(document.getElementById('intBonus').value);
    } else {
        document.getElementById('invest').value = document.getElementById('intBonus').value;
    }

    if (document.getElementById('pmedic').checked == true) {
        document.getElementById('medic').value = parseInt(document.getElementById('pro').value) + parseInt(document.getElementById('wisBonus').value);
    } else {
        document.getElementById('medic').value = document.getElementById('wisBonus').value;
    }

    if (document.getElementById('pnature').checked == true) {
        document.getElementById('nature').value = parseInt(document.getElementById('pro').value) + parseInt(document.getElementById('intBonus').value);
    } else {
        document.getElementById('nature').value = document.getElementById('intBonus').value;
    }

    if (document.getElementById('ppercep').checked == true) {
        document.getElementById('percep').value = parseInt(document.getElementById('pro').value) + parseInt(document.getElementById('wisBonus').value);
    } else {
        document.getElementById('percep').value = document.getElementById('wisBonus').value;
    }

    if (document.getElementById('ppers').checked == true) {
        document.getElementById('pers').value = parseInt(document.getElementById('pro').value) + parseInt(document.getElementById('chaBonus').value);
    } else {
        document.getElementById('pers').value = document.getElementById('chaBonus').value;
    }

    if (document.getElementById('preligion').checked == true) {
        document.getElementById('religion').value = parseInt(document.getElementById('pro').value) + parseInt(document.getElementById('intBonus').value);
    } else {
        document.getElementById('religion').value = document.getElementById('intBonus').value;
    }

    if (document.getElementById('psoh').checked == true) {
        document.getElementById('soh').value = parseInt(document.getElementById('pro').value) + parseInt(document.getElementById('dexBonus').value);
    } else {
        document.getElementById('soh').value = document.getElementById('dexBonus').value;
    }

    if (document.getElementById('pstealth').checked == true) {
        document.getElementById('stealth').value = parseInt(document.getElementById('pro').value) + parseInt(document.getElementById('dexBonus').value);
    } else {
        document.getElementById('stealth').value = document.getElementById('dexBonus').value;
    }

    if (document.getElementById('psurvival').checked == true) {
        document.getElementById('survival').value = parseInt(document.getElementById('pro').value) + parseInt(document.getElementById('wisBonus').value);
    } else {
        document.getElementById('survival').value = document.getElementById('wisBonus').value;
    }


}

export { characterSheet };