import PropTypes from 'prop-types';
import { useState } from 'react';

import isEmailValid from '../../utils/isEmailValid';
import { Form, ContainerButton } from './style';
import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

import useErrors from '../../hooks/useErrors';

function ContactForm({ buttonLabel }) {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [category, setCategory] = useState('')
  const { setError, removeError, getErrorMessageByFieldName } = useErrors()

  const handleNameChange = (event) => {
    setName(event.target.value)

    if (!event.target.value) {
      setError({ field: 'name', message: 'O nome é obrigatório' })
    } else {
      removeError('name')
    }
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.valeu)

    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({ field: 'email', message: 'E-mail inválido' })
    } else {
      removeError('email')
    }

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log({
    //   name, email, phone, category,
    // })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup error={getErrorMessageByFieldName('name')} >
        <Input type='text' placeholder='Nome'
          error={getErrorMessageByFieldName('name')}
          value={name}
          onChange={handleNameChange}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input type='text' placeholder='E-mail'
          error={getErrorMessageByFieldName('email')}
          value={email}
          onChange={handleEmailChange}
        />
      </FormGroup>

      <FormGroup>
        <Input type='text' placeholder='Telefone'
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="">Categoria</option>
          <option value="Facebook">Facebook</option>
          <option value="LinkedIn">LinkedIn</option>
        </Select>
      </FormGroup>

      <ContainerButton>
        <Button type='submit'>
          {buttonLabel}
        </Button>
      </ContainerButton>

    </Form>
  )

}

export default ContactForm;

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired
}




