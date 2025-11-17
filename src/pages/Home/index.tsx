import Restaurant from '../../models/restaurant'

import sushi from '../../assets/images/sushi.png'
import macarrao from '../../assets/images/macarrao.png'
import RestaurantList from '../../components/RestaurantList'
import Header from '../../components/Header'

const restaurantsOptions: Restaurant[] = [
  {
    image: sushi,
    infos: ['Destaque da semana', 'Japonesa'],
    title: 'Hioki Sushi',
    grade: 4.5,
    description: `Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.${(<br />)}Experimente o Japão sem sair do lar com nosso delivery!`,
    button: 'Saiba mais',
    id: 1
  },
  {
    image: macarrao,
    infos: ['Japonesa'],
    title: 'La Dolce Vita Trattoria',
    grade: 4.9,
    description: `A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!`,
    button: 'Saiba mais',
    id: 2
  },
  {
    image: sushi,
    infos: ['Destaque da semana', 'Japonesa'],
    title: 'Hioki Sushi',
    grade: 4.5,
    description: `Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.${(<br />)}Experimente o Japão sem sair do lar com nosso delivery!`,
    button: 'Saiba mais',
    id: 1
  },
  {
    image: macarrao,
    infos: ['Japonesa'],
    title: 'La Dolce Vita Trattoria',
    grade: 4.9,
    description: `A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!`,
    button: 'Saiba mais',
    id: 2
  },
  {
    image: sushi,
    infos: ['Destaque da semana', 'Japonesa'],
    title: 'Hioki Sushi',
    grade: 4.5,
    description: `Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.${(<br />)}Experimente o Japão sem sair do lar com nosso delivery!`,
    button: 'Saiba mais',
    id: 1
  },
  {
    image: macarrao,
    infos: ['Japonesa'],
    title: 'La Dolce Vita Trattoria',
    grade: 4.9,
    description: `A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!`,
    button: 'Saiba mais',
    id: 2
  }
]

const Home = () => (
  <>
    <Header />
    <RestaurantList restaurants={restaurantsOptions} />
  </>
)

export default Home
