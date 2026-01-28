import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  CartGroup,
  CheckoutButton,
  CheckoutContainer,
  InputGroup,
  MesAnoGroup
} from './styles'
import { goToCheckout, goToCongratulations } from '../../../store/reducers/cart'
import { useFormik } from 'formik'
import * as yup from 'yup'

import { useSelector } from 'react-redux'
import { useCheckoutMutation } from '../../../services/api'

import { RootReducer } from '../../../store'
import { setOrderId } from '../../../store/reducers/checkout'

const Payment = () => {
  const { delivery } = useSelector((state: RootReducer) => state.checkout)
  const { items } = useSelector((state: RootReducer) => state.cart)

  const [checkout, { isLoading, isSuccess }] = useCheckoutMutation()

  const dispatch = useDispatch()

  const goToCheckoutFunction = () => {
    dispatch(goToCheckout())
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(goToCongratulations())
    }
  }, [isSuccess, dispatch])

  const form = useFormik({
    initialValues: {
      cardName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },

    validationSchema: yup.object({
      cardName: yup
        .string()
        .min(5, 'Nome inválido')
        .required('O campo é obrigatório'),

      cardNumber: yup
        .string()
        .min(16, 'Número inválido')
        .required('O campo é obrigatório'),

      cardCode: yup.string().min(3, 'CVV inválido').required('Obrigatório'),

      expiresMonth: yup
        .string()
        .min(2, 'Mês inválido')
        .required('O campo é obrigatório'),

      expiresYear: yup
        .string()
        .min(2, 'Ano inválido')
        .required('O campo é obrigatório')
    }),

    onSubmit: async (values) => {
      const payload = {
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        })),
        delivery,
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        }
      }

      try {
        const response: any = await checkout(payload).unwrap() // unwrap pega o retorno real
        dispatch(setOrderId(response.orderId)) // salva o orderId no Redux
      } catch (err) {
        console.error('Erro no checkout', err)
      }
    }
  })

  type FormFields = keyof typeof form.values

  const checkInputHasError = (fieldName: FormFields) =>
    Boolean(form.touched[fieldName] && form.errors[fieldName])

  return (
    <CheckoutContainer>
      <h2>Pagamento - Valor a pagar R$ 190,90</h2>

      <form onSubmit={form.handleSubmit}>
        <InputGroup>
          <label htmlFor="cardName">Nome no cartão</label>
          <input
            id="cardName"
            name="cardName"
            type="text"
            value={form.values.cardName}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={checkInputHasError('cardName') ? 'error' : ''}
          />
          {checkInputHasError('cardName') && (
            <small>{form.errors.cardName}</small>
          )}
        </InputGroup>

        <CartGroup>
          <InputGroup>
            <label htmlFor="cardNumber">Número do cartão</label>
            <input
              id="cardNumber"
              name="cardNumber"
              type="text"
              value={form.values.cardNumber}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('cardNumber') ? 'error' : ''}
            />
            {checkInputHasError('cardNumber') && (
              <small>{form.errors.cardNumber}</small>
            )}
          </InputGroup>

          <InputGroup>
            <label htmlFor="cardCode">CVV</label>
            <input
              id="cardCode"
              name="cardCode"
              type="text"
              value={form.values.cardCode}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('cardCode') ? 'error' : ''}
            />
            {checkInputHasError('cardCode') && (
              <small>{form.errors.cardCode}</small>
            )}
          </InputGroup>
        </CartGroup>

        <MesAnoGroup>
          <InputGroup>
            <label htmlFor="expiresMonth">Mês</label>
            <input
              id="expiresMonth"
              name="expiresMonth"
              type="text"
              value={form.values.expiresMonth}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('expiresMonth') ? 'error' : ''}
            />
            {checkInputHasError('expiresMonth') && (
              <small>{form.errors.expiresMonth}</small>
            )}
          </InputGroup>

          <InputGroup>
            <label htmlFor="expiresYear">Ano</label>
            <input
              id="expiresYear"
              name="expiresYear"
              type="text"
              value={form.values.expiresYear}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('expiresYear') ? 'error' : ''}
            />
            {checkInputHasError('expiresYear') && (
              <small>{form.errors.expiresYear}</small>
            )}
          </InputGroup>
        </MesAnoGroup>

        <CheckoutButton type="submit" disabled={!form.isValid || isLoading}>
          {isLoading ? 'Processando pagamento...' : 'Finalizar pagamento'}
        </CheckoutButton>

        <CheckoutButton type="button" onClick={goToCheckoutFunction}>
          Voltar para a edição de endereço
        </CheckoutButton>
      </form>
    </CheckoutContainer>
  )
}

export default Payment
