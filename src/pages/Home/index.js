import { Container, Header, CardsContainer, Card, InputSearchContainer } from  './style';
import arrow from '../../assets/images/icons/arrow.svg';
import trach from '../../assets/images/icons/trach.svg';
import edit from '../../assets/images/icons/edit.svg';

function Home(){
  return(
      <Container>
      <InputSearchContainer>
         <input type='text' placeholder='Pesquisar Contato...'/>
      </InputSearchContainer>
      <Header>
        <strong>3 contatos</strong>
        <a href='/'>Novo Contato</a>
      </Header>

      <CardsContainer>
        <header>
          <button type='button'>
             <span>Nome</span>
             <img src={arrow} alt="arrow" />
          </button>
        </header>
      </CardsContainer>

      <Card>
        <div className="info">
          <div className="contact-name">
            <strong>Werbeth Araujo</strong>
            <small>facebook</small>
          </div>
            <span>werbeth@hotmail.com</span>
            <span>(94) 97777-7777</span>
        </div>

        <div className="actions">
          <a href='/'>
            <img src={edit} alt="edit contact" />
          </a>
          <button type='button'>
            <img src={trach} alt="delete contact" />
          </button>
        </div>
      </Card>
      <Card>
        <div className="info">
          <div className="contact-name">
            <strong>Gabriel Barros</strong>
            <small>linkedin</small>
          </div>
            <span>gabriel@hotmail.com</span>
            <span>(94) 97777-7777</span>
        </div>

        <div className="actions">
          <a href='/'>
            <img src={edit} alt="edit contact" />
          </a>
          <button type='button'>
            <img src={trach} alt="delete contact" />
          </button>
        </div>
      </Card>
      <Card>
        <div className="info">
          <div className="contact-name">
            <strong>Maya Pinheiro</strong>
            <small>familia</small>
          </div>
            <span>werbeth@hotmail.com</span>
            <span>(94) 97777-7777</span>
        </div>

        <div className="actions">
          <a href='/'>
            <img src={edit} alt="edit contact" />
          </a>
          <button type='button'>
            <img src={trach} alt="delete contact" />
          </button>
        </div>
      </Card>

    </Container>
  )
}

export default Home;



