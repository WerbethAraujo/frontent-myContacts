import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Header, CardsHeader, Card, InputSearchContainer } from './style';
import arrow from '../../assets/images/icons/arrow.svg';
import trach from '../../assets/images/icons/trach.svg';
import edit from '../../assets/images/icons/edit.svg';

function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');

  useEffect(() => {
    fetch(`http://localhost:3001/contacts?orderBy=${orderBy}`)
      .then(async (response) => {
        const json = await response.json()
        setContacts(json)
      })
      .catch((error) => {
        console.log('error', error)
      })
  }, [orderBy]);

  const handleToggleOrderBy = () => {
    setOrderBy((prevState => prevState === 'asc' ? 'desc' : 'asc'))
  }

  return (
    <Container>
      <InputSearchContainer>
        <input type='text' placeholder='Pesquisar Contato...' />
      </InputSearchContainer>
      <Header>
        <strong>{contacts.length}
          {contacts.length === 1 ? ' Contato' : ' Contatos'}</strong>
        <Link to='/new'>Novo Contato</Link>
      </Header>

      <CardsHeader orderBy={orderBy}>
        <button
          type='button'
          onClick={handleToggleOrderBy}
        >
          <span>Nome</span>
          <img src={arrow} alt="arrow" />
        </button>
      </CardsHeader>

      {contacts.map((contact) => (
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

    </Container>
  )
}

export default Home;



