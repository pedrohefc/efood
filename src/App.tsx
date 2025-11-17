import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'
import { Container, Globalcss } from './styles'
import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <Globalcss />
      <Container>
        <Rotas />
        <Footer />
      </Container>
    </BrowserRouter>
  )
}

export default App
