import { Outlet } from 'react-router-dom'
import { Sidebar } from '../components/Sidebar'
import { Container } from './styled'

export default function DefaultLayout() {
  return (
    <Container>
      <Sidebar />
      <Outlet />
    </Container>
  )
}