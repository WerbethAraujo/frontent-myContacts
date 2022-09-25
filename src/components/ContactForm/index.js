import PropTypes from 'prop-types';
import { useState } from 'react';
import { Form, ContainerButton } from './style';
import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

function ContactForm({ buttonLabel }) {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [category, setCategory] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();

    // console.log({
    //   name, email, phone, category,
    // })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup >
        <Input type='text' placeholder='Nome'
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </FormGroup>

      <FormGroup >
        <Input type='text' placeholder='E-mail'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
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




