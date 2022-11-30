import './style.css';

import imgBotafogo from '../../assets/img/botafogo.jpg';
import imgIguatemi from '../../assets/img/iguatemi.jpg';
import imgMineirao from '../../assets/img/mineirao.jpg';

export function Locais() {
    return (
        <section className="locais">
            <div className="locais-itens">
                <img src={imgBotafogo} alt="Brafé unidade botafogo" />
                <div>
                    <h2>Botafogo</h2>
                    <p>
                        As condições climáticas não eram as melhores nessa primeira escolha
                        e, entre 1800 e 1850, tentou-se o cultivo noutras regiões:o João
                        Alberto Castelo Branco trouxe mudas do Pará
                    </p>
                    <a href="#">Ver Mapa</a>
                </div>
            </div>
            <div className="locais-itens">
                <img src={imgIguatemi} alt="Brafé unidade botafogo" />
                <div>
                    <h2>Iguatemi</h2>
                    <p>
                        As condições climáticas não eram as melhores nessa primeira escolha e, entre 1800 e 1850,
                        tentou-se o cultivo noutras regiões:o João Alberto Castelo Branco trouxe mudas do Pará
                    </p>
                    <a href="#">Ver Mapa</a>
                </div>
            </div>
            <div className="locais-itens">
                <img src={imgMineirao} alt="Brafé unidade botafogo" />
                <div>
                    <h2>Mineirão</h2>
                    <p>
                        As condições climáticas não eram as melhores nessa primeira escolha e, entre 1800 e 1850,
                        tentou-se o cultivo noutras regiões:o João Alberto Castelo Branco trouxe mudas do Pará
                    </p>
                    <a href="#">Ver Mapa</a>
                </div>
            </div>
        </section>
    )
}