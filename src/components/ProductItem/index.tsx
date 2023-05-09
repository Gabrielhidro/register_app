import { Link } from "react-router-dom";
import { DescriptionContainer, ImageContainer, ProductItemContainer, Title } from "./styled";

interface Product {
  nome: string;
  descricao: string;
  arquivo?: any;
  image?: string;
}

interface ProductItemProps {
  product: Product;
}

export function ProductItem({ product }: ProductItemProps) {
  const imageUrl = product.arquivo ? URL.createObjectURL(product.arquivo) : undefined;

  const linkTo: any = {
    pathname: `/product/${product.nome}`,
    state: { id: product.nome }
  };

  return (
    <Link to={linkTo} style={{textDecoration: 'none'}}>
      <ProductItemContainer key={product.nome}>
        <Title>{product.nome}</Title>
        <ImageContainer>
          {imageUrl ? <img src={imageUrl} alt="Preview" /> : <img src={product.image} alt="Preview" />}
        </ImageContainer>
        <DescriptionContainer>
          <p>{product.descricao}</p>
        </DescriptionContainer>
      </ProductItemContainer>
    </Link>
  )
}