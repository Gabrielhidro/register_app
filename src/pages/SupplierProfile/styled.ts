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

export const SupplierContent = styled.div`
  display: flex;
`