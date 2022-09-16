import logo from '../../assets/images/logo.svg'
import { Container, InputSearchContainer } from './style';

function Header(){
  return(
    <Container>
      <img src={logo} alt='logo-mycontats' width={201}/>

      <InputSearchContainer>
         <input type='text' placeholder='Pesquisar Contato...'/>
      </InputSearchContainer>
    </Container>
  )
}

export default Header;

