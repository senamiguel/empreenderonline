import SplitText from "./assets/reactbits/SplitText";
import '../../styles/Banner.css'
import coffee from "./assets/Coffee.svg";
import Nav from "../layout/Nav";
import Card from "../common/Card";

function Banner() {
  return (
    <>
      <header className="banner__container">
        <Nav />
        <section className="banner__items">
          <div className="banner__items__text" style={{ textAlign: 'center' }}>
            <SplitText
              text="Criar sua empresa"
              delay={150}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-100px"
            />
            <SplitText
              text="agora é tão fácil quanto tomar um café."
              textAlign="left"
              delay={150}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-100px"
            />
            <img src={coffee} alt="Café" draggable="false"/>
          </div>
          <div className="desktop-card">
            <Card />
          </div>
        </section>
      </header>
    </>
  );
}

export default Banner;
