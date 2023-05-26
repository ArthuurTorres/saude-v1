import './SectionOne.css'
import img from '../assets/img-header.jpg';

const SectionOne = () => {
  return (
    <section>
      <div className="s1">
        <h2>Plano de Saúde feitas sob medida<span className="span">.</span></h2>
        <p>A wolf wants to eat the girl but is afraid to do so in public. He approaches the girl, and she naïvely tells him where she is going. He suggests the girl pick some flowers, which she does. In the meantime, he goes to the house and gains entry by pretending to be the girl. He swallows the grandmother whole.</p>
        <button>ADQUIRA JÁ O SEU</button>
      </div>
      <div>
      <img src={img} alt=""/>
      </div>
    </section>
  )
}

export default SectionOne;