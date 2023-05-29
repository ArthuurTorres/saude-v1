import './Form.css'
// import banner from '../assets/banner.jpg'

const Form = () => {
  return (
    <div className="bg-form">
      <div className="container">
        <form className="form">
          <h2>Entre em Contato</h2>
          <input type="text" name="Nome" placeholder='nome' />
          <input placeholder='Email'></input> 
          <input placeholder='Telefone'></input>
          <select id="appearance-select">
          <option>Selecione</option>
          <option>Primeira opção</option>
          <option>Segunda opção</option>
          <option>Terceira opção</option>
          <option>Quarta opção</option>
          </select>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  )
}

export default Form