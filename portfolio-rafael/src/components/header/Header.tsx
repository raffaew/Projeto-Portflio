import { useState, useEffect } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 500) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log("mobile:", isMobile, "menuOpen:", menuOpen, window.innerWidth);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">{"< Rafael />"}</Link>
      </div>

      <nav className="nav-links">
        <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
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
            <a href="/CV_Rafael_Dias.pdf" target="blank">
              Currículo
            </a>
          </li>
        </ul>
      </nav>

      {isMobile && (
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {
            <span className={`icon ${menuOpen ? "open" : ""}`}>
              {menuOpen ? <IoClose /> : <HiMenu />}
            </span>
          }
        </button>
      )}
    </header>
  );
};

export default Header;
