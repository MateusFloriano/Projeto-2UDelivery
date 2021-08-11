function RG(evento, objeto) {
    var keypress = (window.event) ? event.keyCode : evento.which;
    campo = eval(objeto);
    if (campo.value == '00.000.000-0') {
        campo.value = "";
    }

    caracteres = '0123456789XxrR';
    separacao1 = '.';
    separacao2 = '-';
    conjunto1 = 2;
    conjunto2 = 6;
    conjunto3 = 10;
    if ((caracteres.search(String.fromCharCode(keypress)) != -1) && campo.value.length < (12)) {
        if (campo.value.length == conjunto1)
            campo.value = campo.value + separacao1;

        else if (campo.value.length == conjunto2)
            campo.value = campo.value + separacao1;

        else if (campo.value.length == conjunto3)
            campo.value = campo.value + separacao2;
        

        
    } else {
        event.returnValue = false;
    }
}

function CPF(evento, objeto) {
    var keypress = (window.event) ? event.keyCode : evento.which;
    campo = eval(objeto);
    if (campo.value == '000.000.000-00') {
        campo.value = "";
    }

    caracteres = '0123456789XxrR';
    separacao1 = '.';
    separacao2 = '-';
    conjunto1 = 3;
    conjunto2 = 7;
    conjunto3 = 11;
    conjunto4 = 11;
    if ((caracteres.search(String.fromCharCode(keypress)) != -1) && campo.value.length < (14)) {
        if (campo.value.length == conjunto1)
            campo.value = campo.value + separacao1;

        else if (campo.value.length == conjunto2)
            campo.value = campo.value + separacao1;

        else if (campo.value.length == conjunto3)
            campo.value = campo.value + separacao2;
        

        
    } else {
        event.returnValue = false;
    }
}

function CNPJ(evento, objeto) {
    var keypress = (window.event) ? event.keyCode : evento.which;
    campo = eval(objeto);
    if (campo.value == '000.000.000/0000-00') {
        campo.value = "";
    }

    caracteres = '0123456789';
    separacao1 = '.';
    separacao2 = '/';
    separacao3 = '-';
    conjunto1 = 3;
    conjunto2 = 7;
    conjunto3 = 11;
    conjunto4 = 16;
    conjunto5 = 17;
    if ((caracteres.search(String.fromCharCode(keypress)) != -1) && campo.value.length < (19)) {
        if (campo.value.length == conjunto1)
            campo.value = campo.value + separacao1;

        else if (campo.value.length == conjunto2)
            campo.value = campo.value + separacao1;

        else if (campo.value.length == conjunto3)
            campo.value = campo.value + separacao2;

        else if (campo.value.length == conjunto4)
            campo.value = campo.value + separacao3;
        

        
    } else {
        event.returnValue = false;
    }
}

function Cel(evento, objeto) {
    var keypress = (window.event) ? event.keyCode : evento.which;
    campo = eval(objeto);
    if (campo.value == '(00)00000-0000') {
        campo.value = "";
    }

    caracteres = '0123456789';
    separacao1 = '(';
    separacao2 = ')';
    separacao3 = '-';
    conjunto1 = 0;
    conjunto2 = 3;
    conjunto3 = 9;
    if ((caracteres.search(String.fromCharCode(keypress)) != -1) && campo.value.length < (14)) {
        if (campo.value.length == conjunto1)
            campo.value = campo.value + separacao1;

        else if (campo.value.length == conjunto2)
            campo.value = campo.value + separacao2;

        else if (campo.value.length == conjunto3)
            campo.value = campo.value + separacao3;
    } else {
        event.returnValue = false;
    }
}

function tel(evento, objeto) {
    var keypress = (window.event) ? event.keyCode : evento.which;
    campo = eval(objeto);
    if (campo.value == '(00)0000-0000') {
        campo.value = "";
    }

    caracteres = '0123456789';
    separacao1 = '(';
    separacao2 = ')';
    separacao3 = '-';
    conjunto1 = 0;
    conjunto2 = 3;
    conjunto3 = 8;
    if ((caracteres.search(String.fromCharCode(keypress)) != -1) && campo.value.length < (13)) {
        if (campo.value.length == conjunto1)
            campo.value = campo.value + separacao1;

        else if (campo.value.length == conjunto2)
            campo.value = campo.value + separacao2;

        else if (campo.value.length == conjunto3)
            campo.value = campo.value + separacao3;
    } else {
        event.returnValue = false;
    }
}