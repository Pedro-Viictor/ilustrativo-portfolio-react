import head from './Header.module.css'
import perfil from '../assets/gunter.jpg'


const Header = () => {
    return (
        <div>
            <header className={head.navbar}>
                <div className={head.imageAndTitle}>
                    <img src={perfil} alt="logo-perfil" />
                    <h1>Pedro | Front-end</h1>
                </div>
                <nav className={head.taga}>
                    <a href="#about">Início</a>
                    <a href="#skills">Habilidades</a>
                    <a href="#works">Trabalhos</a>
                    <a href="#contact">Contatos</a>
                </nav>
            </header>
        </div>
    )
}

export default Header