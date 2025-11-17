import RestaurantPerfil from '../../models/restaurantPerfil'
import BannerPerfil from '../../PerfilComponents/BannerPerfil'
import HeaderPerfil from '../../PerfilComponents/HeaderPerfil'
import RestaurantListPerfil from '../../PerfilComponents/RestaurantListPerfil'
import pizza from '../../assets/images/pizza.png'

const restaurantsPerfilOptions: RestaurantPerfil[] = [
  {
    button: 'Adicionar ao carrinho',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    id: 1,
    image: pizza,
    title: 'Pizza Marguerita'
  },
  {
    button: 'Adicionar ao carrinho',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    id: 2,
    image: pizza,
    title: 'Pizza Marguerita'
  },
  {
    button: 'Adicionar ao carrinho',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    id: 3,
    image: pizza,
    title: 'Pizza Marguerita'
  },
  {
    button: 'Adicionar ao carrinho',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    id: 4,
    image: pizza,
    title: 'Pizza Marguerita'
  },
  {
    button: 'Adicionar ao carrinho',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    id: 5,
    image: pizza,
    title: 'Pizza Marguerita'
  },
  {
    button: 'Adicionar ao carrinho',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    id: 6,
    image: pizza,
    title: 'Pizza Marguerita'
  }
]

const Perfil = () => (
  <div>
    <HeaderPerfil />
    <BannerPerfil />
    <RestaurantListPerfil restaurantsPerfil={restaurantsPerfilOptions} />
  </div>
)
export default Perfil
