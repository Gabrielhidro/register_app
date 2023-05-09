import styled from "styled-components";

export const ProductDetailsContainer = styled.form`
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

export const ProductContent = styled.div`
  margin-top: 40px;
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  img {
    width: 100%;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  h2 {
    font-size: 20px;
    font-weight: 700;
    color: ${props => props.theme.onBackgroundColor};
    margin-bottom: 8px;
  }

  p {
    font-size: 16px;
    line-height: 1.5;
    font-weight: 500;
    color: ${props => props.theme.grayTextColor};
  }

`
