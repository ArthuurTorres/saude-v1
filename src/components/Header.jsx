import './Header.css'
import img from '../assets/sulamerica-logo.svg'

const Header = () => {
  return (
    <>
    <header>
    <div>
    <img className="logo" src={img} alt="LOGO" />
    </div>
    <div>
      <nav>
        <a href="#">Quem somos</a>
        <a href="#">Beneficios</a>
        <a href="#">Unidades</a>
      </nav>
    </div>
    </header>
  </>
  )
}

export default Header