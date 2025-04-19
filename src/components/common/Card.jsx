import '../../styles/Card.css'
function Card() {
  return (
    <>
      <section className="card__items__container">
        <form className="card__items__form">
          <header className="card__items__form__header">
            <h3 className="card__items__form__title">Conte-nos sobre sua empresa</h3>
          </header>
          <div className="card__items__form__content">
            <input 
              className="card__items__form__input" 
              type="text" 
              placeholder="Qual é o seu negócio?" 
            />
            <select className="card__items__form__input">
              <option value="">Já tem experiência com marketing digital?</option>
              <option value="sim">Sim</option>
              <option value="nao">Não</option>
              <option value="pouco">Pouco</option>
            </select>
            <textarea 
              className="bigger card__items__form__input" 
              rows={4} 
              maxLength={200}
              placeholder="Conte-nos mais sobre seus objetivos e expectativas..."
            />
            <button className="card__items__form_btn">Começar</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Card;
