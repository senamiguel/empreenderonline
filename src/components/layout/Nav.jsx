import { useState, useEffect } from 'react';
import '../../styles/Nav.css'
import { Link } from 'react-router-dom'

function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const bannerHeight = document.querySelector('.banner')?.offsetHeight || 0;
      setIsScrolled(window.scrollY > bannerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className={`main-header ${isScrolled ? 'scrolled fixed' : ''}`}>
        <nav className="main-nav" aria-label="Navegação principal">
          <Link to="/" className="logo" aria-label="Página inicial">Empreenda.online</Link>
          
          <button 
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
            aria-label="Abrir menu"
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <menu className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li><Link to="/sobre" aria-label="Sobre nós">Sobre</Link></li>
            <li><Link to="/contato" aria-label="Entre em contato">Contato</Link></li>
            <li><Link to="/register" aria-label="Cadastrar-se">Cadastrar</Link></li>
            <li><Link to="/login" aria-label="Faça login">Login</Link></li>
          </menu>
        </nav>
      </header>
      {isScrolled && <div className="nav-placeholder" />}
    </>
  );
}

export default Nav;
