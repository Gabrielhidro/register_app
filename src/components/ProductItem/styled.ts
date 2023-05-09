import styled from "styled-components";

export const ProductItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 0 5px ${(props) => props.theme.grayTextColor};
  gap: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 0 5px ${(props) => props.theme.primaryColor};
  }
`

export const Title = styled.h1`
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.theme.onBackgroundColor};
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;

  img {
    border-radius: 4px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const DescriptionContainer = styled.div`
  width: 100%;

  p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    color: ${props => props.theme.onBackgroundColor};
  }
`
