import PropTypes from 'prop-types'

import { Container } from './style'
import xCircle from '../../../assets/images/icons/x-circle.svg'
import checkCircle from '../../../assets/images/icons/check-circle.svg'

function ToastMessage({ message, type }) {
  return (
    <Container>
      {type === 'danger' && <img src={xCircle} alt='error' />}
      {type === 'success' && <img src={checkCircle} alt='success' />}
      <strong>{message}</strong>
    </Container>
  )
}

ToastMessage.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['default', 'danger', 'success'])
}

ToastMessage.defaultProps = {
  type: 'default'
}


export default ToastMessage;
