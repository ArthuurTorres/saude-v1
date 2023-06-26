import './Benefits.css'
import refound from '../assets/icons/refound.gif'
import company from '../assets/icons/company.gif'
import bed from '../assets/icons/bed.gif'
import money from '../assets/icons/money.gif'
import service from '../assets/icons/service.gif'
import health from '../assets/icons/health.gif'
import icontitle from '../assets/icons/icon-title.png'

const Benefits = () => {

  return (

    <section className="container1">
          <div className="icon-logo">
          <h2>
            <img className="icontitle" src={icontitle}></img>
            Confira alguns dos nossos <span className='orange-detail'>benefícios.</span></h2>
          </div>
      <div className="icon-menu">         
        <div>
          <img src={refound} alt="Refound" />
          <h3>Reembolso</h3>
          <p>Exclusivo para fisioterapia, nutricionista, psicologia, fonoaudiologia, acupuntura e terapia ocupacional.</p>
        </div>
        <div>
          <img src={company} alt="Company" />
          <h3>Contratação</h3>
          <p>Para empresas a partir de 2 vidas.</p>
        </div>
        <div>
          <img src={bed} alt="Bed" />
          <h3>Acomodação</h3>
          <p>Opção de contratação com acomodação individual (apartamento) ou com até quatro pessoas no quarto (enfermaria).</p>
        </div>
        <div>
          <img src={money} alt="Money" />
          <h3>Investimento</h3>
          <p>Exclusivo para fisioterapia, nutricionista, psicologia, fonoaudiologia, acupuntura e terapia ocupacional.</p>
        </div>
      </div>  
      <div className="icon-menu">
      <div>
          <img src={service} alt="Service" />
          <h3>Atendimento</h3>
          <p>Ambulatorial e hospitalar com obstetrícia.</p>
        </div>
        <div>
          <img src={health} alt="health" />
          <h3>Integrada de Saúde</h3>
          <p>promoção à saúde aderentes às necessidades dos segurados.</p>
        </div>
        <div>
          <img src={health} alt="health" />
          <h3>Integrada de Saúde</h3>
          <p>aderentes às necessidades dos segurados.</p>
        </div>
        <div>
          <img src={health} alt="health" />
          <h3>Integrada de Saúde</h3>
          <p>aderentes às necessidades dos segurados.</p>
        </div>
      </div>
    </section>  
  )
}

export default Benefits