resultado = document.getElementById("resultado");

deKM = document.forms[0].KmPara.value;
deHM = document.forms[0].HmPara.value;
deDaM = document.forms[0].DamPara.value;
deM = document.forms[0].MPara.value;
deDM = document.forms[0].DmPara.value;
deCM = document.forms[0].CmPara.value;
deMM = document.forms[0].MmPara.value;

paraKM = document.forms[0].Km.value;
paraHM = document.forms[0].Hm.value;
paraDaM = document.forms[0].Dam.value;
paraM = document.forms[0].Metros.value;
paraDM = document.forms[0].Dm.value;
paraCM = document.forms[0].Cm.value;
paraMM = document.forms[0].Mm.value;

function converter() {
    var num = parseFloat(document.forms[0].valor.value);

    if (deKM) {
        resultado.innerHTML = (num + " Km é igual a ");
        km(num);
    } else if (deHM) {

    } else if (deDaM) {

    } else if (deM) {

    } else if (deDM) {

    } else if (deCM) {

    } else if (deMM) {

    }
}

function km(num) {
    if (paraKM) {
        resultado.innerHTML = (num + "Km.");
    } else if (paraHM) {
        resultado.innerHTML = (num / 10 + "Hm.");
    } else if (paraDaM) {

    } else if (paraM) {

    } else if (paraDM) {

    } else if (paraCM) {

    } else if (paraMM) {

    }
}

function hm(num) {
    if (paraKM) {
        resultado.innerHTML = (num + "Km.");
    }
    if (paraHM) {

    }
    if (paraDaM) {

    }
    if (paraM) {

    }
    if (paraDM) {

    }
    if (paraCM) {

    }
    if (paraMM) {

    }
}

function dam(num) {
    if (paraKM) {
        resultado.innerHTML = (num + "Km.");
    }
    if (paraHM) {

    }
    if (paraDaM) {

    }
    if (paraM) {

    }
    if (paraDM) {

    }
    if (paraCM) {

    }
    if (paraMM) {

    }
}

function m(num) {
    if (paraKM) {
        resultado.innerHTML = (num + "Km.");
    }
    if (paraHM) {

    }
    if (paraDaM) {

    }
    if (paraM) {

    }
    if (paraDM) {

    }
    if (paraCM) {

    }
    if (paraMM) {

    }
}

function dm(num) {
    if (paraKM) {
        resultado.innerHTML = (num + "Km.");
    }
    if (paraHM) {

    }
    if (paraDaM) {

    }
    if (paraM) {

    }
    if (paraDM) {

    }
    if (paraCM) {

    }
    if (paraMM) {

    }
}

function cm(num) {
    if (paraKM) {
        resultado.innerHTML = (num + "Km.");
    }
    if (paraHM) {

    }
    if (paraDaM) {

    }
    if (paraM) {

    }
    if (paraDM) {

    }
    if (paraCM) {

    }
    if (paraMM) {

    }
}

function mm(num) {
    if (paraKM) {
        resultado.innerHTML = (num + "Km.");
    }
    if (paraHM) {

    }
    if (paraDaM) {

    }
    if (paraM) {

    }
    if (paraDM) {

    }
    if (paraCM) {

    }
    if (paraMM) {

    }
}