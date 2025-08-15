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

const closeMenu = () => {
  setMenuOpen(false)
}

  return (
    <header className={menuOpen ? "header mobile" : "header"}>
      <div className="logo">
        <Link to="/">{"< Rafael />"}</Link>
      </div>

      {isMobile && (
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {
            <span className={`icon ${menuOpen ? "open" : ""}`}>
              {menuOpen ? <IoClose /> : <HiMenu />}
            </span>
          }
        </button>
      )}

      <nav className="nav-links">
        <ul className="nav-menu">
          <li>
            <Link onClick={closeMenu} to="/sobre">Sobre mim</Link>
          </li>
          <li>
            <Link onClick={closeMenu} to="/habilidades">Habilidades</Link>
          </li>
          <li>
            <Link onClick={closeMenu} to="/projetos">Portfólio de Projetos</Link>
          </li>
          <li>
            <a onClick={closeMenu} href="mailto:raffa96dias@gmail.com">Contato</a>
          </li>
          <li>
            <a onClick={closeMenu} href="/CV_Rafael_Dias.pdf" target="blank">
              Currículo
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
