import styled from 'styled-components'

import fundo from '../../assets/images/fundo.png'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  background-image: url(${fundo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

export const List = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  position: relative;

  li {
    cursor: pointer;
  }

  img {
    margin-left: 36%;
  }

  #text1,
  #text2 {
    font-weight: 900;
    font-size: 18px;
    color: ${cores.rosa};
    text-decoration: none;
  }
`
export const MenuNav = styled.nav`
  padding: 40px 0 65px;
`
