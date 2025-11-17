import estrela from '../../assets/images/estrela.png'
import Tag from '../Tag'
import Button from '../Button'
import * as S from './styles'
import { Link } from 'react-router-dom'

type Props = {
  image: string
  infos: string[]
  title: string
  grade: number
  description: string
  button: string
}

const Restaurant = ({
  image,
  infos,
  title,
  grade,
  description,
  button
}: Props) => (
  <S.Card>
    <img src={image} alt={title} />
    <S.CardTags>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </S.CardTags>
    <S.CardTexts>
      <S.TitleLogo>
        <h2>{title}</h2>
        <div>
          <span>{grade}</span> <img src={estrela} alt="" />
        </div>
      </S.TitleLogo>
      <S.Paragraph>{description}</S.Paragraph>
      <Link to={'/Perfil'}>
        <Button>{button}</Button>
      </Link>
    </S.CardTexts>
  </S.Card>
)

export default Restaurant
