import './styles/Nav.css'

function Nav() {
  return (
    <nav aria-label="Navegação principal">
      <ul>
        <li><a href="/" aria-label="Página inicial">Empreenda.online</a></li>
        <div className="nav__btns">
          <li><a href="#sobre" aria-label="Sobre nós">Sobre</a></li>
          <li><a href="#contato" aria-label="Entre em contato">Contato</a></li>
          <li className="nav__btns__start"><a href="#comecar" aria-label="Comece agora">Começar</a></li>
          <li><a href="#login" aria-label="Faça login">Login</a></li>
        </div>
      </ul>
    </nav>
  );
}

export default Nav;
