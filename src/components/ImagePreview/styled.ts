import styled from 'styled-components'

export const ImagePreviewContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  height: 260;
`

export const ImagePreviewContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 260px;
  height: 260px;

  border: 1px dashed ${props => props.theme.grayTextColor};
  background-color: ${props => props.theme.backgroundColor};
  border-radius: 4px;

  img {
    width: 100%;
  }
`
