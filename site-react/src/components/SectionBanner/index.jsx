import './style.css';

export function SectionBanner() {
    return (
        <section id="banner">
            <div className="banner-content">
                <h1>Lugar exato para voce realizar os seus sonhos</h1>
                <h3>Nós oferecemos um serviço completo de venda, compra e locação.</h3>
            </div>
            <div className="banner-filter">
                <div className="filter-fields">

                    <form>
                        <select>
                            <option value="venda">Venda</option>
                            <option value="locacao">Locação</option>
                        </select>

                        <select>
                            <option>Tipo Imovel</option>
                            <option value="apartamento">Apartamento</option>
                            <option value="casa">Casa</option>
                            <option value="sobrado">Sobrado</option>
                            <option value="terreno">Terreno</option>
                        </select>

                        <select>
                            <option>Cidade</option>
                            <option value="coronel">Coronel Vivida</option>
                            <option value="beltrao">Francisco Beltrão</option>
                            <option value="pato">Pato Branco</option>
                            <option value="saudade">Saudade do Iguaçu</option>
                        </select>

                        <select>
                            <option>Bairro</option>
                            <option value="brasilia">Brasilia</option>
                            <option value="centro">Centro</option>
                            <option value="Lasalle">La Salle</option>
                            <option value="pinheiros">Pinheiros</option>
                        </select>
                    </form>

                </div>
                <div className="filet result">
                    <p className="result-value">16</p>
                    <p className="result-label">Imoveis</p>
                    <button>Filtrar</button>
                </div>
            </div>
        </section>
    )
}