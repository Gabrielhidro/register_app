import { useParams } from 'react-router-dom';
import { useDataContext } from '../../context/DataContext';
import { SupplierProfContainer, SubTitle, Title, SupplierContent, SupplierInfo, SectionTitle, ProductItemListContainer } from './styled';
import { ProductItem } from '../../components/ProductItem';

export function SupplierProfile() {
  const { nome } = useParams<{ nome: string }>()
  const { supplierList } = useDataContext()
  const supplier = supplierList.find((s) => s.nome === nome)
  

  return (
    <SupplierProfContainer>
      <Title>Fornecedor</Title>
      <SubTitle>Aqui você pode ver os detalhes do fornecedor!</SubTitle>

      <SupplierContent>
        <h2>{supplier?.nome}</h2>
        <SupplierInfo>
          <SectionTitle>Informações pessoais</SectionTitle>
          <p>CNPJ: {supplier?.cnpj}</p>

          <SectionTitle>Endereço</SectionTitle>
          <p>Cep: {supplier?.cep}</p>
          <p>Estado: {supplier?.estado}</p>
          <p>Cidade: {supplier?.cidade}</p>
          <p>Endereço: {supplier?.endereco}</p>
          
          <SectionTitle>Produtos</SectionTitle>

          <ProductItemListContainer>
          {supplier?.produtos.length ? (
            supplier?.produtos.map((p: any) => (
              <ProductItem key={p.nome} product={p} />
            ))
          ) : (
            <p>Nenhum produto cadastrado</p>
          )}
          </ProductItemListContainer>
        </SupplierInfo>
      </SupplierContent>
    </SupplierProfContainer>
  );
}
