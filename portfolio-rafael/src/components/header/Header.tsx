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
            <Link to="/projetos">Projetos</Link>
          </li>
          <li>
            <a href="/">Contato</a> 
          </li>
          <li>
            <a href="/">Curriculo</a> 
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
