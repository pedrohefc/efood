import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'
import { Container, Globalcss } from './styles'
import Rotas from './routes'
import Cart from './components/CartComponents/Cart'
import { Provider } from 'react-redux'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Globalcss />
        <Container>
          <Rotas />
          <Footer />
        </Container>
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
