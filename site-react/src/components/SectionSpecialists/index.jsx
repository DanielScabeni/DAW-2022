import './style.css';

const especialistas = [
    {
        nome: 'Tutu Williams',
        cidade: 'London',
        descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error, labore odio facilis quasi quaerat debitis qui fugit pariatur neque voluptatibus consequatur similique hic saepe perspiciatis tempore, delectus beatae eligendi!'
    },
    {
        nome: 'Mark Zion',
        cidade: 'New York City',
        descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error, labore odio facilis quasi quaerat debitis qui fugit pariatur neque voluptatibus consequatur similique hic saepe perspiciatis tempore, delectus beatae eligendi!'
    },
    {
        nome: 'Essien Crest',
        cidade: 'Berlin',
        descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error, labore odio facilis quasi quaerat debitis qui fugit pariatur neque voluptatibus consequatur similique hic saepe perspiciatis tempore, delectus beatae eligendi!'
    }
];

export function SectionSpecialists() {
    return (
        <section id="specialists">
            <h2>Converse com um Especialista</h2>
            <div className="specialists-content">

                { especialistas.map((item,index) => (
                    <div key={index} className="specialist">
                        <h5>{ item.nome }</h5>
                        <p>{ item.cidade }</p>
                        <p className="specialist-detail">{ item.descricao }</p>
                </div>
                ))}

            </div>
        </section>
    )
}