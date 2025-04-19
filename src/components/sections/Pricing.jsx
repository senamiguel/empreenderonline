import "../../styles/Pricing.css";

function Pricing() {
  return (
    <section className="pricing">
      <h2 id="pricing__title">Planos e preços</h2>
      <div className="pricing__container">
        <figure className="pricing__container__figure">
          <h3>Grátis</h3>
          <h3>
            <span className="menor">R$</span>0<span className="menor">/mês</span>
          </h3>
          <button className="pricing__btn">Começar</button>
        </figure>
        <figure className="pricing__container__figure">
          <h3>Pro</h3>
          <h3>
            <span className="menor">R$</span>50<span className="menor">/mês</span>
          </h3>
          <button className="pricing__btn">Começar</button>
        </figure>
        <figure className="pricing__container__figure">
          <h3>Ultra</h3>
          <h3>
            <span className="menor">R$</span>99<span className="menor">/mês</span>
          </h3>
          <button className="pricing__btn">Começar</button>
        </figure>
      </div>
    </section>
  );
}

export default Pricing;
