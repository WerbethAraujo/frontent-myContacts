import { Container } from './style'

import ToastMessage from '../ToastMessage'

function ToastContainer() {
  return (
    <Container>
      <ToastMessage message='Default toast' />
      <ToastMessage message='Error toast' type='danger' />
      <ToastMessage message='Success toast' type='success' />
    </Container>
  )
}

export default ToastContainer;
