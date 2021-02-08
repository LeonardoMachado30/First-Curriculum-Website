
var div = document.getElementById('h4-custom');
var texto = "Flávio Leonardo Machado de Padúa";

function escrever(str, el) {
    var char = str.split('').reverse();
    var typer = setInterval(function () {
        if (!char.length) return clearInterval(typer);
        var next = char.pop();
        el.innerHTML += next;
    }, 100);
}

escrever(texto, div);