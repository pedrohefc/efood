import RestaurantModel from '../../models/restaurant'
import Restaurant from '../Restaurant'
import { Container, List } from './styles'

type Props = {
  restaurants: RestaurantModel[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <Container>
    <div className="container">
      <List>
        {restaurants.map((item) => (
          <Restaurant
            image={item.image}
            infos={item.infos}
            title={item.title}
            grade={item.grade}
            description={item.description}
            button={item.button}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default RestaurantList
