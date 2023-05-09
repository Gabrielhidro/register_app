import { Button } from '@mui/material'
import styled from 'styled-components'
import { TextField } from "@mui/material";

interface InputContainerProps {
  items: number
}


export const SupplierContainer = styled.form`
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

export const StyledTextField = styled(TextField)`
  fieldset, label {
    border-color: ${props => props.theme.primaryColor} !important;
    color: ${props => props.theme.primaryColor} !important;
  }

  input {
    color: ${props => props.theme.onBackgroundColor} !important;
  }
`;

export const ProductListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 425px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const SaveButton = styled(Button)`
  margin-top: 20px !important;
  color: ${props => props.theme.onPrimaryColor} !important;
  background-color: ${props => props.theme.primaryColor} !important;
  width: 200px !important;
  align-self: center !important;
`