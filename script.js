const btn = document.querySelector('#btnCalculo');
const formulario = document.querySelector('#formulario');
const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const pResultado = document.querySelector('#resultado');

// Escuchar eventos de formulario
formulario.addEventListener('submit', sumarValores);

function sumarValores(event) {
    var sumaInputs = Number(input1.value) + Number(input2.value);
    
    event.preventDefault();
    pResultado.innerText =  "El resultado de sumarlos es: " + sumaInputs;
}

/* ESCUCHAR EVENTOS DE BOTON:
btn.addEventListener('click', btnOnClic);

function btnOnClic() {
    var sumaInputs = Number(input1.value) + Number(input2.value);
    
    pResultado.innerText =  "El resultado de sumarlos es: " + sumaInputs;
}
*/

/*
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML = 'Patito <br> Feo';
h1.innerText = 'Patito <br> Feo';

console.log(h1.getAttribute('class'));
h1.setAttribute('class', 'rojo');

h1.classList.add('rojo ');
h1.classList.remove('verde');
h1.classList.toggle('verde');
console.log(h1.classList.contains('verde'));

input.value = 456;

const img = document.createElement('img');
img.setAttribute('src', 'C:/Users/nelso/OneDrive/Pictures/FotoPerfil-Nelson.jpg');
pid.append(img);
*/

