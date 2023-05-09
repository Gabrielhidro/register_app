import { ReactNode, createContext, useEffect, useState } from 'react';
import { useContext } from 'react';

interface DataContextProviderProps {
  children: ReactNode;
}

export interface productDataInterface {
  nome: string
  descricao: string
  marca: string
  unidade_tipo: string,
  unidade_valor: string
  arquivo?: any
  image?: any
}


export interface supplierDataInterface {
  nome: string
  cnpj: string
  endereco: string
  cidade: string,
  estado: string
  cep: number | string
  produtos: any
}

type DataContextType = {
  productList: productDataInterface[];
  supplierList: supplierDataInterface[];
  isDarkMode: boolean;
  handleSetProductList: (product: productDataInterface) => void;
  handleSetSupplierList: (supplier: supplierDataInterface) => void;
  handleChangeTheme: () => void;
  setSupplierList: (supplier: supplierDataInterface[]) => void;
};

export const DataContext = createContext<DataContextType>({} as DataContextType);

export function DataContextProvider({ children }: DataContextProviderProps) {
  const [productList, setProductList] = useState<productDataInterface[]>([]);
  const [supplierList, setSupplierList] = useState<supplierDataInterface[]>([]);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

  const mockSupplierList = [
    {
      "nome": "João da Silva",
      "cnpj": "88.503.355/0001-44",
      "endereco": "Carvalho de Mendonça 1578",
      "cidade": "Uberlândia",
      "estado": "MG",
      "cep": "38408-652",
      "produtos": [
        {
          "nome": "Camera digital 12MP",
          "descricao": "uma experiência única! Onde as fotos são reveladas instantaneamente à frente dos seus olhos (até 2 min. após o clique).",
          "marca": "Fujicam",
          "unidade_tipo": "qtd",
          "unidade_valor": "233",
          "image": "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
      ]
    },
    {
      "nome": "Alex Teixeira",
      "cnpj": "38.061.430/0001-96",
      "endereco": "Rua Januário 34",
      "cidade": "Criciúma",
      "estado": "RS",
      "cep": "21408-112",
      "produtos": []
    },
    {
      "nome": "Roberto Dinamite",
      "cnpj": "60.896.223/0001-00",
      "endereco": "Rua Tupaciguara",
      "cidade": "Uberlândia",
      "estado": "Minas Gerais",
      "cep": "38400-652",
      "produtos": [
        {
          "nome": "Camera digital 12MP",
          "descricao": "uma experiência única! Onde as fotos são reveladas instantaneamente à frente dos seus olhos (até 2 min. após o clique).",
          "marca": "Fujicam",
          "unidade_tipo": "qtd",
          "unidade_valor": "233",
          "image": "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
      ]
    },
    {
      "nome": "Lucas Orellano",
      "cnpj": "29.199.952/0001-68",
      "endereco": "Felisberto da Fonseca 998",
      "cidade": "Brasília",
      "estado": "DF",
      "cep": "61223-652",
      "produtos": [
        {
          "nome": "Camera digital 12MP",
          "descricao": "uma experiência única! Onde as fotos são reveladas instantaneamente à frente dos seus olhos (até 2 min. após o clique).",
          "marca": "Fujicam",
          "unidade_tipo": "qtd",
          "unidade_valor": "233",
          "image": "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          "nome": "Garrafa térmica 1L",
          "descricao": "Produzido em aço inoxidável de qualidade, que conserva as bebidas quentes por até 12h e frias por até 24h, a linha completa possui filtro em aço inox e outras quatro cores diferentes para você escolher a que mais combina com você: branco, preto, rosa e vermelho. Durável e resistente, possui sistema de rosca com vedação à prova de vazamento, ampola térmica com dupla camada em aço inox 304 e filtro também em aço inox para folhas de chá. Acompanha embalagem presenteável.",
          "marca": "Squez",
          "unidade_tipo": "qtd",
          "unidade_valor": "33",
          "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        },
        {
          "nome": "Relógio digital",
          "descricao": "Impermeável: À prova d'água (33 m). Quer lavar as mãos ou nadar? Sem problemas! Para todos os tipos de situação, de reuniões de negócios a atividades internas, ou mesmo uso diário. Observação: Não aperte os botões na água.",
          "marca": "Tummy",
          "unidade_tipo": "kg",
          "unidade_valor": "0.5",
          "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80"
        }]
    },

  ]

  const mockProductList = [
    {
      "nome": "Camera digital 12MP",
      "descricao": "uma experiência única! Onde as fotos são reveladas instantaneamente à frente dos seus olhos (até 2 min. após o clique).",
      "marca": "Fujicam",
      "unidade_tipo": "qtd",
      "unidade_valor": "233",
      "image": "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      "nome": "Garrafa térmica 1L",
      "descricao": "Produzido em aço inoxidável de qualidade, que conserva as bebidas quentes por até 12h e frias por até 24h, a linha completa possui filtro em aço inox e outras quatro cores diferentes para você escolher a que mais combina com você: branco, preto, rosa e vermelho. Durável e resistente, possui sistema de rosca com vedação à prova de vazamento, ampola térmica com dupla camada em aço inox 304 e filtro também em aço inox para folhas de chá. Acompanha embalagem presenteável.",
      "marca": "Squez",
      "unidade_tipo": "qtd",
      "unidade_valor": "33",
      "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
      "nome": "Relógio digital",
      "descricao": "Impermeável: À prova d'água (33 m). Quer lavar as mãos ou nadar? Sem problemas! Para todos os tipos de situação, de reuniões de negócios a atividades internas, ou mesmo uso diário. Observação: Não aperte os botões na água.",
      "marca": "Tummy",
      "unidade_tipo": "kg",
      "unidade_valor": "0.5",
      "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80"
    }
  ]

  console.log('supplierList', supplierList)
  

  useEffect(() => {
    setProductList(mockProductList)
    setSupplierList(mockSupplierList)
  }, [])

  const handleSetProductList = (product: productDataInterface) => {
    setProductList([...productList, product])
  }

  const handleSetSupplierList = (supplier: supplierDataInterface) => {
    setSupplierList([...supplierList, supplier])
  }

  const handleChangeTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <DataContext.Provider value={{
      productList,
      handleSetProductList,
      supplierList,
      handleSetSupplierList,
      handleChangeTheme,
      isDarkMode,
      setSupplierList
    }}>
      {children}
    </DataContext.Provider>
  );
}

export function useDataContext() {
  const {
    handleSetSupplierList,
    handleSetProductList,
    isDarkMode,
    handleChangeTheme,
    productList,
    supplierList,
    setSupplierList
  } = useContext(DataContext);

  return {
    handleSetSupplierList,
    handleSetProductList,
    isDarkMode,
    handleChangeTheme,
    productList,
    supplierList,
    setSupplierList
  };
}
