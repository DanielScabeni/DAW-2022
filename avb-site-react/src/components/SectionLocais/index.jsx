import './style.css';

const locais = [
    {
        foto: './assets/img/botafogo.jpg',
        nome: 'Botafogo',
        descricao: 'As condições climáticas não eram as melhores nessa primeira escolha e, entre 1800 e 1850, tentou-se o cultivo noutras regiões:o João Alberto Castelo Branco trouxe mudas do Pará'
    },
    {
        foto: './assets/img/Iguatemi.jpg',
        nome: 'Iguatemi',
        descricao: 'As condições climáticas não eram as melhores nessa primeira escolha e, entre 1800 e 1850, tentou-se o cultivo noutras regiões:o João Alberto Castelo Branco trouxe mudas do Pará'
    },
    {
        foto: './assets/img/Mineirao.jpg',
        nome: 'Mineirão',
        descricao: 'As condições climáticas não eram as melhores nessa primeira escolha e, entre 1800 e 1850, tentou-se o cultivo noutras regiões:o João Alberto Castelo Branco trouxe mudas do Pará'
    }
];

export function SectionLocais() {
    return (
        <section className="locais">
            {locais.map((item, index) => (
                <div key={index} className="locais-itens">
                    <img src={item.foto} alt="Brafé unidade botafogo" />
                    <div>
                        <h2>{item.nome}</h2>
                        <p>
                            {item.descricao}
                        </p>
                        <a href="#">Ver Mapa</a>
                    </div>
                </div>
            ))}
        </section>
    )
}
