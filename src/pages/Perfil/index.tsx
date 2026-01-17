import BannerPerfil from '../../PerfilComponents/BannerPerfil'
import HeaderPerfil from '../../PerfilComponents/HeaderPerfil'
import RestaurantListPerfil from '../../PerfilComponents/RestaurantListPerfil'
import { useParams } from 'react-router-dom'
import { useGetRestauranteByIdQuery } from '../../services/api'

const Perfil = () => {
  const { id } = useParams()
  const { data: cardapio } = useGetRestauranteByIdQuery(id!)

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
