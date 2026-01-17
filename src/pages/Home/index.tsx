import RestaurantList from '../../components/RestaurantList'
import Header from '../../components/Header'
import { useGetRestaurantesQuery } from '../../services/api'

export type Restaurant1 = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }[]
}

const Home = () => {
  const { data: apiRestaurants = [] } = useGetRestaurantesQuery()

  return (
    <>
      <Header />
      <RestaurantList restaurants={apiRestaurants} />
    </>
  )
}

export default Home
