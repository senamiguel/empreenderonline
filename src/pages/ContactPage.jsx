import Contact from '../components/Contact';
import '../styles/ContactPage.css';
import Threads from '../components/common/Threads';
import { useNavigate } from 'react-router-dom';

function ContactPage() {
  const navigate = useNavigate();
  return (
    <div className="contact-page">
      <button className="back-button" onClick={() => navigate(-1)} style={{position: 'relative', zIndex: 2, margin: '1rem 0 0 1rem'}}>Voltar</button>
      <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
        <Threads
          amplitude={2}
          distance={1}
          enableMouseInteraction={true}
          color={[0, 0.55, 0.39]} 
        />
      </div>
      <div className="contact-page__content">
        <div className="contact-page__info">
          <h1>Fale Conosco</h1>
          <p>Estamos aqui para ajudar você a alcançar seus objetivos de negócio.</p>
          <div className="contact-page__details">
            <div className="contact-page__detail">
              <h3>Email</h3>
              <p>contato@empreenderonline.com</p>
            </div>
            <div className="contact-page__detail">
              <h3>Telefone</h3>
              <p>(11) 99999-9999</p>
            </div>
            <div className="contact-page__detail">
              <h3>Horário de Atendimento</h3>
              <p>Segunda a Sexta, 9h às 18h</p>
            </div>
          </div>
        </div>
        <Contact />
      </div>
    </div>
  );
}

export default ContactPage; 