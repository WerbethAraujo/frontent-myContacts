import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, Container, Footer } from './style';
import Button from '../Button';

function Modal({
  danger,
  title,
  children,
  cancelLabel,
  confirmLabel
}) {
  return ReactDOM.createPortal(
    < Overlay >
      <Container danger={danger}>
        <h1>{title}</h1>
        {children}
        <Footer>
          <button type='button' className='cancel-button'>{cancelLabel}</button>
          <Button
            type='button'
            danger={danger}
          >
            {confirmLabel}
          </Button>
        </Footer>
      </Container>
    </Overlay >,
    document.getElementById('modal-root')
  )

}

export default Modal;

Modal.propTypes = {
  danger: PropTypes.bool,
  children: PropTypes.node.isRequired,
  cancelLabel: PropTypes.string,
  confirmLabel: PropTypes.string,
}
Modal.defaultProps = {
  danger: false,
  cancelLabel: 'Cancelar',
  confirmLabel: 'Deletar',
}

