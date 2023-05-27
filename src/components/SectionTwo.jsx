import './SectionTwo.css'
import refound from '../assets/refound.gif'
import company from '../assets/company.gif'
import bed from '../assets/bed.gif'
import money from '../assets/money.gif'
import service from '../assets/service.gif'
import health from '../assets/health.gif'
import icontitle from '../assets/icon-title.png'

const SectionTwo = () => {
  return (
    <section className="s2">
      <div className="icon-menu">
        <div className="division">
          <img src={icontitle} alt="Icon Title" />
          <h2>Beneficios</h2>
        </div>
        <div className="a">
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
      <div className="division">
      <img src={icontitle} alt="Icon Title" />
      <h2>Estátisticas</h2>
      </div>
      <div className='a'>
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
    </section>
  )
}

export default SectionTwo