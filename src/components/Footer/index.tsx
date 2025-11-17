import logo from '../../assets/images/logo.png'
import redessociais from '../../assets/images/redessociais.png'
import { EfoodLogo, FooterContainer, Paragraph } from './styles'

const Footer = () => (
  <FooterContainer>
    <EfoodLogo src={logo} alt="LogoEfood" />
    <div>
      <img src={redessociais} alt="LogoFacebook" />
    </div>
    <Paragraph>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Paragraph>
  </FooterContainer>
)

export default Footer
