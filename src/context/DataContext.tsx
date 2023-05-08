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
  arquivo: any
}

export interface supplierDataInterface {
  nome: string
  cnpj: string
  endereco: string
  cidade: string,
  estado: string
  telefone: string
  cep: number | string
  produtos: any
}

export const DataContext = createContext({} as any);

export function DataContextProvider({ children }: DataContextProviderProps) {
  const [productList, setProductList] = useState<productDataInterface[]>([]);
  const [supplierList, setSupplierList] = useState<supplierDataInterface[]>([]);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

  const mockSupplierList = [
    {
        "nome": "Gabriel Freitas da Rocha",
        "cnpj": "38.061.430/0001-96",
        "endereco": "Carvalho de Mendonça 1578",
        "cidade": "Uberlândia",
        "estado": "MG",
        "telefone": "",
        "cep": "38408-652",
        "produtos": []
    },
    {
        "nome": "Gabriel Freitas da Rocha",
        "cnpj": "38.061.430/0001-96",
        "endereco": "Carvalho de Mendonça 1578",
        "cidade": "Uberlândia",
        "estado": "MG",
        "telefone": "",
        "cep": "38408-652",
        "produtos": []
    },
    {
        "nome": "Gabriel Freitas da Tes",
        "cnpj": "20.048.698/0001-22",
        "endereco": "Carvalho de Mendonça 1578",
        "cidade": "Uberlândia",
        "estado": "MG",
        "telefone": "",
        "cep": "38408-652",
        "produtos": []
    },
    {
        "nome": "Gabriel Freitas",
        "cnpj": "60.896.223/0001-00",
        "endereco": "Rua Tupaciguara",
        "cidade": "Uberlândia",
        "estado": "Minas Gerais",
        "telefone": "",
        "cep": "38400-652",
        "produtos": []
    },
    {
        "nome": "Gabriel Freitas da Rocha",
        "cnpj": "29.199.952/0001-68",
        "endereco": "Carvalho de Mendonça 1578",
        "cidade": "Uberlândia",
        "estado": "MG",
        "telefone": "",
        "cep": "38408-652",
        "produtos": []
    }
]

  const mockProductList = [
    {
        "nome": "Gabriel Freitas da Rocha",
        "descricao": "Teste dec",
        "marca": "Toyota",
        "unidade_tipo": "qtd",
        "unidade_valor": "23",
        "arquivo": {}
    },
    {
        "nome": "Camisa",
        "descricao": "linho",
        "marca": "teste",
        "unidade_tipo": "cm",
        "unidade_valor": "12",
        "arquivo": {}
    }
]

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
      isDarkMode
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
    supplierList
  } = useContext(DataContext);

  return {
    handleSetSupplierList,
    handleSetProductList,
    isDarkMode,
    handleChangeTheme,
    productList,
    supplierList
  };
}
