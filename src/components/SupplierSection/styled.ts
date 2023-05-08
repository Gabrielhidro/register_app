import styled from "styled-components";

export const SupplierSectionContainer = styled.div`
  display: flex; 
  flex-direction: column;
  gap: 12px;
`

export const StyledSupplierRow = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.onBackgroundColor};
  font-weight: 500;
  border: 1px solid ${(props) => props.theme.onBackgroundColor};
  border-radius: 8px;
  padding: 12px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.onBackgroundColor};
    color: ${(props) => props.theme.backgroundColor};
  }
`