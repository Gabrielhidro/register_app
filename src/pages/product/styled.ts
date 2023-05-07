import { Button } from '@mui/material'
import styled from 'styled-components'

interface InputContainerProps {
  items: number
}

export const ProductContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-block: 20px;
  padding-inline: 10%;
`

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
  color: ${props => props.theme.onBackgroundColor};
`

export const SubTitle = styled.span`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 12px;
  color: ${props => props.theme.grayTextColor};
`

export const InputContainer = styled.div<InputContainerProps>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.items}, 1fr);
  grid-gap: 20px;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 0px;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const TextError = styled.span`
    font-family: "Roboto","Helvetica","Arial",sans-serif;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.66;
    letter-spacing: 0.03333em;
    text-align: left;
    margin-top: 3px;
    margin-right: 14px;
    margin-bottom: 0;
    margin-left: 14px;
    color: #d32f2f;
`

export const SaveButton = styled(Button)`
  margin-top: 20px !important;
  color: ${props => props.theme.onPrimaryColor} !important;
  background-color: ${props => props.theme.primaryColor} !important;
  width: 200px !important;
  align-self: center !important;
`