import { useEffect, useState, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Header,
  CardsHeader,
  Card,
  InputSearchContainer,
  ErrorContainer,
  EmptyBoxContainer,
  SearchTermNotFound
} from './style';
import Button from '../../components/Button';

import arrow from '../../assets/images/icons/arrow.svg';
import trach from '../../assets/images/icons/trach.svg';
import edit from '../../assets/images/icons/edit.svg';
import sad from '../../assets/images/sad.svg';
import emptyBox from '../../assets/images/empty-box.svg';
import magnifierQuestion from '../../assets/images/magnifier-question.svg';

import Loader from '../../components/Loader'
import ContactsService from '../../services/ContactsService'
import Modal from '../../components/Modal'
import toast from '../../utils/toast'

function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)
  const [contactBeingDelected, setContactBeingDelected] = useState(null)
  const [isLoadingDelete, setIsLoadingDelete] = useState(false)

  const filteredContacts = useMemo(() => contacts.filter((contact) => (
    contact.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  )), [contacts, searchTerm]);

  const loadContacts = useCallback(async () => {
    try {
      setIsLoading(true);

      const contactsList = await ContactsService.listContacts(orderBy);

      setHasError(false)
      setContacts(contactsList);

    } catch (error) {
      setHasError(true)

    } finally {
      setIsLoading(false);

    }

  }, [orderBy]);

  useEffect(() => {
    loadContacts();

  }, [loadContacts]);

  const handleToggleOrderBy = () => {
    setOrderBy((prevState => prevState === 'asc' ? 'desc' : 'asc'))
  }

  const handleChangeSearchTerm = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleTryAgain = () => {
    loadContacts();
  }

  const handleDeleteContact = (contact) => {
    setContactBeingDelected(contact)
    setIsDeleteModalVisible(true)
  }

  const handleCloseDeleteModal = () => {
    setIsDeleteModalVisible(false)
    setContactBeingDelected(null)
  }

  const handleConfirmDeleteContact = async () => {
    try {
      setIsLoadingDelete(true)

      await ContactsService.delete(contactBeingDelected.id)

      handleCloseDeleteModal()

      setContacts((prevState) => prevState.filter(
        (contact) => contact.id !== contactBeingDelected.id
      ));

      toast({
        type: 'success',
        text: 'Contato deletado com sucesso'
      })

    } catch {
      toast({
        type: 'danger',
        text: 'Erro ao deletar contato'
      })
    } finally {
      setIsLoadingDelete(false)
    }
  }

  return (
    <Container>
      <Loader isLoading={isLoading} />

      <Modal
        danger
        visible={isDeleteModalVisible}
        title={`Tem certeza que deseja DELETAR o contato "${contactBeingDelected?.name}?"`}
        confirmLabel='Deletar'
        onCancel={handleCloseDeleteModal}
        onConfirm={handleConfirmDeleteContact}
        isLoading={isLoadingDelete}
      >
        <div className="modal-body">
          <span>Essa açaõ nao poderá ser desfeita!</span>
        </div>
      </Modal>

      {contacts.length > 0 && (
        <InputSearchContainer>
          <input
            type='text'
            value={searchTerm}
            placeholder='Pesquisar Contato...'
            onChange={handleChangeSearchTerm}
          />
        </InputSearchContainer>
      )}

      <Header justifyContent={
        // eslint-disable-next-line no-nested-ternary
        hasError
          ? 'flex-end'
          : (contacts.length
            ? 'space-between'
            : 'center'
          )
      }>
        {(!hasError && contacts.length > 0) && (
          <strong>
            {filteredContacts.length}
            {filteredContacts.length === 1 ? ' Contato' : ' Contatos'}
          </strong>
        )}
        {!isLoading && <Link to='/new'>Novo Contato</Link>}
      </Header>

      {hasError && (
        <ErrorContainer>
          <img src={sad} alt="sad" />
          <div className='info'>
            <p>Ocorreu um erro ao obter os seus contatos!</p>
            <Button type='button' onClick={handleTryAgain}>
              Tentar novamente
            </Button>
          </div>
        </ErrorContainer>)}

      {!hasError && (
        <>
          {(contacts.length < 1 && !isLoading) && (
            <EmptyBoxContainer>
              <img src={emptyBox} alt="empty-box" />

              <p>
                Você ainda não nenhum contato cadastrado! Click no botão <strong>Novo Contato</strong> à cima para cadastrar o seu primeiro contato.
              </p>

            </EmptyBoxContainer>
          )}
          {(contacts.length > 0 && filteredContacts.length < 1) && (
            <SearchTermNotFound>
              <img src={magnifierQuestion} alt="magnifierQuestion" />

              <p>Nenhum contato foi encontrado para <strong>{searchTerm}</strong></p>
            </SearchTermNotFound>
          )}
          {filteredContacts.length > 0 && (
            <CardsHeader orderBy={orderBy}>
              <button
                type='button'
                onClick={handleToggleOrderBy}
              >
                <span>Nome</span>
                <img src={arrow} alt="arrow" />
              </button>
            </CardsHeader>
          )}

          {filteredContacts.map((contact) => (
            <Card key={contact.id}>
              <div className="info">
                <div className="contact-name">
                  <strong>{contact.name}</strong>
                  {contact.category_name && (
                    <small>{contact.category_name}</small>
                  )}
                </div>
                <span>{contact.email}</span>
                <span>{contact.phone}</span>
              </div>

              <div className="actions">
                <Link to={`/edit/${contact.id}`}>
                  <img src={edit} alt="edit contact" />
                </Link>
                <button
                  type='button'
                  onClick={() => handleDeleteContact(contact)}
                >
                  <img src={trach} alt="delete contact" />
                </button>
              </div>
            </Card>
          ))}
        </>
      )}

    </Container>
  )
}

export default Home;



