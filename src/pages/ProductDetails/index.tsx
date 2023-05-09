import { useParams } from 'react-router-dom';
import { useDataContext } from '../../context/DataContext';
import { ProductContent, ProductDetailsContainer, ProductInfo, SubTitle, Title } from './styled';

export function ProductDetails() {
  const { nome } = useParams<{ nome: string }>()
  const { productList } = useDataContext()
  const product = productList.find((s) => s.nome === nome)
  const imageUrl = product?.arquivo ? URL.createObjectURL(product.arquivo) : undefined;

  function getUnidadeText(unidade_tipo: string): string {
    switch (unidade_tipo) {
      case 'qtd':
        return 'Quantidade';
      case 'cm':
        return 'Centímetros';
      case 'kg':
        return 'Quilogramas';
      default:
        return '';
    }
  }

  return (
    <ProductDetailsContainer>
      <Title>Detalhes do produto</Title>
      <SubTitle>Aqui você pode ver os detalhes do produto!</SubTitle>

      <ProductContent>
        {imageUrl ? <img src={imageUrl} alt="Preview" /> : <img src={product?.image} alt="Preview" />}

        <ProductInfo>
          <h2>{product?.nome}</h2>
          <p><strong>Marca: </strong>{product?.marca}</p>
          <p><strong>{getUnidadeText(String(product?.unidade_tipo))}: </strong>{product?.unidade_valor}</p>
          <p><strong>Descrição: </strong>{product?.descricao}</p>
        </ProductInfo>
      </ProductContent>

    </ProductDetailsContainer>
  );
}
