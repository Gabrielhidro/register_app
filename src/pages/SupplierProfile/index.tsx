import { useParams } from 'react-router-dom';
import { useDataContext } from '../../context/DataContext';
import { SupplierProfContainer, SubTitle, Title, SupplierContent } from './styled';

export function SupplierProfile() {
  const { nome } = useParams<{ nome: string }>()
  const {supplierList} = useDataContext()
  const supplier = supplierList.find((s: any) => s.nome === nome)

  console.log(supplierList);
  
  return (
    <SupplierProfContainer>
      <Title>Fornecedor</Title>
      <SubTitle>Aqui você pode ver os detalhes do fornecedor!</SubTitle>

      <SupplierContent>
        <h2>{supplier?.nome}</h2>
        <p>Produtos: {supplier?.produtos.length}</p>
      </SupplierContent>
    </SupplierProfContainer>
  );
}
