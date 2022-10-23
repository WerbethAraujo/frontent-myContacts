import { useEffect, useState, useRef } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';
import ContactService from '../../services/ContactsService'
import Loader from '../../components/Loader'
import toast from '../../utils/toast'

function EditContact() {
  const [isLoading, setIsLoading] = useState(true)

  const contactFomrRef = useRef(null)

  const { id } = useParams()
  const history = useHistory()




  const handleSubmit = () => {
    //
  }

  useEffect(() => {
    async function loadContact() {
      try {
        const contact = await ContactService.getContatById(id)

        contactFomrRef.current.setFieldsValues(contact)
        setIsLoading(false)

      } catch {
        history.push('/')
        toast({
          type: 'danger',
          text: 'Contato solicidado para edição nao encontrado'
        })


      }
    }

    loadContact()
  }, [id, history])



  return (
    <>

      <Loader isLoading={isLoading} />

      <PageHeader
        title='Editar Gabriel Barros'
      />
      <ContactForm
        ref={contactFomrRef}
        buttonLabel='Salvar Alterações'
        onSubmit={handleSubmit}

      />
    </>
  )
}


export default EditContact;
