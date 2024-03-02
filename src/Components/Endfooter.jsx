import discord from '../assets/discord.svg'
import instagram from '../assets/instagram.svg'
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'
import stylefooter from './Endfooter.module.css'


const Endfooter = () => {
    return (
        <div>
            <footer className={stylefooter.end}>
                <div>
                    <p>Site feito com 💖 By: <a className={stylefooter.insta} href="https://www.https://www.instagram.com/pdrroot/" target="_blank" rel="noopener noreferrer">Pedro Victor </a>. | Copyright © 2024 - Pedro Victor. Todos os direitos reservados.</p>
                </div>
                <div id={stylefooter.sociallinks}>
                    <a className={stylefooter.icons} href="https://discord.com/invite/TA7sF7DFbT" target="_blank">
                        <img src={discord} alt="discord-icon" />
                    </a>
                    <a className={stylefooter.icons} href="https://www.https://www.instagram.com/pdrroot/" target="_blank">
                        <img src={instagram} alt="instagram-icon" />
                    </a>
                    <a className={stylefooter.icons} href="https://www.linkedin.com/in/pedrovictorlopes/" target="_blank">
                        <img src={linkedin} alt="linkedin-icon" />
                    </a>
                    <a className={stylefooter.icons} href="https://github.com/Pedro-Viictor" target="_blank">
                        <img src={github} alt="github-icon" />
                    </a>
                </div>
            </footer>
        </div>
    )
}

export default Endfooter