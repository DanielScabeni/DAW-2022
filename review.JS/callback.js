const inicio = () => {
    console.log('inicio')
}

const fim = () => {
    console.log('fim')
}

const processa = (ini, fim) => {
    ini();

    fim();
}

processa(inicio, fim)
 
processa() => {
    console.log('inicio 2')
}, () => {
    console.log('fim 2')
}