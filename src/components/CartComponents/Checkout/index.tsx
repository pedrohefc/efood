import { useDispatch } from 'react-redux'
import {
  CepNumberGroup,
  CheckoutButton,
  CheckoutContainer,
  InputGroup
} from './styles'
import { goToPayment, backToCart } from '../../../store/reducers/cart'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { setDelivery } from '../../../store/reducers/checkout'

const Checkout = () => {
  const dispatch = useDispatch()

  const goToPaymentFunction = () => {
    dispatch(goToPayment())
  }

  const backToCartFunction = () => {
    dispatch(backToCart())
  }

  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      zipCode: '',
      phone: '',
      complement: ''
    },

    validationSchema: yup.object({
      fullName: yup
        .string()
        .min(5, 'O nome precisa ter no mínimo 5 caracteres')
        .required('O campo é obrigatório'),

      address: yup
        .string()
        .min(5, 'O endereço precisa ter no mínimo 5 caracteres')
        .required('O campo é obrigatório'),

      city: yup
        .string()
        .min(2, 'O nome da cidade é muito curto')
        .required('O campo é obrigatório'),

      zipCode: yup.string().required('O campo é obrigatório'),

      phone: yup.string().required('O campo é obrigatório'),

      complement: yup.string().notRequired()
    }),

    onSubmit: (values) => {
      setDelivery({
        receiver: values.fullName,
        address: {
          description: values.address,
          city: values.city,
          zipCode: values.zipCode,
          number: Number(values.phone),
          complement: values.complement
        }
      })
      goToPaymentFunction()
    }
  })

  type FormFields = keyof typeof form.values

  const checkInputHasError = (fieldName: FormFields) => {
    return Boolean(form.touched[fieldName] && form.errors[fieldName])
  }

  return (
    <CheckoutContainer>
      <h2>Entrega</h2>
      <form onSubmit={form.handleSubmit}>
        <InputGroup>
          <label htmlFor="fullName">Quem irá receber</label>
          <input
            onBlur={form.handleBlur}
            onChange={form.handleChange}
            value={form.values.fullName}
            name="fullName"
            type="text"
            id="fullName"
            className={checkInputHasError('fullName') ? 'error' : ''}
          />
          {checkInputHasError('fullName') && (
            <small>{form.errors.fullName}</small>
          )}
        </InputGroup>
        <InputGroup>
          <label htmlFor="address">Endereço</label>
          <input
            onBlur={form.handleBlur}
            onChange={form.handleChange}
            value={form.values.address}
            name="address"
            type="text"
            id="address"
            className={checkInputHasError('address') ? 'error' : ''}
          />
          {checkInputHasError('address') && (
            <small>{form.errors.address}</small>
          )}
        </InputGroup>
        <InputGroup>
          <label htmlFor="city">Cidade</label>
          <input
            onBlur={form.handleBlur}
            onChange={form.handleChange}
            value={form.values.city}
            name="city"
            type="text"
            id="city"
            className={checkInputHasError('city') ? 'error' : ''}
          />
          {checkInputHasError('city') && <small>{form.errors.city}</small>}
        </InputGroup>
        <CepNumberGroup>
          <InputGroup>
            <label htmlFor="zipCode">CEP</label>
            <input
              onBlur={form.handleBlur}
              onChange={form.handleChange}
              value={form.values.zipCode}
              name="zipCode"
              type="text"
              id="zipCode"
              className={checkInputHasError('zipCode') ? 'error' : ''}
            />
            {checkInputHasError('zipCode') && (
              <small>{form.errors.zipCode}</small>
            )}
          </InputGroup>
          <InputGroup>
            <label htmlFor="phone">Número</label>
            <input
              onBlur={form.handleBlur}
              onChange={form.handleChange}
              value={form.values.phone}
              name="phone"
              type="tel"
              id="phone"
              className={checkInputHasError('phone') ? 'error' : ''}
            />
            {checkInputHasError('phone') && <small>{form.errors.phone}</small>}
          </InputGroup>
        </CepNumberGroup>
        <InputGroup>
          <label htmlFor="complement">Complemento (opcional)</label>
          <input
            onBlur={form.handleBlur}
            onChange={form.handleChange}
            value={form.values.complement}
            name="complement"
            type="text"
            id="complement"
          />
        </InputGroup>
        <CheckoutButton
          disabled={!form.isValid || form.isSubmitting}
          type="submit"
        >
          Continuar com o pagamento
        </CheckoutButton>
        <CheckoutButton type="button" onClick={backToCartFunction}>
          Voltar para o carrinho
        </CheckoutButton>
      </form>
    </CheckoutContainer>
  )
}

export default Checkout
