import { ProductSection } from "../../components/ProductSection";
import { SupplierSection } from "../../components/SupplierSection";
import { useDataContext } from "../../context/DataContext";
import { HomeContainer, SectionTitle, SubTitle, Title } from "./styled";

export default function Home(){
  const {productList, supplierList} = useDataContext()

  return (
    <HomeContainer>
      <Title>Home</Title>
      <SubTitle>Aqui você pode consultar os produtos e fornecedores cadastrados no sistema!</SubTitle>

      <SectionTitle>Lista de produtos</SectionTitle>
      <ProductSection products={productList} />
      <SectionTitle>Lista de fornecedores</SectionTitle>
      <SupplierSection suppliers={supplierList} />
    </HomeContainer>
  )
}