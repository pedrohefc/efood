import { styled } from 'styled-components'
import { cores } from '../../../styles'
import Button from '../../Button'

export const CongratulationsContainer = styled.div`
  color: ${cores.branco};

  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    font-weight: bold;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 32px;
  }
`
export const CongratulationsButton = styled(Button)`
  background-color: ${cores.branco};
  color: ${cores.rosa};
  max-width: 100%;
  width: 100%;
`
