import { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Header,
  CardsHeader,
  Card,
  InputSearchContainer,
  ErrorContainer
} from './style';
import Button from '../../components/Button';

import arrow from '../../assets/images/icons/arrow.svg';
import trach from '../../assets/images/icons/trach.svg';
import edit from '../../assets/images/icons/edit.svg';
import sad from '../../assets/images/sad.svg';

import Loader from '../../components/Loader'
import ContactsService from '../../services/ContactsService'

function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const filteredContacts = useMemo(() => contacts.filter((contact) => (
    contact.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  )), [contacts, searchTerm]);

  async function loadContacts() {
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
  }

  useEffect(() => {

    loadContacts();

  }, [orderBy]);

  const handleToggleOrderBy = () => {
    setOrderBy((prevState => prevState === 'asc' ? 'desc' : 'asc'))
  }

  const handleChangeSearchTerm = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleTryAgain = () => {
    loadContacts();
  }

  return (
    <Container>
      <Loader isLoading={isLoading} />

      <InputSearchContainer>
        <input
          value={searchTerm}
          type='text'
          placeholder='Pesquisar Contato...'
          onChange={handleChangeSearchTerm}
        />

      </InputSearchContainer>

      <Header hasError={hasError}>
        {!hasError && <strong>{filteredContacts.length}
          {filteredContacts.length === 1 ? ' Contato' : ' Contatos'}</strong>}
        <Link to='/new'>Novo Contato</Link>
      </Header>

      {hasError && <ErrorContainer>
        <img src={sad} alt="sad" />
        <div className='info'>
          <p>Ocorreu um erro ao obter os seus contatos!</p>
          <Button type='button' onClick={handleTryAgain}>Tentar novamente</Button>
        </div>
      </ErrorContainer>}

      {!hasError && (
        <>
          {filteredContacts.length > 0 && <CardsHeader orderBy={orderBy}>
            <button
              type='button'
              onClick={handleToggleOrderBy}
            >
              <span>Nome</span>
              <img src={arrow} alt="arrow" />
            </button>
          </CardsHeader>
          }

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
                <button type='button'>
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



