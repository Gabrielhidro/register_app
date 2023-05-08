import { ReactNode, createContext, useState } from 'react';
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
  cep: number
  produtos: any
}

export const DataContext = createContext({} as any);

export function DataContextProvider({ children }: DataContextProviderProps) {
  const [productList, setProductList] = useState<productDataInterface[]>([]);
  const [supplierList, setSupplierList] = useState<supplierDataInterface[]>([]);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

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
