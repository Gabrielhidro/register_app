import { Button } from "@mui/material";
import styled from "styled-components";

export const SupplierProfContainer = styled.form`
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
  font-size: 16px;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 4px;
  color: ${props => props.theme.primaryColor};
`

export const SupplierContent = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 12px;
`

export const SupplierInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`

export const ProductItemListContainer = styled.div`
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

export const RemoveButton = styled(Button)`
  color: #fff !important;
  background-color: #d93434 !important;
  width: 200px !important;
  align-self: center !important;
`