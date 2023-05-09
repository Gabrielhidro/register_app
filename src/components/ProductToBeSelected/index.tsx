import { DescriptionContainer, ImageContainer, ProductItemContainer, Title } from "./styled";

interface Product {
  nome: string;
  descricao: string;
  arquivo?: any;
  image?: string;
}

interface ProductItemProps {
  id: number;
  product: Product;
}

export function ProductToBeSelected({ product }: ProductItemProps) {
  const imageUrl = product.arquivo ? URL.createObjectURL(product.arquivo) : undefined;

  return (
    <ProductItemContainer key={product.nome}>
      <Title>{product.nome}</Title>
      <ImageContainer>
        {imageUrl ? <img src={imageUrl} alt="Preview" /> : <img src={product.image} alt="Preview" />}
      </ImageContainer>
      <DescriptionContainer>
        <p>{product.descricao}</p>
      </DescriptionContainer>
    </ProductItemContainer>
  )
}