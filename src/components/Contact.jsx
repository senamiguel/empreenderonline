import '../styles/Card.css'

function Contact() {
  return (
    <section className="card__items__container">
      <form className="card__items__form">
        <header className="card__items__form__header">
          <h3 className="card__items__form__title">Entre em Contato</h3>
        </header>
        <div className="card__items__form__content">
          <input 
            className="card__items__form__input" 
            type="text" 
            placeholder="Seu nome completo" 
          />
          <input 
            className="card__items__form__input" 
            type="email" 
            placeholder="Seu e-mail" 
          />
          <input 
            className="card__items__form__input" 
            type="tel" 
            placeholder="Seu telefone" 
          />
          <select className="card__items__form__input">
            <option value="">Assunto</option>
            <option value="duvida">Dúvida</option>
            <option value="orcamento">Orçamento</option>
            <option value="parceria">Parceria</option>
            <option value="outro">Outro</option>
          </select>
          <textarea 
            className="bigger card__items__form__input" 
            rows={4} 
            maxLength={500}
            placeholder="Como podemos ajudar você?"
          />
          <button className="card__items__form_btn">Enviar Mensagem</button>
        </div>
      </form>
    </section>
  );
}

export default Contact; 