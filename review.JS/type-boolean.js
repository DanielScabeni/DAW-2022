const valor1 = true;
const valor2 = false;

//Thrusty / Falsy -> Variaveis vazias ou com valor 0, se sumetem 
//a um teste logico, virao um tipo de booleano (thrusty/falsy)

const var1 = 0;
console.log(` 0 é ${var1 == true}`)

const var2 = ' ';

if (var2) {
    console.log('é verdadeiro')
} else {
    console.log('é falso')
}