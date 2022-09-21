import PropTypes from 'prop-types';
import { Overlay, Container, Footer } from './style';
import Button from '../Button';

function Modal({ danger }) {
  return (
    < Overlay >
      <Container danger={danger}>
        <h1>Tem certeza que deseja excluir esse contato?</h1>
        <span>Esta ação não poderá ser desfeita</span>

        <Footer>
          <button type='button' className='cancel-button'>Cancelar</button>
          <Button type='button' danger={danger}>Deletar</Button>
        </Footer>
      </Container>
    </Overlay >
  )

}

export default Modal;

Modal.propTypes = {
  danger: PropTypes.bool
}
Modal.defaultProps = {
  danger: false,
}

