import "./Project.scss";
import { FaLink } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import dataDesktop from "../../data/dataProjects.json";
import dataMobile from "../../data/dataProjectsMobile.json";

const Project = () => {
  const carousel = useRef<HTMLDivElement>(null);
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

  const handleLeftClick = () => {
    const el = carousel.current;
    if (!el) return;
    el.scrollTo({
      left: el.scrollLeft - 540,
      behavior: "smooth",
    });
  };

  const handleRightClick = () => {
    const el = carousel.current;
    if (!el) return;
    el.scrollTo({
      left: el.scrollLeft + 540,
      behavior: "smooth",
    });
  };

  return (
    <div className="projects">
      <div className="frontEndMentor">
        <div className="description">
          <h3>Projetos Responsivos</h3>
          <p>
            O{" "}
            <a href="https://www.frontendmentor.io/" target="blank">
              Frontend Mentor
            </a>{" "}
            é uma plataforma que oferece desafios práticos para desenvolvedores
            front-end com base em designs prontos. Os desafios variam de nível
            iniciante a avançado e são voltados para o aprimoramento de
            habilidades como HTML, CSS, JavaScript, acessibilidade,
            responsividade e boas práticas de layout.
          </p>
          <p>
            Nesta seção, compartilho alguns projetos que desenvolvi a partir de
            desafios da plataforma. Em cada um deles, reproduzi o layout
            proposto com foco em responsividade e atenção aos detalhes visuais.
          </p>
        </div>
        <div className="carousel">
          <FaChevronLeft className="chevronLeft" onClick={handleLeftClick} />
          {isMobile ? (
            <div className="cardsFrontEndMentor" ref={carousel}>
              {dataMobile.map((project) => (
                <div className="cardContainer" key={project.id}>
                  <div className="card">
                    <div className="images imagesMobile">
                      <img
                        src={project.imageUrl}
                        alt={project.alt}
                        width={200}
                      />
                    </div>
                  </div>
                  <div className="links">
                    <button>
                      <a
                        href={project.site}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ver Site
                      </a>
                      <FaLink className="icon" />
                    </button>
                    <button>
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ver Código
                      </a>
                      <FaGithub className="icon" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="cardsFrontEndMentor" ref={carousel}>
              {dataDesktop.map((project) => (
                <div className="cardContainer" key={project.id}>
                  <div className="card">
                    <div className="images">
                      <img src={project.imageUrl} alt={project.alt} />
                    </div>
                  </div>
                  <div className="links">
                    <button>
                      <a
                        href={project.site}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ver Site
                      </a>
                      <FaLink className="icon" />
                    </button>
                    <button>
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ver Código
                      </a>
                      <FaGithub className="icon" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
          <FaChevronRight className="chevronRight" onClick={handleRightClick} />
        </div>
      </div>

      <div className="tests">
        <div className="description">
          <h3>Projetos Com Testes</h3>
          <p>
            Nesta seção, apresento um projeto que desenvolvi com foco em testes
            unitários. A implementação de testes é fundamental para garantir a
            qualidade e a confiabilidade do código, permitindo que mudanças
            futuras sejam feitas com mais segurança.
          </p>

          <p>
            Fiz um to-do-list que inclui funcionalidades como adicionar, remover
            e marcar tarefas como concluídas. Cada funcionalidade foi
            acompanhada por testes unitários para verificar seu correto
            funcionamento.
          </p>

          <p>
            Os testes foram escritos utilizando a biblioteca Jest, que é
            amplamente utilizada para testar aplicações JavaScript. Através
            desses testes, pude garantir que cada parte do código funcionasse
            como esperado, minimizando bugs e melhorando a manutenção do
            projeto.
          </p>
        </div>

        <div className="cardContainer">
          <div className="card">
            {isMobile ? (
              <div className="images imagesMobile">
                <img
                  src="/portfolio-rafael/to-do-list-mobile.jpg"
                  alt="3-column-preview-card"
                />
              </div>
            ) : (
              <div className="images">
                <img
                  src="/portfolio-rafael/to-do-list.png"
                  alt="3-column-preview-card"
                />
              </div>
            )}
          </div>
          <div className="links">
            <button>
              <a
                href="https://raffaew.github.io/testing-library-com-vite/"
                target="blank"
              >
                Ver Site
              </a>
              <FaLink className="icon" />
            </button>
            <button>
              <a
                href="https://github.com/raffaew/testing-library-com-vite/tree/main/page-to-do-list"
                target="blank"
              >
                Ver Código
              </a>
              <FaGithub className="icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
