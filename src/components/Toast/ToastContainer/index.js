import { useEffect, useState } from 'react';

import { Container } from './style'

import ToastMessage from '../ToastMessage'

import { toastEventManager } from '../../../utils/toast'

function ToastContainer() {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    function handleAddToast({ type, text }) {
      setMessages((prevState) => [
        ...prevState,
        { id: Math.random(), type, text }
      ])
    }

    toastEventManager.on('addtoast', handleAddToast);

    return () => {

      toastEventManager.removeListeners('addtoast', handleAddToast)

    }

  }, []);


  const handleRemoveMessage = (id) => {
    setMessages((prevState) => prevState.filter(
      (message) => message.id !== id
    ))
  }


  return (
    <Container>
      {messages.map((message) => (
        <ToastMessage
          key={message.id}
          message={message}
          onRemoveMessage={handleRemoveMessage}
        />
      ))}
    </Container>
  )
}

export default ToastContainer;
