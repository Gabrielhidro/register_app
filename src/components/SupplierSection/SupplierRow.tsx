import { Link } from 'react-router-dom';
import { StyledSupplierRow } from "./styled";

interface Supplier {
  id: number;
  nome: string;
  produtos: any[];
}

interface SupplierRowProps {
  supplier: Supplier;
}

export function SupplierRow({ supplier }: SupplierRowProps) {

  const linkTo: any = {
    pathname: `/supplier/${supplier.nome}`,
    state: { id: supplier.id }
  };

  return (
    <Link to={linkTo} style={{textDecoration: 'none'}}>
      <StyledSupplierRow key={supplier.nome}>
        <p>{supplier.nome}</p>
        <span>Produtos: {supplier.produtos.length}</span>
      </StyledSupplierRow>
    </Link>
  )
}
