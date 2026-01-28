import { useDispatch, useSelector } from 'react-redux'
import { CongratulationsButton, CongratulationsContainer } from './styles'
import { sucess } from '../../../store/reducers/cart'
import { RootReducer } from '../../../store'

const Congratulations = () => {
  const dispatch = useDispatch()
  const orderId = useSelector((state: RootReducer) => state.checkout.orderId)

  const sucessFunction = () => {
    dispatch(sucess())
  }

  return (
    <CongratulationsContainer>
      <h2>{`Pedido realizado - ${orderId || ''}`}</h2>
      <p>
        Estamos felizes em informar que seu pedido já está em processo de
        preparação e, em breve, será entregue no endereço fornecido.
      </p>
      <p>
        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a
        realizar cobranças extras.{' '}
      </p>
      <p>
        Lembre-se da importância de higienizar as mãos após o recebimento do
        pedido, garantindo assim sua segurança e bem-estar durante a refeição.
      </p>
      <p>
        Esperamos que desfrute de uma deliciosa e agradável experiência
        gastronômica. Bom apetite!
      </p>
      <CongratulationsButton onClick={sucessFunction}>
        Concluir
      </CongratulationsButton>
    </CongratulationsContainer>
  )
}

export default Congratulations
