import './style.css';

import imgSobre from '../../assets/img/cafe-2.jpg';

export function Sobre() {
    return (
        <section className="sobre">
            <h2>Uma Mistura de</h2>
            <div className="sobre-container">
                <div className="sobre-item">
                    <img src="./assets/img/cafe-1.jpg" alt="cafe-1" />
                    <h3>amor</h3>
                </div>
                <div className="sobre-item">
                    <img src={imgSobre} alt="cafe-2" />
                    <h3>perfeição</h3>
                </div>
            </div>
            <p>
                O café é uma bebida produzida a partir dos grãos torrados do fruto do cafeeiro. É
                servidotradicionalmente quente, mas também pode ser consumido gelado. Ele é um estimulante, por possuir
                cafeína
                - geralmente 80 a 140 mg para cada 207 ml dependendo do método de preparação.
            </p>
        </section>
    )
}