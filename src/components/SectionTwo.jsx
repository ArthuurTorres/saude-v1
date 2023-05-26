import './SectionTwo.css'
import cart from '../assets/cart.gif'
import company from '../assets/company.gif'
import bed from '../assets/bed.gif'
import money from '../assets/money.gif'
import service from '../assets/service.gif'
import health from '../assets/health.gif'

const SectionTwo = () => {
  return (
    <section className="s2">
      <div className="icon-menu">
        <div>
          <img src={cart} alt="Shopping Cart" />
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
        <div>
          <img src={service} alt="Service" />
          <h3>Atendimento</h3>
          <p>Ambulatorial e hospitalar com obstetrícia.</p>
        </div>
        <div>
          <img src={health} alt="health" />
          <h3>Gestão Integrada de Saúde</h3>
          <p>Ações de acompanhamento e promoção à saúde aderentes às necessidades dos segurados.</p>
        </div>
     </div>
     <div className="icon-text">
      <h2><span className="orange-detail">Planos sob medida</span> com os melhores hospitais, clínicas, médicos e laboratórios para você cuidar da sua <span className="orange-detail">Saúde Integral</span><span className="span">.</span></h2>
     </div>
    </section>
  )
}

export default SectionTwo