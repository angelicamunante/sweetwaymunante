import { FaGithubSquare, FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { ImMail } from 'react-icons/im';
import './Footer.css'


function Footer() {
    return (
      <footer className="footerContainer">
        <div className="icon">
                <a href="https://github.com/angelicamunante" target="blank">
                    <FaGithubSquare />
                </a>
                <a href="https://www.linkedin.com/in/angelica-mu%C3%B1ante-3602a6251/?locale=en_US" target="blank">
                    <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/sweetway.ica/?hl=es" target="blank">
                    <FaInstagram />
                </a>
                <a href="angelica.munante.galindo@gmail.com">
                    <ImMail />
                </a>
        </div>
        <div>
            <p className="text">Copyright © 2022 - All right reserved</p>
            <p className="text">by Sweet Way</p>
        </div>
        <div>
            <p  className="text">Angelica Muñante Front-End Developer</p>
        </div>
    
      </footer>
    )
  }
  export default Footer;