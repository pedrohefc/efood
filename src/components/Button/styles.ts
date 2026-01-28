import { styled } from 'styled-components'
import { cores } from '../../styles'

export const ButtonLink = styled.button`
  background-color: ${cores.rosa};
  color: ${cores.brancoTag};
  padding: 4px 6px;
  font-weight: 700;
  font-size: 14px;
  display: inline-block;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
