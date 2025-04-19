import '../../styles/Funciona.css'
import TiltedCard from "./assets/reactbits/TiltedCard";
import Cart from "./assets/Cart.svg";
import Letter from "./assets/Letter.svg";
import Thunder from "./assets/Thunder.svg";

function Funciona() {
  return (
    <section className="funciona" id="funciona">
      <h2>Como criar sua empresa com IA?</h2>
      <div className="icons">
        <div className="icons__container">
          <TiltedCard
            imageSrc={Cart}
            altText="Card Cart"
            captionText="Carrinho"
            containerHeight="150px"
            containerWidth="150px"
            imageHeight="150px"
            imageWidth="150px"
            rotateAmplitude={20}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={true}
          />
          <p>Escolha seu plano<br></br>E comece sua jornada</p>
        </div>
        <div className="icons__container">
          <TiltedCard
            imageSrc={Letter}
            altText="Card Letter"
            captionText="Carta"
            containerHeight="150px"
            containerWidth="150px"
            imageHeight="100%"
            imageWidth="100%"
            rotateAmplitude={20}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={true}
          />
          <p>Conte sobre seu negócio<br></br>E deixe a IA criar tudo<br></br>Do zero ao sucesso</p>
        </div>
        <div className="icons__container">
          <TiltedCard
            imageSrc={Thunder}
            altText="Card Thunder"
            captionText="Raio"
            containerHeight="150px"
            containerWidth="150px"
            imageHeight="150px"
            imageWidth="150px"
            rotateAmplitude={20}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={true}
          />
          <p>Empresa pronta<br></br>E funcionando</p>
        </div>
      </div>
    </section>
  );
}

export default Funciona;
