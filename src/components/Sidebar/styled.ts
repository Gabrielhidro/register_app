import styled from 'styled-components';

interface SidebarProps {
  isOpen: boolean;
}

export const SidebarContainer = styled.div<SidebarProps>`
  min-width: ${({ isOpen }) => (isOpen ? '300px' : '82px')};
  width: ${({ isOpen }) => (isOpen ? '300px' : '82px')};
  display: flex;
  flex-direction: column;
  height: auto;
  min-height: 100vh;
  transition: all 0.3s ease-in-out;
  
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
  gap: 12px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  outline: none;
  color: ${props => props.theme.onBackgroundColor};

  span {
    flex-wrap: nowrap;
    overflow: hidden;
  }

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

export const SidebarFooter = styled.div<SidebarProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  flex-wrap: nowrap;
  overflow: hidden;

  color: ${props => props.theme.onBackgroundColor};
  background-color: #d7daf37d;
  border-radius: 8px;

  margin: ${({ isOpen }) => (isOpen ? '20px' : '10px')};
  padding: ${({ isOpen }) => (isOpen ? '12px' : '4px')};
`

export const ToggleSidebarButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  position: absolute;
  top: 20px;
  right: -12px;
  
  width: 24px;
  height: 23px;
  
  border-radius: 99999px;
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.onPrimaryColor};
  cursor: pointer;
  
  transition: all 0.3s ease-in-out;
`