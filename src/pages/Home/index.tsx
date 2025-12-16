import RestaurantList from '../../components/RestaurantList'
import Header from '../../components/Header'
import { useEffect, useState } from 'react'

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
  const [apiRestaurants, setApiRestaurants] = useState<Restaurant1[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setApiRestaurants(res))
  }, [])

  return (
    <>
      <Header />
      <RestaurantList restaurants={apiRestaurants} />
    </>
  )
}

export default Home
