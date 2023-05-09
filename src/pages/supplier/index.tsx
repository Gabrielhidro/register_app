import * as yup from 'yup'
import { useFormik } from 'formik'
import { cnpj } from 'cpf-cnpj-validator'
import { SupplierContainer, Title, SubTitle, InputContainer, SaveButton, SectionTitle, StyledTextField, ProductListContainer } from "./styled";
import InputMask from 'react-input-mask'
import { FocusEvent, useState } from "react";
import { useDataContext } from '../../context/DataContext';
import LoadingOverlay from '../../components/LoadingOverlay';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProductToBeSelected } from '../../components/ProductToBeSelected';


export interface supplierDataInterface {
  nome: string
  cnpj: string
  endereco: string
  cidade: string,
  estado: string
  cep: string
  produtos: any
}

const formInitialState = {
  nome: '',
  cnpj: '',
  endereco: '',
  cidade: '',
  estado: '',
  cep: '',
  produtos: [],
}

export default function Supplier() {
  const {handleSetSupplierList, productList, supplierList} = useDataContext()
  const [loading, setLoading] = useState(false)
  const [selectedProducts, setSelectedProducts] = useState<any>([]);

  const formValidationSchema = yup.object().shape({
    nome: yup
      .string()
      .trim()
      .min(
        5,
        'Nome deve ter no mínimo 5 caracteres'
      )
      .required('Campo obrigatório'),
    cnpj: yup.string()
      .required('Campo obrigatório')
      .test('valid-cnpj', 'CNPJ inválido', (value) => cnpj.isValid(value)),
    cep: yup.string()
      .required('Campo obrigatório')
      .matches(/^\d{5}-\d{3}$/, 'CEP inválido'),
    endereco: yup.string().trim().required('Campo obrigatório'),
    cidade: yup.string().trim().required('Campo obrigatório'),
    estado: yup.string().trim().required('Campo obrigatório'),
  })

  const handleSetFormInitialValues = () => {
    formState.setValues(formInitialState)
    setSelectedProducts([])
  }

  const onSubmitForm = (formValues: supplierDataInterface) => {
    setLoading(true)
    setTimeout(() => {
      const cnpjExists = supplierList.some(supplier => supplier.cnpj === formValues.cnpj)
      if (cnpjExists) {
        toast.error("Esse CNPJ já está cadastrado!")
        setLoading(false)
      } else {
        handleSetSupplierList(formValues)
        setLoading(false)
        handleSetFormInitialValues()
        toast.success("Fornecedor cadastrado com sucesso!")
      }
    }, 1000);

  }

  const formState = useFormik({
    initialValues: formInitialState,
    validationSchema: formValidationSchema,
    onSubmit: onSubmitForm,
    validateOnChange: false,
  })

  const { values, errors, handleChange, handleSubmit, validateForm, isValid, handleBlur, setFieldValue, setFieldTouched, setFieldError } = formState

  const prepareToSubmit = (event: any) => {
    event.preventDefault()
    validateForm()
    if (isValid) {
      handleSubmit()
    }
  }

  const fetchAddress = async (cep: number) => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
      const data = await response.json()
      if (data.erro) {
        throw new Error('CEP não encontrado')
      }
      return data
    } catch (error) {
      throw new Error('Erro ao buscar CEP')
    }
  }

  const handleCepBlur = async (event: FocusEvent<HTMLInputElement, Element>) => {
    const cep = event.target.value.replace(/\D/g, '')
    if (cep.length === 8) {
      try {
        const addressData = await fetchAddress(Number(cep))

        setFieldTouched('cep', true)
        setFieldValue('endereco', addressData.logradouro)
        setFieldValue('cidade', addressData.localidade)
        setFieldValue('estado', addressData.uf)
      } catch (error) {
        setFieldError('cep', 'CEP não encontrado')
      }
    }
  }

  const handleProductSelection = (product: any) => {
    const newSelectedProducts = selectedProducts.includes(product)
      ? selectedProducts.filter((p: any) => p !== product)
      : [...selectedProducts, product]
    setSelectedProducts(newSelectedProducts)
    setFieldValue('produtos', newSelectedProducts)
  };

  return (
    <SupplierContainer>
      <Title>Cadastrar fornecedor</Title>
      <SubTitle>Aqui você pode cadastrar novos fornecedores!</SubTitle>
      <SectionTitle>Dados pessoais</SectionTitle>
      <StyledTextField
        inputProps={{ style: { color: "red" } }}
        sx={{ input: { color: 'red' } }}
        name="nome"
        label="Nome *"
        value={values.nome}
        error={!!errors.nome}
        helperText={!!errors.nome ? errors.nome : ' '}
        onChange={handleChange}
        type="text"
      />

      <InputMask
        mask="99.999.999/9999-99"
        value={values.cnpj}
        onChange={handleChange}
        onFocus={() => setFieldTouched('cnpj', false)}
        onBlur={handleBlur}
      >
        <StyledTextField
          label="CNPJ *"
          type="text"
          name="cnpj"
          id="cnpj"
          data-testid="cnpj"
          error={!!errors.cnpj}
          helperText={errors.cnpj ? errors.cnpj : ' '}
        />
      </InputMask>

      <SectionTitle>Endereço</SectionTitle>

      <InputContainer items={2}>
        <InputMask
          mask="99999-999"
          value={values.cep}
          onChange={handleChange}
          onFocus={() => setFieldTouched('cep', false)}
          onBlur={handleCepBlur}
        >
          <StyledTextField
            label="CEP *"
            type="text"
            name="cep"
            id="cep"
            data-testid="cep"
            error={!!errors.cep}
            helperText={errors.cep ? errors.cep : ' '}
          />
        </InputMask>

        <StyledTextField
          name="endereco"
          label="Endereço *"
          value={values.endereco}
          error={!!errors.endereco}
          helperText={!!errors.endereco ? errors.endereco : ' '}
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
        />
      </InputContainer>

      <InputContainer items={2}>
        <StyledTextField
          name="cidade"
          label="Cidade *"
          value={values.cidade}
          error={!!errors.cidade}
          helperText={!!errors.cidade ? errors.cidade : ' '}
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
        />

        <StyledTextField
          name="estado"
          label="Estado *"
          value={values.estado}
          error={!!errors.estado}
          helperText={!!errors.estado ? errors.estado : ' '}
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
        />
      </InputContainer>

      <SectionTitle>Adicionar produtos</SectionTitle>

      <ProductListContainer>
        {productList.map((product: any) => (
          <div key={product.id}>
          <label>
            <input
              name='produtos'
              type="checkbox"
              checked={selectedProducts.includes(product)}
              onChange={() => handleProductSelection(product)}
            />
            <ProductToBeSelected id={product.nome} product={product} />
          </label>
        </div>
        ))}
      </ProductListContainer>


      <SaveButton type="submit" onClick={prepareToSubmit}>
        Cadastrar
      </SaveButton>

      {loading && <LoadingOverlay />}
      <ToastContainer />
    </SupplierContainer>
  )
}