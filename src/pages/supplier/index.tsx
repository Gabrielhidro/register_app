import * as yup from 'yup'
import { useFormik } from 'formik'
import { cnpj } from 'cpf-cnpj-validator'
import { SupplierContainer, Title, SubTitle, InputContainer, SaveButton, SectionTitle, StyledTextField } from "./styled";
import InputMask from 'react-input-mask'
import { FocusEvent } from "react";

export interface supplierDataInterface {
  nome: string
  cnpj: string
  endereco: string
  cidade: string,
  estado: string
  telefone: string
  cep: string
  produtos: any
}

const formInitialState = {
  nome: '',
  cnpj: '',
  endereco: '',
  cidade: '',
  estado: '',
  telefone: '',
  cep: '',
  produtos: [],
}

export default function Supplier() {

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

  const onSubmitForm = (formValues: supplierDataInterface) => {
    console.log(formValues);
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

        console.log(addressData);

        setFieldTouched('cep', true)
        setFieldValue('endereco', addressData.logradouro)
        setFieldValue('cidade', addressData.localidade)
        setFieldValue('estado', addressData.uf)
      } catch (error) {
        setFieldError('cep', 'CEP não encontrado')
      }
    }
  }

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


      <SaveButton type="submit" onClick={prepareToSubmit}>
        Cadastrar
      </SaveButton>
    </SupplierContainer>
  )
}