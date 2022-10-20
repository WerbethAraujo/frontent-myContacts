import PropTypes from 'prop-types'

import { Container } from './style'
import xCircle from '../../../assets/images/icons/x-circle.svg'
import checkCircle from '../../../assets/images/icons/check-circle.svg'

function ToastMessage({ message, onRemoveMessage }) {

  const handleRemoveToast = () => {
    onRemoveMessage(message.id)
  }

  return (
    <Container
      type={message.type}
      onClick={handleRemoveToast}
      tabIndex={0}
      rule='button'

    >
      {message.type === 'danger' && <img src={xCircle} alt='error' />}
      {message.type === 'success' && <img src={checkCircle} alt='success' />}
      <strong>{message.text}</strong>
    </Container>
  )
}

ToastMessage.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['default', 'danger', 'success'])
  }).isRequired,
  onRemoveMessage: PropTypes.func.isRequired
}

export default ToastMessage;
