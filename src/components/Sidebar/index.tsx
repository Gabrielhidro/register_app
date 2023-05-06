import { Divider, IconContainer, LogoContainer, SidebarBody, SidebarContainer, SidebarFooter, SidebarHeader, SidebarItem, ToggleSidebarButton } from "./styled";
import { MdHome, MdOutlineShoppingBag, MdFace6, MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import { useState } from 'react'
import Switch from '@mui/material/Switch';

export default function Sidebar() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false)
  
  return (
    <SidebarContainer>

      <SidebarHeader>
        <LogoContainer>
          <img src="../../../public/logo-g.png" alt="Logo" />
        </LogoContainer>
        <h3>Genialnet</h3>
      </SidebarHeader>

      <Divider />

      <SidebarBody>
        <SidebarItem>
          <IconContainer>
            <MdHome size={24} />
          </IconContainer>
          <span>Home</span>
        </SidebarItem>

        <SidebarItem>
          <IconContainer>
            <MdOutlineShoppingBag size={24} />
          </IconContainer>
          <span>Produtos</span>
        </SidebarItem>

        <SidebarItem>
          <IconContainer>
            <MdFace6 size={24} />
          </IconContainer>
          <span>Fornecedores</span>
        </SidebarItem>
      </SidebarBody>


      <SidebarFooter>
        <Switch defaultChecked />
      </SidebarFooter>

      <ToggleSidebarButton onClick={() => setIsOpenSidebar(!isOpenSidebar)}>
        <MdOutlineKeyboardArrowLeft size={24} style={isOpenSidebar ? { transform: 'rotate(-180deg)', transition: 'all 300ms ease-in-out' } : { transition: 'all 300ms ease-in-out' }} />
      </ToggleSidebarButton>

    </SidebarContainer>
  )
}