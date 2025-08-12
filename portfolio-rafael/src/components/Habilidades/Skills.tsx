import "./Skills.scss";
import type { CardItem } from "../../types/CardItem";
import data from "../../data/dataSkills.json";

// Tipo para a estrutura de categoria
interface Category {
  category: string;
  items: CardItem[];
}

const Skills = () => {
  const skillsByCategory: Category[] = data;

  const markupLanguage = skillsByCategory.filter(
    (cat) => cat.category === "Linguagens de Marcação e Estilo"
  )

  const programmingLanguage = skillsByCategory.filter(
    (cat) => cat.category === "Linguagens de Programação"
  )

  const libsAndFrameworks = skillsByCategory.filter(
    (cat) => cat.category === "Bibliotecas / Frameworks"
  )

   const tools = skillsByCategory.filter(
    (cat) => cat.category === "Ferramentas"
  )

   const cloudPlatform = skillsByCategory.filter(
    (cat) => cat.category === "Plataformas / Nuvem"
  )

  

  return (
    <div className="skills">
      <div className="firstCard">
           {markupLanguage.map((category) => (
        <div className="category" key={category.category}>
          <h2>{category.category}</h2>
          <div className="cards">
            {category.items.map((skill) => (
              <div className="card" key={skill.id}>
                <img src={skill.image} alt={skill.title} />
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      {programmingLanguage.map((category) => (
        <div className="category" key={category.category}>
          <h2>{category.category}</h2>
          <div className="cards">
            {category.items.map((skill) => (
              <div className="card" key={skill.id}>
                <img src={skill.image} alt={skill.title} />
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
      </div>

      <div className="secondCard">
         {libsAndFrameworks.map((category) => (
        <div className="category" key={category.category}>
          <h2>{category.category}</h2>
          <div className="cards">
            {category.items.map((skill) => (
              <div className="card" key={skill.id}>
                <img src={skill.image} alt={skill.title} />
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      {tools.map((category) => (
        <div className="category" key={category.category}>
          <h2>{category.category}</h2>
          <div className="cards">
            {category.items.map((skill) => (
              <div className="card" key={skill.id}>
                <img src={skill.image} alt={skill.title} />
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      {cloudPlatform.map((category) => (
        <div className="category" key={category.category}>
          <h2>{category.category}</h2>
          <div className="cards">
            {category.items.map((skill) => (
              <div className="card" key={skill.id}>
                <img src={skill.image} alt={skill.title} />
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
      </div>
   

     
    </div>
  );
};

export default Skills;
