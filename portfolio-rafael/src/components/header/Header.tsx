// Header.jsx
import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">{"< Rafael />"}</Link>
      </div>

      <nav className="nav-links">
        <ul>
          <li>
            <Link to="/sobre">Sobre mim</Link>
          </li>
          <li>
            <Link to="/habilidades">Habilidades</Link>
          </li>
          <li>
            <Link to="/projetos">Portfólio de Projetos</Link>
          </li>
          <li>
            <a href="mailto:raffa96dias@gmail.com">Contato</a> 
          </li>
          <li>
            <a href="/CV_Rafael_Dias.pdf" target="blank">Currículo</a> 
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
