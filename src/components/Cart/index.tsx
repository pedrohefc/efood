import lixeira from '../../assets/images/lixeira.png'
import {
  Button,
  CartContainer,
  CartItem,
  Overlay,
  Prices,
  SideBar
} from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import formataPreco from '../../utils/formataPreço'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const somaValor = () => {
    return items.reduce((total, item) => total + item.preco, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span>{formataPreco(item.preco)}</span>
                <img onClick={() => removeItem(item.id)} src={lixeira} alt="" />
              </div>
            </CartItem>
          ))}
        </ul>
        <Prices>
          <span>Valor total</span>
          <span>{formataPreco(somaValor())}</span>
        </Prices>
        <Button>Continuar com a entrega</Button>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
