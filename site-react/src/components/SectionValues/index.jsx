import './style.css'

import imgLogo from '../../assets/img/place-company.png';

export function SectionValues() {
    return (

        <section id="values">
            <h2>Que é a Imobiliária Unimater?</h2>

            <div className="values-container">
                <img src={imgLogo} alt="Foto da firma" />

                <div className="values-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto illo repudiandae nihil, veniam veritatis animi nisi repellat, at aperiam distinctio itaque similique voluptatibus consequuntur atque corporis sed delectus perferendis eligendi!</p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita culpa reiciendis reprehenderit, dolorum minima ab illo. Inventore quo culpa nobis dicta itaque placeat, molestiae natus nemo nesciunt quod nam odio!</p>

                    <div className="value-detail">
                        <div className="value">
                            <span>Alto Padrão</span>
                            <span>Agilidade</span>
                        </div>
                        
                        <div className="value">
                            <span>Confiável</span>
                            <span>Facilidade</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}