import { styled } from 'styled-components'
import banner from '../../assets/images/bannerperfil.png'
import { cores } from '../../styles'

export const Bannerimage = styled.section`
  background-image: url(${banner});
  background-size: cover;
  font-size: 32px;
  color: ${cores.branco};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
  }

  & > * {
    position: relative;
    z-index: 2;
  }
`

export const Title2 = styled.h2`
  padding: 25px 0 125.5px;
  font-weight: 100;
  font-style: thin;
`

export const Title1 = styled.h1`
  padding-bottom: 32px;
  font-weight: 900;
  font-style: black;
  font-size: 32px;
`
