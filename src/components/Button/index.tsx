import { ButtonLink } from './styles'

export type Props = {
  children: string
}

const Button = ({ children }: Props) => <ButtonLink>{children}</ButtonLink>

export default Button
