import './Footer.css'
import logof from '../assets/sulamerica-logo-footer.svg'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import twitter from '../assets/twitter.svg'
import linkedin from '../assets/linkedin.svg'
import mail from '../assets/mail.png'
import phone from '../assets/phone.png'

export const Footer = () => {
  return (
      <footer>

        <div>
          <img className='logo-footer' src={logof} alt="Logo Footer"/>
        </div>

        <div className='contact'>
          <h2>Contato</h2>
          <ul> 
            <a href="#">
              <img src={phone} alt="phone"/>
              (22) 9999-9999
              </a>
            <a href="#">
              <img src={mail} alt="email"/>
              email@email.com
              </a>
          </ul>
        </div>

        <div className='footer-icons'>
          <h2>Siga-nos:</h2>
          <ul>
            <a href='#'>
              <img src={facebook} alt="facebook"/>
            </a>
            <a href='#'>
              <img src={instagram} alt="instagram"/>
            </a>
            <a href='#'>
              <img src={twitter} alt="twitter"/>
            </a>
            <a href='#'>
              <img src={linkedin} alt="linkedin"/>
            </a>
          </ul>
        </div>

        <div className='footer-information'>
          <h2>Informações</h2>
          <ul>
          <a href='#'>
            Quem Somos
          </a>
          <a href='#'>
            Beneficios
          </a>
          <a href='#'>
            Unidades
          </a>
         </ul>
        </div>
      </footer>
  )
}
