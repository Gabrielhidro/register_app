import { ProductSectionContainer } from "./styled";

export function ProductSection({products}: any){

  return (
    <ProductSectionContainer>
      {products.map((product: any) => (
        <div key={product.nome}>
          <p>{product.nome}</p>
          <p>{product.descricao}</p>
          <p>{product.marca}</p>
          <p>{product.unidade_tipo}</p>
          <p>{product.unidade_valor}</p>
        </div>
      ))}
    </ProductSectionContainer>
  )
}