import './Footer.css'
import logof from '../assets/sulamerica-logo-footer.svg'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import twitter from '../assets/twitter.svg'
import linkedin from '../assets/linkedin.svg'

export const Footer = () => {
  return (
      <footer>
        <div>
          <img className='logo-footer' src={logof} alt="Logo Footer"/>
        </div>
        <div className='contact'>
          <h2>Contato</h2>
          <ul className='footer-contact'> 
            <a href="#">
              (22) 9999-9999
              </a>
            <a href="#">
              email@email.com
              </a>
          </ul>
          <ul className='footer-icons'>
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
        <div className='contact'>
          <h2>Informações</h2>
          <ul className='footer-contact'>
          <p>Consulte as regras, planos elegíveis e quando usar o Médico na Tela
             em https://saudenatela.sulamerica.com.br/. Esse serviço não é indicado
              para casos de emergência médica. Este material contém informações
               resumidas que poderão sofrer alteração sem aviso prévio. Os benefícios
                aqui descritos poderão ser descontinuados ou alterados a exclusivo
                 critério da SulAmérica. Existem limitações de especialidades para
                  os planos SulAmérica Direto. O uso dos canais de atendimento
                   estão sujeitos à capacidade técnica e são temporários, podendo
                    ser descontinuados a qualquer momento. O produto SulAmérica Saúde obedece à legislação
                     e às condições contratuais, que devem ser lidas previamente à contratação. Sul América
                      Companhia de Seguro Saúde - CNPJ: 01.685.053/0013-90 e Sul América Serviços de Saúde S.A. - 
                      CNPJ: 02.866.602/0001- 51. SAC: 0800-722-0504 e Ouvidoria: 0800 725 3374, 
                      horário atendimento 08:30h às 17:30h.
          </p>
         </ul>
        </div>
      </footer>
  )
}
