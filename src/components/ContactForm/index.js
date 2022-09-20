import PropTypes from 'prop-types';
import { Form, ContainerButton } from './style';
import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

function ContactForm({ buttonLabel }) {

  return (
    <Form>
      <FormGroup>
        <Input type='text' placeholder='Nome' />
      </FormGroup>

      <FormGroup>
        <Input type='text' placeholder='E-mail' />
      </FormGroup>

      <FormGroup>
        <Input type='text' placeholder='Telefone' />
      </FormGroup>

      <FormGroup>
        <Select>
          <option value="Facebook">Facebook</option>
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




