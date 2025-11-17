import styled from 'styled-components'
import { cores } from '../../styles'
import fundo from '../../assets/images/fundo.png'

export const HeaderBar = styled.header`
  background-image: url(${fundo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  text-align: center;

  img {
    padding: 40px 0 140px;
  }
`
export const Title = styled.h1`
  padding-bottom: 40px;
  font-weight: 900;
  font-size: 36px;
  color: ${cores.rosa};
`
