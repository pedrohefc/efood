import { useState } from 'react'
import RestaurantPerfil from '../RestaurantPerfil'
import {
  CloseButton,
  Container,
  List,
  Modal,
  ModalImg,
  ModalImgText,
  ModalText,
  ModalTitle,
  ModalWrapper,
  NewButton
} from './styles'
import close from '../../assets/images/close1.png'

import { Restaurant1 } from '../../pages/Home'
import { open, add } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'
import formataPreco from '../../utils/formataPreço'

type Props = {
  restaurantsPerfil: Restaurant1[]
}

const RestaurantListPerfil = ({ restaurantsPerfil }: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)
  const [itemSelecionado, setItemSelecionado] = useState<
    Restaurant1['cardapio'][0] | null
  >(null)

  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
    <>
      <Container>
        <div className="container">
          <List>
            {restaurantsPerfil.map((restaurante) =>
              restaurante.cardapio.map((item) => (
                <li key={item.id}>
                  <RestaurantPerfil
                    image={item.foto}
                    title={item.nome}
                    description={item.descricao}
                    onButtonClick={() => {
                      setItemSelecionado(item)
                      setModalEstaAberto(true)
                    }}
                  />
                </li>
              ))
            )}
          </List>
        </div>
      </Container>
      {itemSelecionado && (
        <ModalWrapper className={modalEstaAberto ? 'visivel' : ''}>
          <div onClick={() => setModalEstaAberto(false)} className="overlay" />
          <Modal className="container">
            <CloseButton
              onClick={() => setModalEstaAberto(false)}
              src={close}
              alt=""
            />
            <ModalImgText>
              <ModalImg src={itemSelecionado.foto} alt="Imagem pizza" />
              <ModalText>
                <ModalTitle>{itemSelecionado.nome}</ModalTitle>
                <p>{itemSelecionado.descricao}</p>
                {itemSelecionado.porcao.length === 8 ? (
                  <p>Serve: {itemSelecionado.porcao}</p>
                ) : (
                  <p>Serve: de {itemSelecionado.porcao}</p>
                )}
                <NewButton
                  onClick={() => {
                    dispatch(add(itemSelecionado))
                    openCart()
                    setModalEstaAberto(false)
                  }}
                >
                  Adicionar ao carrinho - {formataPreco(itemSelecionado.preco)}
                </NewButton>
              </ModalText>
            </ModalImgText>
          </Modal>
        </ModalWrapper>
      )}
    </>
  )
}

export default RestaurantListPerfil
