import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, Container, Footer } from './style';
import Button from '../Button';

function Modal({
  danger,
  visible,
  isLoading,
  title,
  children,
  cancelLabel,
  confirmLabel,
  onCancel,
  onConfirm,
}) {
  if (!visible) {
    return null;
  }

  return ReactDOM.createPortal(
    < Overlay >
      <Container danger={danger}>
        <h1>{title}</h1>
        {children}
        <Footer>
          <button
            type='button'
            className='cancel-button'
            onClick={onCancel}
            disabled={isLoading}
          >
            {cancelLabel}</button>
          <Button
            type='button'
            danger={danger}
            onClick={onConfirm}
            isLoading={isLoading}

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
  isLoading: PropTypes.bool,
  visible: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  cancelLabel: PropTypes.string,
  confirmLabel: PropTypes.string,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired
}
Modal.defaultProps = {
  danger: false,
  isLoading: false,
  cancelLabel: 'Cancelar',
  confirmLabel: 'Confirmar',
}

