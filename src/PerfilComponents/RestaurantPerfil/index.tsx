import { Button, Card, Paragraph, SubCard, Title } from './styles'

type Props = {
  image: string
  title: string
  description: string
  button: string
}

const RestaurantPerfil = ({ image, title, description, button }: Props) => (
  <Card>
    <SubCard>
      <img src={image} alt="Pizza" />
      <div>
        <Title>{title}</Title>
        <Paragraph>{description}</Paragraph>
        <Button>{button}</Button>
      </div>
    </SubCard>
  </Card>
)

export default RestaurantPerfil
