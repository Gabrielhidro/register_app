import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { ImageContainer, InputContainer, ProductContainer, SubTitle, Title, TextError, SaveButton } from "./styled";
import * as yup from 'yup'
import { useFormik } from 'formik'
import ImagePreview from "../../components/ImagePreview";

const formInitialState = {
  nome: '',
  descricao: '',
  marca: '',
  unidade_tipo: '',
  unidade_valor: '',
  arquivo: null,
}

export default function Product() {

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
    unidade_tipo: yup.number().required(),
    unidade_valor: yup.string().required('Campo obrigatório').oneOf(['Qtd', 'Cm', 'Kg']),
  })

  const onSubmitForm = (formValues: any) => {
    console.log(formValues);
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
    const fileList = event.target.files;
    if (fileList && fileList.length > 0) {
      const file = fileList[0];
      getFieldHelpers('arquivo').setValue(file)
    }
  };

  console.log('error', errors);
  console.log('values', values);

  return (
    <ProductContainer>
      <Title>Cadastrar Produtos</Title>
      <SubTitle>Aqui você pode cadastrar novos produtos!</SubTitle>
      <TextField
        name="nome"
        label="Nome *"
        value={values.nome}
        error={!!errors.nome}
        helperText={!!errors.nome ? errors.nome : ' '}
        onChange={handleChange}
        type="text"
      />

      <TextField
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
        <TextField
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
            <InputLabel id="demo-simple-select-label">Unidade</InputLabel>
            <Select
              name="unidade_tipo"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
              onChange={handleChange}
              style={{ width: '90px' }}
              defaultValue={1}
            >
              <MenuItem selected value={1}>Qtd</MenuItem>
              <MenuItem value={2}>Cm</MenuItem>
              <MenuItem value={3}>Kg</MenuItem>
            </Select>
          </FormControl>

          <TextField
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

    </ProductContainer>
  )
}