import './style.css';

import imgLogo from '../../assets/img/brafe.png';

export function Header() {
    return (
        <header>
            <div className="container">
            <a href="#" className="menu-logo"><img src={imgLogo} alt="brafe" /></a>
            <nav className="menu-nav">
                <ul>
                    <li><a href="www.apple.com">Sobre</a></li>
                    <li><a href="www.netflix.com">Produtos</a></li>
                    <li><a href="www.disney.com">Portfólio</a></li>
                    <li><a href="www.amazon.com">Contato</a></li>
                </ul>
            </nav>
            </div>
        </header>
    )
}