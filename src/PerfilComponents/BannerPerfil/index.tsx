import { Bannerimage, Title1, Title2 } from './styles'

type Props = {
  capa: string
  titulo: string
  tipo: string
}

const BannerPerfil = ({ capa, titulo, tipo }: Props) => (
  <Bannerimage style={{ backgroundImage: `url(${capa})` }}>
    <div className="container">
      <Title2>{tipo}</Title2>
      <Title1>{titulo}</Title1>
    </div>
  </Bannerimage>
)

export default BannerPerfil
