import { Button, FormControl, MenuItem } from "@mui/material";
import { ImageContainer, InputContainer, ProductContainer, SubTitle, Title, TextError, SaveButton, SectionTitle, StyledTextField, StyledInputLabel, StyledSelect } from "./styled";
import * as yup from 'yup'
import { useFormik } from 'formik'
import ImagePreview from "../../components/ImagePreview";
import { useDataContext } from "../../context/DataContext";
import { useState } from "react";
import LoadingOverlay from "../../components/LoadingOverlay";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export interface productDataInterface {
  nome: string
  descricao: string
  marca: string
  unidade_tipo: string,
  unidade_valor: string
  arquivo: any
}

const formInitialState = {
  nome: '',
  descricao: '',
  marca: '',
  unidade_tipo: '',
  unidade_valor: '',
  arquivo: null,
}

export default function Product() {
  const {handleSetProductList} = useDataContext()
  const [loading, setLoading] = useState(false)

  const formValidationSchema = yup.object().shape({
    nome: yup
      .string()
      .trim()
      .min(
        5,
        'Nome deve ter no mínimo 5 caracteres'
      )
      .required('Campo obrigatório'),
    descricao: yup
      .string()
      .trim()
      .min(
        5,
        'Descrição deve ter no mínimo 5 caracteres'
      )
      .required('Campo obrigatório'),
    marca: yup
      .string()
      .trim()
      .required('Campo obrigatório'),
    arquivo: yup.mixed().required('Selecione uma imagem'),
    unidade_tipo: yup.string().oneOf(['qtd', 'cm', 'kg']).required('Obrigatório'),
    unidade_valor: yup.string().required('Campo obrigatório'),
  })

  const handleSetFormInitialValues = () => {
    formState.setValues(formInitialState)
  }

  const onSubmitForm = (formValues: productDataInterface) => {
    setLoading(true)
    setTimeout(() => {
      handleSetProductList(formValues)
      setLoading(false)
      handleSetFormInitialValues()
      toast.success("Produto cadastrado com sucesso!")
    }, 1000);
  }

  const formState = useFormik({
    initialValues: formInitialState,
    validationSchema: formValidationSchema,
    onSubmit: onSubmitForm,
    validateOnChange: false
  })

  const { values, errors, handleChange, handleSubmit, validateForm, isValid, getFieldHelpers } = formState

  const prepareToSubmit = (event: any) => {
    event.preventDefault()
    validateForm()
    
    if (isValid) {
      handleSubmit()
    }
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files
    if (fileList && fileList.length > 0) {
      const file = fileList[0];
      getFieldHelpers('arquivo').setValue(file)
    }
  };

  return (
    <ProductContainer>
      <Title>Cadastrar Produtos</Title>
      <SubTitle>Aqui você pode cadastrar novos produtos!</SubTitle>
      <SectionTitle>Dados do produto</SectionTitle>
      <StyledTextField
        name="nome"
        label="Nome *"
        value={values.nome}
        error={!!errors.nome}
        helperText={!!errors.nome ? errors.nome : ' '}
        onChange={handleChange}
        type="text"
      />

      <StyledTextField
        name="descricao"
        label="Descrição *"
        value={values.descricao}
        error={!!errors.descricao}
        helperText={!!errors.descricao ? errors.descricao : ' '}
        onChange={handleChange}
        type="text"
        multiline
        rows={3}
      />

      <InputContainer items={2}>
        <StyledTextField
          name="marca"
          label="Marca *"
          value={values.marca}
          error={!!errors.marca}
          helperText={!!errors.marca ? errors.marca : ' '}
          onChange={handleChange}
          type="text"
        />

        <div style={{display: 'flex', gap: 8}}>
          <FormControl>
            <StyledInputLabel id="demo-simple-select-label">Unidade</StyledInputLabel>
            <StyledSelect
              name="unidade_tipo"
              label="Unidade"
              onChange={handleChange}
              style={{ width: '90px' }}
              defaultValue={1}
              error={!!errors.unidade_tipo}
            >
              <MenuItem value="qtd">Qtd</MenuItem>
              <MenuItem value="cm">Cm</MenuItem>
              <MenuItem value="kg">Kg</MenuItem>
            </StyledSelect>
            {!!errors.unidade_tipo && <TextError>{errors.unidade_tipo}</TextError>}
          </FormControl>

          <StyledTextField
            name="unidade_valor"
            label="Unidade de medida *"
            value={values.unidade_valor}
            error={!!errors.unidade_valor}
            helperText={!!errors.unidade_valor ? errors.unidade_valor : ' '}
            onChange={handleChange}
            type="text"
            style={{flex: 1}}
          />
        </div>

      </InputContainer>

      <InputContainer items={2}>
        <ImageContainer>
          <ImagePreview file={values.arquivo} />
          <div style={{ height: '22px', marginBottom: '4px' }}>
            {!!errors.arquivo && <TextError>{errors.arquivo}</TextError>}
          </div>
          <Button variant="contained" component="label">
            Upload image
            <input name="arquivo" hidden accept="image/*" multiple type="file" onChange={handleFileChange} />
          </Button>
        </ImageContainer>
      </InputContainer>

      <SaveButton type="submit" onClick={prepareToSubmit}>
        Cadastrar
      </SaveButton>

      {loading && <LoadingOverlay />}
      <ToastContainer />
    </ProductContainer>
  )
}