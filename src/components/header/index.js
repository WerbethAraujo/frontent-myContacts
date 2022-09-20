import logo from '../../assets/images/logo.svg'
import { Container } from './style';

function Header(){
  return(
    <Container>
      <img src={logo} alt='logo-mycontats' width={201}/>
    </Container>
  )
}

export default Header;

