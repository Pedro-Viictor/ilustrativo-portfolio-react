import stylework from './Works.module.css'
import imagemSocialLink from '../assets/sociallink1.png'

const Works = () => {
    return (
        <div>
            <section id="works" className={stylework.trabalhototal}>
                <div className={stylework.trabalhos}>
                    <h1>Trabalhos</h1>
                    <div className={stylework.projects}>
                        <div id='sociallink'>
                            <a href="https://pedro-viictor.github.io/links-sociais/" target='_blank'>
                            <img src={imagemSocialLink} alt="social link site" />
                            </a>
                        </div>
                        <div>Demo</div>
                        <div>Demo</div>
                    </div>
                    <p>Aqui ficarão alguns trabalhos que pretendo fazer no início da minha jornada como desenvolvedor front-end. <br />Se preferir pode visitar meu perfil no <a href="https://github.com/Pedro-Viictor" target="_blank">GitHub</a>.</p>
                </div>
            </section>
        </div>
    )
}

export default Works