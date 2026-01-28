import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Restaurant1 } from '../../pages/Home'

type CartStep = 'cart' | 'checkout' | 'payment' | 'congratulations'

type ItemCarrinho = Restaurant1['cardapio'][0]

type CartState = {
  items: ItemCarrinho[]
  isOpen: boolean
  step: CartStep
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  step: 'cart'
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true
      state.step = 'cart'
    },
    close: (state) => {
      state.isOpen = false
      state.step = 'cart'
    },
    goToCheckout: (state) => {
      state.step = 'checkout'
    },
    goToPayment: (state) => {
      state.step = 'payment'
    },
    backToCart: (state) => {
      state.step = 'cart'
    },
    goToCongratulations: (state) => {
      state.step = 'congratulations'
    },
    sucess: (state) => {
      state.isOpen = false
      state.step = 'cart'
      state.items = []
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)

      if (state.items.length === 0) {
        state.isOpen = false
      }
    },
    add: (state, action: PayloadAction<ItemCarrinho>) => {
      const prato = state.items.find((item) => item.id === action.payload.id)

      if (!prato) {
        state.items.push(action.payload)
      } else {
        alert('Este prato já foi adicionado ao carrinho!!!')
      }
    }
  }
})

export const {
  open,
  close,
  remove,
  add,
  backToCart,
  goToCheckout,
  goToPayment,
  goToCongratulations,
  sucess
} = cartSlice.actions
export default cartSlice.reducer
