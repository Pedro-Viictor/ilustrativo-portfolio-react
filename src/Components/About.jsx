import group95 from '../assets/gunter1.jpeg'
import aboutstyle from './About.module.css'

const About = () => {
    return (
        <div>
            <section id="about" className={aboutstyle.sobre}>
                <div>
                    <h1>Olá! Meu nome é <br />Pedro Victor</h1>
                    <p>Esse portfolio é meramente ilustrativo feito para me aproximar mais do React.<br /> Em busca de me qualificar ainda mais.</p>
                </div>
                <div className={aboutstyle.imagem}>
                    <img src={group95} alt="imagem-group" />
                </div>
            </section >
        </div >
    )
}

export default About