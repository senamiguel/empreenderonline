import '../../styles/Footer.css'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section">
          <h3>Empreenda.online</h3>
          <p>Transformando ideias em negócios de sucesso através de soluções digitais inovadoras.</p>
          <div className="footer__social">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
          </div>
        </div>

        <div className="footer__section">
          <h3>Links Rápidos</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#contato">Contato</a></li>
            <li><a href="#blog">Blog</a></li>
          </ul>
        </div>

        <div className="footer__section">
          <h3>Contato</h3>
          <ul>
            <li><a href="mailto:contato@empreenda.online"><MdEmail /> contato@empreenda.online</a></li>
            <li><a href="tel:+5531999999999" className="phone-number"><MdPhone /> (31) 99999-9999</a></li>
            <li><a href="https://maps.google.com" target="_blank" rel="noopener noreferrer"><MdLocationOn /> Belo Horizonte, MG</a></li>
          </ul>
        </div>

        <div className="footer__section">
          <h3>Newsletter</h3>
          <p>Receba novidades e dicas sobre empreendedorismo diretamente no seu e-mail</p>
          <form className="footer__newsletter">
            <input 
              type="email" 
              placeholder="Seu melhor e-mail" 
              required
            />
            <button type="submit">Inscrever-se</button>
          </form>
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} Empreenda.online - Todos os direitos reservados</p>
      </div>
    </footer>
  );
}

export default Footer;