function inicio() {
    const mensagem = 'Estou iniciando...';
    console.log(mensagem);
}

function processa() {
    const mensagem = 'Estou processando...';
    return mensagem;
}

const run = processa();

run();