import s from './Header.module.css'
import logo_dark from '../images/logo_dark.png'

function Header() {
  return (
    <header className={s.header}>
      <img className={s.logo} src={logo_dark} alt='logo'/>
    </header>
  )
}

export default Header
