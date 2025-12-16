import { Restaurant1 } from '../../pages/Home'
import Restaurant from '../Restaurant'
import { Container, List } from './styles'

type Props = {
  restaurants: Restaurant1[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <Container>
    <div className="container">
      <List>
        {restaurants.map((item) => (
          <Restaurant
            id={item.id}
            tipo={item.tipo}
            destacado={item.destacado}
            image={item.capa}
            title={item.titulo}
            grade={item.avaliacao}
            description={item.descricao}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default RestaurantList
