import lixeira from '../../../assets/images/lixeira.png'
import {
  Button,
  CartContainer,
  CartItem,
  Overlay,
  Prices,
  SideBar
} from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../../store'
import { close, remove, goToCheckout } from '../../../store/reducers/cart'
import formataPreco from '../../../utils/formataPreço'
import Checkout from '../Checkout'
import Payment from '../Payment'
import Congratulations from '../Congratulations'

const Cart = () => {
  const { isOpen, items, step } = useSelector(
    (state: RootReducer) => state.cart
  )
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const goToCheckoutFunction = () => {
    dispatch(goToCheckout())
  }

  const somaValor = () => {
    return items.reduce((total, item) => total + item.preco, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        {step === 'cart' && (
          <>
            <ul>
              {items.map((item) => (
                <CartItem key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <span>{formataPreco(item.preco)}</span>
                    <img
                      onClick={() => removeItem(item.id)}
                      src={lixeira}
                      alt=""
                    />
                  </div>
                </CartItem>
              ))}
            </ul>
            <Prices>
              <span>Valor total</span>
              <span>{formataPreco(somaValor())}</span>
            </Prices>
            <Button onClick={goToCheckoutFunction}>
              Continuar com a entrega
            </Button>
          </>
        )}
        {step === 'checkout' && (
          <>
            <Checkout />
          </>
        )}
        {step === 'payment' && (
          <>
            <Payment />
          </>
        )}
        {step === 'congratulations' && (
          <>
            <Congratulations />
          </>
        )}
      </SideBar>
    </CartContainer>
  )
}

export default Cart
