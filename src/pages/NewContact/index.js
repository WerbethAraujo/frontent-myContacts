import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';
import ContactsService from '../../services/ContactsService'

function NewContact() {
  const handleSubmitNewContact = async (formData) => {

    try {
      const contact = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.categoryId,
      }

      const response = await ContactsService.createContact(contact)
      console.log(response)

    } catch (error) {
      alert('Erro ao cadastrar contato')
    }

  }

  return (
    <>
      <PageHeader
        title='Novo contato'
      />
      <ContactForm
        onSubmit={handleSubmitNewContact}
        buttonLabel='Cadastrar'
      />
    </>
  )
}


export default NewContact;
