import './style.css';

export function HomePage() {
    return (
        <div id="home-page">

            <div className="container">

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

                <section id="cards">
                    <h2>Imóveis disponiveis</h2>

                    <div className="cards-content">

                        <div className="card">
                            <img src="./assets/img/thumb1.png" alt="Casa 1" />
                            <div className="card-content">
                                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                                <p>Delectus voluptatibus consequuntur ipsum amet. Iusto sit culpa ipsam debitis, placeat quo
                                    maxime suntea sequi vel dignissimos? Quisquam soluta voluptates non.</p>
                                <div className="card-price">
                                    <p>R$ 900.000,00</p>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <img src="./assets/img/thumb2.png" alt="Casa 2" />
                            <div className="card-content">
                                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                                <p>Delectus voluptatibus consequuntur ipsum amet. Iusto sit culpa ipsam debitis, placeat quo
                                    maxime suntea sequi vel dignissimos? Quisquam soluta voluptates non.</p>
                                <div className="card-price">
                                    <p>R$ 900.000,00</p>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <img src="./assets/img/thumb3.png" alt="Casa 3" />
                            <div className="card-content">
                                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                                <p>Delectus voluptatibus consequuntur ipsum amet. Iusto sit culpa ipsam debitis, placeat quo
                                    maxime suntea sequi vel dignissimos? Quisquam soluta voluptates non.</p>
                                <div className="card-price">
                                    <p>R$ 900.000,00</p>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <img src="./assets/img/thumb4.png" alt="Casa 4" />
                            <div className="card-content">
                                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                                <p>Delectus voluptatibus consequuntur ipsum amet. Iusto sit culpa ipsam debitis, placeat quo
                                    maxime suntea sequi vel dignissimos? Quisquam soluta voluptates non.</p>
                                <div className="card-price">
                                    <p>R$ 900.000,00</p>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <img src="./assets/img/thumb5.png" alt="Casa 5" />
                            <div className="card-content">
                                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                                <p>Delectus voluptatibus consequuntur ipsum amet. Iusto sit culpa ipsam debitis, placeat quo
                                    maxime suntea sequi vel dignissimos? Quisquam soluta voluptates non.</p>
                                <div className="card-price">
                                    <p>R$ 900.000,00</p>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <img src="./assets/img/thumb6.png" alt="Casa 6" />
                            <div className="card-content">
                                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                                <p>Delectus voluptatibus consequuntur ipsum amet. Iusto sit culpa ipsam debitis, placeat quo
                                    suntea sequi vel dignissimos? Quisquam soluta voluptates non.</p>
                                <div className="card-price">
                                    <p>R$ 900.000,00</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section id="reasons">
                    <h2>Por que nos Escolher?</h2>

                    <div className="reasons-content">

                        <div className="reason">
                            <p className="reason-value">+1000</p>
                            <p className="reason-label">Imóveis</p>
                        </div>

                        <div className="reason">
                            <p className="reason-value">+500</p>
                            <p className="reason-label">Clientes Felizes</p>
                        </div>

                        <div className="reason">
                            <p className="reason-value">+50</p>
                            <p className="reason-label">Premiações</p>
                        </div>

                        <div className="reason">
                            <p className="reason-value">+100</p>
                            <p className="reason-label">Especialistas</p>
                        </div>

                    </div>
                </section>

                <section id="specialists">
                    <h2>Converse com um Especialista</h2>
                    <div className="specialists-content">

                        <div className="specialist">
                            <h5>Tutu Williams</h5>
                            <p>Londom</p>
                            <p className="specialist-detail">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
                                amet, earum dignissimos sapiente ipsa dolorem harum commodi tenetur! Laboriosam voluptate
                                doloribus quod culpa sequi iste commodi. Saepe mollitia suscipit dolor.</p>
                        </div>

                        <div className="specialist">
                            <h5>Mark Zion</h5>
                            <p>New York City</p>
                            <p className="specialist-detail">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
                                amet, earum dignissimos sapiente ipsa dolorem harum commodi tenetur! Laboriosam voluptate
                                doloribus quod culpa sequi iste commodi. Saepe mollitia suscipit dolor.</p>
                        </div>

                        <div className="specialist">
                            <h5>Essien Crest</h5>
                            <p>Berlin</p>
                            <p className="specialist-detail">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
                                amet, earum dignissimos sapiente ipsa dolorem harum commodi tenetur! Laboriosam voluptate
                                doloribus quod culpa sequi iste commodi. Saepe mollitia suscipit dolor.</p>
                        </div>

                    </div>
                </section>

                <section id="values">
                    <h2>Quem é a imobiliaria Unimate</h2>

                    <div className="values-container">
                        <img src="./assets/img/place-company.png" alt="Foto da firma" />

                        <div className="values-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto illo repudiandae nihil,
                                veniam veritatis animi nisi repellat, at aperiam distinctio itaque similique voluptatibus
                                consequuntur atque corporis sed delectus perferendis eligendi!</p>

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita culpa reiciendis
                                reprehenderit, dolorum minima ab illo. Inventore quo culpa nobis dicta itaque placeat,
                                molestiae natus nemo nesciunt quod nam odio!</p>

                            <div className="values-detail">
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
            </div>

        </div>
    )
}