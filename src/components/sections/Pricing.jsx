import "../../styles/Pricing.css";

function Pricing() {
  return (
    <section className="pricing">
      <h2 id="pricing__title">Planos de Criação</h2>
      <div className="pricing__container">
        <figure className="pricing__container__figure">
          <h3>Iniciante</h3>
          <h3>
            <span className="menor">R$</span>97<span className="menor">/mês</span>
          </h3>
          <p>Site básico + Marketing inicial</p>
          <button className="pricing__btn">Começar</button>
        </figure>
        <figure className="pricing__container__figure">
          <h3>Profissional</h3>
          <h3>
            <span className="menor">R$</span>197<span className="menor">/mês</span>
          </h3>
          <p>Site profissional + Tráfego Pago</p>
          <button className="pricing__btn">Começar</button>
        </figure>
        <figure className="pricing__container__figure">
          <h3>Empresarial</h3>
          <h3>
            <span className="menor">R$</span>497<span className="menor">/mês</span>
          </h3>
          <p>Empresa completa + Consultoria IA</p>
          <button className="pricing__btn">Começar</button>
        </figure>
      </div>
    </section>
  );
}

export default Pricing;
