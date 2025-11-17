import RestaurantPerfil from '../RestaurantPerfil'
import { Container, List } from './styles'

import RestaurantsPerfilModel from '../../models/restaurantPerfil'

type Props = {
  restaurantsPerfil: RestaurantsPerfilModel[]
}

const RestaurantListPerfil = ({ restaurantsPerfil }: Props) => (
  <Container>
    <div className="container">
      <List>
        {restaurantsPerfil.map((item2) => (
          <li key={item2.id}>
            <RestaurantPerfil
              image={item2.image}
              title={item2.title}
              description={item2.description}
              button={item2.button}
            />
          </li>
        ))}
      </List>
    </div>
  </Container>
)

export default RestaurantListPerfil
