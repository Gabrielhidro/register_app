import styled from 'styled-components';

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: auto;
  min-height: 100vh;
  
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.onBackgroundColor};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  
  box-sizing: border-box;
  position: relative;
  `

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${props => props.theme.onBackgroundColor};
  opacity: 0.2;
`

export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  padding: 20px;
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 40px;

  img {
    width: 100%;
    height: 100%;
  }
`

export const SidebarBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  flex: 1;
`

export const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${props => props.theme.primaryColor};
    transform: translateX(3px);
  }
`

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 40px;
`

export const SidebarFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  margin: 20px;
  color: ${props => props.theme.onBackgroundColor};
  background-color: #d7daf37d;
  border-radius: 8px;
  padding: 12px 8px;
`

export const ToggleSidebarButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 99999px;
  width: 32px;
  height: 32px;
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.onPrimaryColor};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  position: absolute;
  top: 16px;
  right: -16px;
`