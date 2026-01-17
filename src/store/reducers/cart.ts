import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Restaurant1 } from '../../pages/Home'

type ItemCarrinho = Restaurant1['cardapio'][0]

type CartState = {
  items: ItemCarrinho[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
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

export const { open, close, remove, add } = cartSlice.actions
export default cartSlice.reducer
