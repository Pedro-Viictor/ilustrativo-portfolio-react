import ilustration from '../assets/gunter2.jpeg'
import stylecontact from './Contact.module.css'


const Contact = () => {
    return (
        <div>
            <section id="contact" className={stylecontact.sessionContact}>
                <div>
                    <h1>Aqui está meu contato:</h1>
                    <p>Geralmente eu uso Discord, E-mail, Instagram e LinkedIn.<br />Você pode optar por entrar em contato comigo por uma dessas redes.</p>
                    <button id={stylecontact.btn}><a href="https://www.linkedin.com/in/pedrovictorlopes/" target='_blank'>Contato</a></button>
                </div>
                <div>
                    <img src={ilustration} alt="Ilustração-final" />
                </div>
            </section>
        </div>
    )
}

export default Contact 