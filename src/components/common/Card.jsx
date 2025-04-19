import './styles/Card.css'
function Card() {
  return (
    <>
      <section className="card__items__container">
        <form className="card__items__form">
          <header className="card__items__form__header">
            <h3 className="card__items__form__title">Lorem Ipsum</h3>
          </header>
          <div className="card__items__form__content">
            <input className="card__items__form__input" type="text" />
            <input className="card__items__form__input" type="text" />
            <textarea className="bigger card__items__form__input" rows={2} maxLength={90}/>
            <button className="card__items__form_btn">Começar</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Card;
