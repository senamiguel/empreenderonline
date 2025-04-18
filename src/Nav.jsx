import './styles/Nav.css'

function Nav() {
  return (
    <nav>
      <ul>
        <li>Empreenda.online</li>
        <div className="nav__btns">
          <li><a href="">Sobre</a></li>
          <li><a href="">Contato</a></li>
          <li><a href="">Login</a></li>
          <li className="nav__btns__start"><a href="">Começar</a></li>
        </div>
      </ul>
    </nav>
  );
}

export default Nav;
