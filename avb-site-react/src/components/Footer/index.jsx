import './style.css';

import imgFinal from '../../assets/img/brafe.png';

export function Footer() {
    return (
        <div className="footer">
            <section className="assine">
                <div className="container">
                    <div className="info">
                        <h2>Assine Nossa Newsletter</h2>
                        <p>promoções e eventos mensais</p>
                    </div>
                    <form action="intro">
                        <label>E-mail</label>
                        <input type="text" name="email" placeholder="Digite seu email" />
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </section>

            <div className="container finall">
                <p>Este é um projeto teste</p>
                <p>Desenvolvido por Daniel Scabeni para a matéria de Desenvolvimento Web do Curso Sistemas de Informações UNIMATER</p>
                <img src={imgFinal} alt="Brafé" />
            </div>
        </div>
    )
}