import { ProductItem } from "../ProductItem";
import { ProductSectionContainer } from "./styled";

export function ProductSection({products}: any){

  return (
    <ProductSectionContainer>
      {products.map((product: any) => (
        <ProductItem product={product} />
      ))}
    </ProductSectionContainer>
  )
}