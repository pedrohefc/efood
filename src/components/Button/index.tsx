import { ButtonLink } from './styles'

export type Props = {
  children: string
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
}

const Button = ({
  children,
  className,
  onClick,
  type = 'button',
  disabled = false
}: Props) => (
  <ButtonLink
    disabled={disabled}
    type={type}
    onClick={onClick}
    className={className}
  >
    {children}
  </ButtonLink>
)

export default Button
