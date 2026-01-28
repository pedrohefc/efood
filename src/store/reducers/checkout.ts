import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Address = {
  description: string
  city: string
  zipCode: string
  number: number
  complement?: string
}

type Card = {
  name: string
  number: string
  code: number
  expires: {
    month: number
    year: number
  }
}

type CheckoutState = {
  delivery?: {
    receiver: string
    address: Address
  }
  payment?: {
    card: Card
  }
  orderId?: string | number // <--- aqui armazenamos o número do pedido
  step: 'cart' | 'checkout' | 'congratulations' // <--- opcional, facilita controlar telas
}

const initialState: CheckoutState = {
  step: 'cart'
}

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    setDelivery: (state, action: PayloadAction<CheckoutState['delivery']>) => {
      state.delivery = action.payload
      state.step = 'checkout' // ao setar delivery, avançamos o step
    },
    setPayment: (state, action: PayloadAction<CheckoutState['payment']>) => {
      state.payment = action.payload
    },
    setOrderId: (state, action: PayloadAction<CheckoutState['orderId']>) => {
      state.orderId = action.payload
      state.step = 'congratulations' // quando recebemos orderId, avançamos para tela de sucesso
    },
    resetCheckout: (state) => {
      state.delivery = undefined
      state.payment = undefined
      state.orderId = undefined
      state.step = 'cart'
    }
  }
})

export const { setDelivery, setPayment, setOrderId, resetCheckout } =
  checkoutSlice.actions
export default checkoutSlice.reducer
