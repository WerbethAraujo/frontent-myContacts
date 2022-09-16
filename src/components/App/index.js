import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';
import { Container } from './style';
import  Header  from '../header';
import ContactsList from '../ContactsList'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
        <Container>
           <Header />
           <ContactsList />
       </Container>
    </ThemeProvider>
  );
}

export default App;
