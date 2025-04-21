import '../../styles/Nav.css'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <header className="main-header">
      <nav className="main-nav" aria-label="Navegação principal">
        <Link to="/" className="logo" aria-label="Página inicial">Empreenda.online</Link>
        <menu className="nav-menu">
          <li><Link to="/sobre" aria-label="Sobre nós">Sobre</Link></li>
          <li><Link to="/contato" aria-label="Entre em contato">Contato</Link></li>
          <li><Link to="/comecar" className="nav-menu__start" aria-label="Comece agora">Começar</Link></li>
          <li><Link to="/login" aria-label="Faça login">Login</Link></li>
        </menu>
      </nav>
    </header>
  );
}

export default Nav;
