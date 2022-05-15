import styled from 'styled-components';
import Routers from './routers/Routers';

function App() {
  return (
    <AppWrapper>
      <Routers />
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  max-width: 1440px;
  max-height: 1024px;
  height: 100vh;
  margin: 0 auto;
  padding: 20px 70px;
`