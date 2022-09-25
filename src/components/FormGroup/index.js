import PropTypes from 'prop-types'
import { Container } from './style';

function FormGroup({ children, error }) {
  return (
    <Container>
      {children}
      {error && <p>{error}</p>}
    </Container>
  )
}



FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.string,
}

FormGroup.defaultProps = {
  error: null,
}

export default FormGroup;
