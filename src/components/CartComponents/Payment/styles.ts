import styled from 'styled-components'
import Button from '../../Button'
import { cores } from '../../../styles'

export const CheckoutContainer = styled.div`
  color: ${cores.branco};
  font-weight: bold;

  h2 {
    font-size: 16px;
    margin-bottom: 16px;
  }

  form {
    margin-bottom: 24px;
  }

  input {
    padding: 8px;
    width: 100%;
    border: 1px solid transparent;
    font-size: 14px;
    font-weight: bold;
    outline: none;
    margin-bottom: 8px;
  }

  input.error {
    border-color: red;
  }
`

export const InputGroup = styled.div`
  margin-bottom: 8px;

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

export const CartGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;

  > div:first-child {
    width: 228px;
  }

  > div:last-child {
    width: 87px;
  }
`

export const MesAnoGroup = styled.div`
  display: flex;
  gap: 16px;

  > div {
    width: 100%;
  }
`

export const CheckoutButton = styled(Button)`
  display: block;
  background-color: ${cores.branco};
  color: ${cores.rosa};
  width: 100%;
  margin-top: 8px;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
