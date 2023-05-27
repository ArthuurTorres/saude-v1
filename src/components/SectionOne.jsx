import './SectionOne.css'
import img from '../assets/img-header.jpg';

const SectionOne = () => {
  return (
    <section>
      <div className="text-s1">
      <h2><span className="orange-detail">Planos sob medida</span> com os melhores hospitais, clínicas, médicos e laboratórios para você cuidar da sua <span className="orange-detail">Saúde Integral</span><span className="span">.</span></h2>
      </div>
      <div>
      <img src={img} alt=""/>
      </div>
    </section>
  )
}

export default SectionOne;