import { HeaderBar, Title } from './styles'
import logo from '../../assets/images/logo.png'

const Header = () => (
  <HeaderBar>
    <img src={logo} alt="LogoEfood" />
    <Title>
      Viva experiências gastronômicas
      <br />
      no conforto da sua casa
    </Title>
  </HeaderBar>
)

export default Header
