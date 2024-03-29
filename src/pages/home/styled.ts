import styled from 'styled-components'

export const HomeContainer = styled.div`
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