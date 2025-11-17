import { styled } from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  width: 320px;
  background-color: ${cores.rosa};
`

export const SubCard = styled.div`
  padding: 8px;
  color: ${cores.branco};
`
export const Title = styled.h3`
  padding: 8px 0;
  font-weight: 900;
  font-style: black;
  font-size: 16px;
`

export const Paragraph = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`

export const Button = styled.button`
  margin-top: 8px;
  width: 100%;
  height: 24px;
  color: ${cores.rosa};
  background-color: ${cores.brancoBody};
  font-weight: 700;
  font-style: bold;
  font-size: 14px;
  cursor: pointer;
  border: none;
`
