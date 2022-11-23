import { IntlProvider, FormattedNumber } from 'react-intl';
import { useImovel } from '../../hook/useImovel';

import './style.css';


export function SectionCards() {

    const { imoveis } = useImovel();

    return (
        <section id="cards">
            <h2>Imóveis disponíveis</h2>

            {imoveis.length > 0 ? (
            <div className="cards-content">

                    {imoveis.map((item, index) => (
                        <div key={index} className="card">
                            <img src={item.foto} alt="Casa 1" />
                    <div className="card-content">
                                <h4>{item.titulo}</h4>
                                <p>{item.descricao}</p>

                        <div className="card-price">
                                    <p>
                                        <IntlProvider locale="pt-BR">
                                            <FormattedNumber value={item.preco}
                                                style="currency"
                                                currency="BRL" />
                                        </IntlProvider>
                                    </p>
                        </div>
                    </div>
                </div>
                    ))}

                        </div>
            ) : (
                <h3 className="not-found">Nenhum imóvel foi encontrado!</h3>
            ) }


        </section>
    )
}