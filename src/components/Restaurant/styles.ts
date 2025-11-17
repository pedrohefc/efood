import { styled } from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  width: 472px;
  position: relative;
  color: ${cores.rosa};
  background-color: ${cores.branco};

  img:first-child {
    display: block;
  }
`

export const CardTags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;

  ${TagContainer} {
    margin-left: 8px;
  }
`

export const CardTexts = styled.div`
  border-width: 0px 1px 1px 1px;
  border-style: solid;
  border-color: ${cores.rosa};
  padding: 8px;
`
export const TitleLogo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  font-weight: 700;

  h2,
  span {
    font-size: 18px;
  }

  div {
    display: flex;
    align-items: flex-start;

    img {
      margin-left: 8px;
    }
  }
`

export const Paragraph = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
`
