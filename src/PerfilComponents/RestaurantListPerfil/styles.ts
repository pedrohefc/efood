import styled from 'styled-components'
import { cores } from '../../styles'
import { Button } from '../RestaurantPerfil/styles'

export const Container = styled.section`
  margin-top: 56px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  list-style: none;
`

export const ModalWrapper = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const Modal = styled.div`
  height: 344px;
  width: 100%;
  background-color: ${cores.rosa};
  color: ${cores.branco};

  position: fixed;
  top: 490px;
  left: 50%;
  transform: translateX(-50%);
`
export const ModalTitle = styled.h3`
  font-weight: 900;
  font-size: 18px;
`

export const ModalImgText = styled.div`
  display: flex;
  padding: 32px;
`

export const ModalImg = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  margin-right: 24px;
`

export const ModalText = styled.div`
  p {
    margin: 16px 0;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
  }
`

export const NewButton = styled(Button)`
  width: 218px;
  margin-top: 0;
  line-height: 100%;
  text-align: center;
  position: absolute;
  bottom: 59px;
`
export const CloseButton = styled.img`
  position: absolute;
  right: 8px;
  top: 8px;
  cursor: pointer;
`
