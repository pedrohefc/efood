import { useEffect, useState } from 'react'
import BannerPerfil from '../../PerfilComponents/BannerPerfil'
import HeaderPerfil from '../../PerfilComponents/HeaderPerfil'
import RestaurantListPerfil from '../../PerfilComponents/RestaurantListPerfil'
import { useParams } from 'react-router-dom'
import { Restaurant1 } from '../Home'

const Perfil = () => {
  const { id } = useParams()
  const [cardapio, setCardapio] = useState<Restaurant1 | null>(null)

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then(setCardapio)
  }, [id])

  return (
    <div>
      {cardapio && (
        <>
          <HeaderPerfil />
          <BannerPerfil
            capa={cardapio.capa}
            titulo={cardapio.titulo}
            tipo={cardapio.tipo}
          />
          <RestaurantListPerfil restaurantsPerfil={[cardapio]} />
        </>
      )}
    </div>
  )
}
export default Perfil
