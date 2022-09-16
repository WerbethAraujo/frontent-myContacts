import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';
import { Container } from './style';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Container>hello world</Container>
    </ThemeProvider>
  );
}

export default App;
