import './SectionThree.css'
import arrowd from '../assets/arrowd.gif'
import computer from '../assets/computer.gif'
import medical from '../assets/medical.gif'
import video from '../assets/video.gif'
import arrowr from '../assets/arrowr.png'
import arrowl from '../assets/arrowl.png'

const SectionThree = () => {
  return (
    <section className='container3'>

      <div className="dif">
      <h2>
        <span className="orange-detail">Diferencias</span> da empresa.
        <img className="arrowd" src={arrowd}></img>
      </h2>
      </div>

       <div className="icon-text">
       <div>
        <h4>2.4 milhões</h4>
        <p>de beneficiários - Saúde</p>
      </div>
      <div>
        <h4>1.8 milhões</h4>
        <p>de beneficiários - Odonto</p>
      </div>
      <div>
        <h4>+3.600</h4>
        <p>laboratórios</p>
      </div>
      <div>
        <h4>1.200</h4>
        <p>hospitais</p>
      </div>
      <div>
        <h4>+18.300</h4>
        <p>profissionais de saúde</p>
      </div>
      <div>
        <h4>+11.000</h4>
        <p>de profissionais de odonto</p>
      </div>
     </div> 

    <div className='dif-2'>
      <div>
        <img src={medical} alt="Medical" />
        <h3>Orientação Médica 24h</h3>
        <p>
          Com a Orientação Médica Telefônica da SulAmérica, você tira suas dúvidas de saúde
          com profissionais especializados, 24 horas por dia, 7 dias por semana, de forma
          gratuita e ilimitada em todo o país.</p>
      </div>
      <div>
        <img src={computer} alt="Computer" />
        <h3>Pronto atendimento e especialistas</h3>
        <p>Você contará com pronto atendimento (clinico geral e pediatra) disponível 24 horas por dia, todos os dias, 
          inclusive feriados.E ainda poderá agendar consultas online com médicos especialistas da rede referenciada.</p>
      </div>
      <div>
        <img src={video} alt="Video" />
        <h3>Psicólogo na Tela</h3>
        <p>O serviço oferece sessões de psicoterapia por vídeo, 24h, todos os dias, onde você estiver. Basta acessar e 
          agendar pelo App SulAmérica Saúde. Uma equipe de psicólogos treinada para prestar atendimento online está à 
          disposição para oferecer conforto.</p>
      </div>
    </div>
    <div>
      <button className='button'>
        <img className='buttonarrow' src={arrowl} alt="arrow left"/>
        Fale com seu consultor
        <img className='buttonarrow' src={arrowr} alt="arrow right"/>
        </button>
    </div>

    </section>
  )
}

export default SectionThree