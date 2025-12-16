import { Button, Card, Paragraph, SubCard, Title } from './styles'

type Props = {
  image: string
  title: string
  description: string
  onButtonClick: () => void
}

const RestaurantPerfil = ({
  image,
  title,
  description,
  onButtonClick
}: Props) => (
  <Card>
    <SubCard>
      <img src={image} alt="Pizza" />
      <div>
        <Title>{title}</Title>
        <Paragraph>
          {description.length > 120
            ? description.slice(0, 120) + '...'
            : description}
        </Paragraph>
        <Button onClick={onButtonClick}>Mais detalhes</Button>
      </div>
    </SubCard>
  </Card>
)

export default RestaurantPerfil
