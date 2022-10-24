import { useEffect, useState, useRef } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';
import ContactService from '../../services/ContactsService'
import Loader from '../../components/Loader'
import toast from '../../utils/toast'

function EditContact() {
  const [isLoading, setIsLoading] = useState(true)
  const [contactName, setContactName] = useState('')

  const contactFomrRef = useRef(null)

  const { id } = useParams()
  const history = useHistory()

  useEffect(() => {
    async function loadContact() {
      try {
        const contact = await ContactService.getContatById(id)

        contactFomrRef.current.setFieldsValues(contact)
        setIsLoading(false)
        setContactName(contact.name)

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

  const handleSubmitUpdate = async (formData) => {
    try {
      const contact = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.categoryId,
      }

      const updatedContact = await ContactService.updateContact(id, contact)

      setContactName(updatedContact.name)

      toast({
        type: 'success',
        text: 'Contato editado com sucesso!',
      })

    } catch (error) {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao editar contato!'
      })
    }
  }

  return (
    <>

      <Loader isLoading={isLoading} />

      <PageHeader
        title={isLoading ? 'Carregando...' : `Editar ${contactName}`}
      />
      <ContactForm
        ref={contactFomrRef}
        buttonLabel='Salvar Alterações'
        onSubmit={handleSubmitUpdate}

      />
    </>
  )
}


export default EditContact;
