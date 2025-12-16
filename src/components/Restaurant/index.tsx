import estrela from '../../assets/images/estrela.png'
import Tag from '../Tag'
import Button from '../Button'
import * as S from './styles'
import { Link } from 'react-router-dom'

type Props = {
  id: number
  title: string
  destacado?: boolean
  tipo: string
  image: string
  grade: number
  description: string
}

const Restaurant = ({
  image,
  title,
  grade,
  description,
  tipo,
  destacado,
  id
}: Props) => (
  <S.Card>
    <img src={image} alt={title} />
    <S.CardTags>
      {destacado && <Tag>Destaque da semana</Tag>}
      <Tag>{tipo}</Tag>
    </S.CardTags>
    <S.CardTexts>
      <S.TitleLogo>
        <h2>{title}</h2>
        <div>
          <span>{grade}</span> <img src={estrela} alt="" />
        </div>
      </S.TitleLogo>
      <S.Paragraph>
        {description.length > 190
          ? description.slice(0, 190) + '...'
          : description}
      </S.Paragraph>
      <Link to={`/Perfil/${id}`}>
        <Button>Saiba mais</Button>
      </Link>
    </S.CardTexts>
  </S.Card>
)

export default Restaurant
