import "./Home.scss";
const HeroSection = () => {
  return (
    <div className="container">
      <div className="home">
        <div className="home-description">
          <h1>Desenvolvedor Front-End</h1>
          <p>
            Desenvolvedor júnior focado em React.js, com dedicação ao
            aprendizado contínuo, boas práticas e uma excelente experiência de
            usuário
          </p>
        </div>

        <div className="home-network">
          <h1>Conecte-se comigo</h1>
          <div className="home-icons">
            <a href="https://www.linkedin.com/in/raffaew/" target="blank">
              <img src={`${import.meta.env.BASE_URL}linkedin-png.png`} alt="LinkedIn" />
            </a>

            <a href="https://github.com/raffaew" target="blank">
             <img src={`${import.meta.env.BASE_URL}github-png.png`} alt="GitHub" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
