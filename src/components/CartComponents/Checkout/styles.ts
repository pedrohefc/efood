import styled from 'styled-components'
import Button from '../../Button'
import { cores } from '../../../styles'

export const CheckoutContainer = styled.div`
  color: ${cores.branco};
  font-weight: bold;

  input {
    padding: 8px;
    max-width: 100%;
    width: 100%;
    margin-bottom: 8px;
    border: 1px solid ${cores.branco};
    font-size: 14px;
    font-weight: bold;

    &.error {
      border: 1px solid red;
    }
  }

  h2 {
    font-size: 16px;
    margin-bottom: 16px;
  }

  form {
    margin-bottom: 24px;
  }
`

export const InputGroup = styled.div`
  label {
    display: block;
    font-size: 14px;
    margin-bottom: 8px;
  }

  small {
    min-height: 14px;
    color: red;
    background-color: aliceblue;
    max-width: 100%;
    font-size: 12px;
    display: block;
    margin-bottom: 8px;
    text-align: center;
  }
`

export const CepNumberGroup = styled.div`
  display: flex;
  justify-content: space-between;

  input {
    width: 155px;
  }
`
export const CheckoutButton = styled(Button)`
  && {
    display: block;
    background-color: ${cores.branco};
    color: ${cores.rosa};
    max-width: 100%;
    width: 100%;
  }

  &:first-of-type {
    margin-top: 24px;
    margin-bottom: 8px;
  }
`
