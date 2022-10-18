import './style.css';

export function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-company">
                        <p className="footer-logo">Imobiliária UNIMATER</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima totam rerum laborum commodi
                            labore accusantium obcaecati dicta assumenda? Vero vel, mollitia impedit consequuntur cumque
                            dolorum temporibus doloremque nesciunt asperiores perspiciatis.</p>

                    </div>

                    <div className="footer-menu">
                        <p className="footer-menu-title">Nossa Empresa</p>
                        <ul>
                            <li><a href="#">Sobre nós</a></li>
                            <li><a href="#">Especialistas</a></li>
                            <li><a href="#">Missão e Visão</a></li>
                            <li><a href="#">Nossos Valores</a></li>
                        </ul>
                    </div>

                    <div className="footer-menu">
                        <p className="footer-menu-title"></p>
                        <ul>
                            <li>+55 (46) 9 99911-2222</li>
                            <li>Rua Mato Grosso, 200</li>
                            <li>Pato Branco - PR</li>
                        </ul>
                    </div>

                    <div className="footer-menu">
                        <p className="footer-menu-title">Contato</p>
                        <ul>
                            <li><a href="#">Empresa XPTO</a></li>
                            <li><a href="#">Empresa do Zeca</a></li>
                            <li><a href="#">Empresa do Chico</a></li>
                            <li><a href="#">Empresa do Tonhão</a></li>
                        </ul>
                    </div>

                </div>

                <div className="footer-social">
                    <span className="facebook"></span>
                    <span className="twitter"></span>
                    <span className="instagram"></span>
                    <span className="linkedin"></span>
                </div>

                <p className="footer-copyright">
                    &#169; 2022 - Todos os direitos reservadoss
                </p>
            </div>
        </footer>
    )
}