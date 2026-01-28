import styled from 'styled-components'
import { cores } from '../../../styles'
import { ButtonLink } from '../../Button/styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 2;

  &.is-open {
    display: flex;
  }
`

export const SideBar = styled.aside`
  background-color: ${cores.rosa};
  z-index: 1;
  max-width: 360px;
  width: 100%;
  padding: 32px 8px 0;
`

export const CartItem = styled.li`
  background-color: ${cores.branco};
  color: ${cores.rosa};
  padding: 8px;
  display: flex;
  height: 100px;
  margin-bottom: 16px;
  position: relative;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
    cursor: pointer;
  }

  h3 {
    font-weight: bold;
    font-size: 18px;
    line-height: 100%;
    margin-bottom: 16px;
  }

  span {
    font-size: 14px;
  }

  div {
    img {
      width: 16px;
      height: 16px;
      position: absolute;
      right: 0;
      bottom: 8px;
    }
  }
`

export const Prices = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  line-height: 100%;
  font-size: 14px;
  color: ${cores.branco};
  margin-top: 24px;
  margin-bottom: 16px;
`
export const Button = styled(ButtonLink)`
  color: ${cores.rosa};
  background-color: ${cores.branco};
  width: 100%;
`
