import { Button, InputLabel, Select, TextField } from '@mui/material'
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
  gap: 6px;
`

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${props => props.theme.onBackgroundColor};
`

export const SubTitle = styled.span`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 12px;
  color: ${props => props.theme.grayTextColor};
`

export const SectionTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  margin-top: 12px;
  margin-bottom: 4px;
  color: ${props => props.theme.primaryColor};
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

export const StyledTextField = styled(TextField)`
  fieldset, textarea, label {
    border-color: ${props => props.theme.primaryColor} !important;
    color: ${props => props.theme.primaryColor} !important;
  }

  input {
    color: ${props => props.theme.onBackgroundColor} !important;
  }
`;

export const StyledInputLabel = styled(InputLabel)`
  color: ${props => props.theme.primaryColor} !important;
`

export const StyledSelect = styled(Select)`
  fieldset, label, svg, div {
    border-color: ${props => props.theme.primaryColor} !important;
    color: ${props => props.theme.primaryColor} !important;
  }
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