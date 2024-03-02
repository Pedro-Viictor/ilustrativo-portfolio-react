import javascript from '../assets/tech-js.svg'
import html from '../assets/tech-html.svg'
import css from '../assets/tech-css.svg'
import sass from '../assets/tech-sass.svg'
import react from '../assets/tech-react.svg'
import styleskill from './habili.module.css'


const Skills = () => {
    return (
        <div>
            <section id="skills" className={styleskill.habilidade}>
                <div>
                    <h1>Habilidades</h1>
                    <p>Minhas tecnologias do momento são: <br /> <strong>HTML5, CSS3, JAVASCRIPT, SASS/SCSS e React JS.</strong> </p>
                </div>
                <div className={styleskill.leftToRight}>
                    <div className={styleskill.skillItem}>
                        <a href="https://pt.wikipedia.org/wiki/JavaScript" target="_blank">
                            <img src={javascript} alt="JAVASCRIPT-logo" />
                        </a>
                        <p>Javascript</p>
                    </div>
                    <div className={styleskill.skillItem}>
                        <a href="https://pt.wikipedia.org/wiki/HTML5" target="_blank">
                            <img src={html} alt="HTML5-logo" />
                        </a>
                        <p>Html5</p>
                    </div>
                    <div className={styleskill.skillItem}>
                        <a href="https://pt.wikipedia.org/wiki/CSS3" target="_blank">
                            <img src={css} alt="CSS3-logo" />
                        </a>
                        <p>CSS3</p>
                    </div>
                    <div className={styleskill.skillItem}>
                        <a href="https://pt.wikipedia.org/wiki/Sass_(linguagem_de_folhas_de_estilos)" target="_blank">
                            <img src={sass} alt="SASS/SCSS-logo" />
                        </a>
                        <p>Sass/Scss</p>
                    </div>
                    <div className={styleskill.skillItem}>
                        <a href="https://pt.wikipedia.org/wiki/React_(JavaScript)" target='_blank'>
                            <img src={react} alt="React-logo" />
                        </a>
                        <p>React JS</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Skills