import { HeaderBar, List, MenuNav } from './styles'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const HeaderPerfil = () => (
  <HeaderBar>
    <MenuNav>
      <List>
        <li>
          <Link id="text1" to={'/'}>
            Restaurantes
          </Link>
        </li>
        <li>
          <img src={logo} alt="LogoEfood" />
        </li>
        <li id="text2">
          <span>0</span> {`Produto(s) no carrinho`}
        </li>
      </List>
    </MenuNav>
  </HeaderBar>
)

export default HeaderPerfil
