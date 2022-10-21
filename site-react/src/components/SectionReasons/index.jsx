import './style.css';

export function SectionReasons() {
    return (
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
    )
}