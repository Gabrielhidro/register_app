import { useParams } from 'react-router-dom';
import { useDataContext } from '../../context/DataContext';
import { SupplierProfContainer, SubTitle, Title, SupplierContent, SupplierInfo, SectionTitle, ProductItemListContainer, RemoveButton } from './styled';
import { ProductItem } from '../../components/ProductItem';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import LoadingOverlay from '../../components/LoadingOverlay';

export function SupplierProfile() {
  const { nome } = useParams<{ nome: string }>()
  const { supplierList, setSupplierList } = useDataContext()
  const supplier = supplierList.find((s) => s.nome === nome)
  const [loading, setLoading] = useState(false)

  const handleRemoveProduct = (product: any) => {
    setLoading(true)
    if (supplier) {
      const updatedSupplier = {...supplier};
      const updatedProducts = updatedSupplier.produtos.filter((p: any) => p.nome !== product.nome);
      updatedSupplier.produtos = updatedProducts;

      const updatedSupplierList = supplierList.map((s) => {
        if (s.nome === supplier.nome) {
          return updatedSupplier;
        }
        return s;
      })

      setTimeout(() => {
        setSupplierList(updatedSupplierList);
        setLoading(false)
        toast.success("Produto removido com sucesso!")
      }, 1000);
    }
  };
  

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
                <div style={{display: 'flex', flexDirection: 'column'}}>
                  <ProductItem key={p.nome} product={p} />
                  <RemoveButton onClick={() => handleRemoveProduct(p)} >Remover</RemoveButton>
                </div>
              ))
            ) : (
              <p>Nenhum produto cadastrado</p>
            )}
          </ProductItemListContainer>
        </SupplierInfo>
      </SupplierContent>
      {loading && <LoadingOverlay />}
      <ToastContainer />
    </SupplierProfContainer>
  );
}
