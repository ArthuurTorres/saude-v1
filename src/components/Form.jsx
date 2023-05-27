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
        </form>
      </div>
    </div>
  )
}

export default Form