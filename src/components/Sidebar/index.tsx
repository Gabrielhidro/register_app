import { Divider, IconContainer, LogoContainer, SidebarBody, SidebarContainer, SidebarFooter, SidebarHeader, SidebarItem, ToggleSidebarButton } from "./styled";
import { MdHome, MdOutlineShoppingBag, MdFace6, MdOutlineKeyboardArrowLeft, MdDarkMode, MdLightMode } from 'react-icons/md'
import { useState } from 'react'
import Switch from '@mui/material/Switch';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <SidebarContainer isOpen={isOpenSidebar}>
      <SidebarHeader >
        <LogoContainer>
          <img src="../../../public/logo-g.png" alt="Logo" />
        </LogoContainer>
      </SidebarHeader>

      <Divider />

      <SidebarBody>
        <Link style={{ textDecoration: 'none' }} to="/">
          <SidebarItem>
            <IconContainer>
              <MdHome size={24} />
            </IconContainer>
            {isOpenSidebar && <span>Home</span>}
          </SidebarItem>
        </Link>

        <Link style={{ textDecoration: 'none' }} to="/product">
          <SidebarItem>
            <IconContainer>
              <MdOutlineShoppingBag size={24} />
            </IconContainer>
            {isOpenSidebar && <span>Produtos</span>}
          </SidebarItem>
        </Link>

        <Link style={{ textDecoration: 'none' }} to="/supplier">
          <SidebarItem>
            <IconContainer>
              <MdFace6 size={24} />
            </IconContainer>
            {isOpenSidebar && <span>Fornecedor</span>}
          </SidebarItem>
        </Link>
      </SidebarBody>


      <SidebarFooter isOpen={isOpenSidebar}>
        {isOpenSidebar && (
          <>
            {isDarkMode ? <MdDarkMode size={24} /> : <MdLightMode size={24} />}
            <span>{isDarkMode ? 'Dark mode' : 'Light mode'}</span>
          </>
        )}

        <Switch
          onChange={() => setIsDarkMode(!isDarkMode)}
        />
      </SidebarFooter>

      <ToggleSidebarButton onClick={() => setIsOpenSidebar(!isOpenSidebar)}>
        <MdOutlineKeyboardArrowLeft size={20} style={isOpenSidebar ? { transform: 'rotate(-180deg)', transition: 'all 300ms ease-in-out' } : { transition: 'all 300ms ease-in-out' }} />
      </ToggleSidebarButton>

    </SidebarContainer>
  )
}