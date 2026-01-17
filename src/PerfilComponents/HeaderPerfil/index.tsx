import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'
import { HeaderBar, List, MenuNav } from './styles'

const HeaderPerfil = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
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
          <li id="text2" onClick={items.length > 0 ? openCart : () => {}}>
            <span>{items.length}</span>
            {` Produto(s) no carrinho`}
          </li>
        </List>
      </MenuNav>
    </HeaderBar>
  )
}

export default HeaderPerfil
