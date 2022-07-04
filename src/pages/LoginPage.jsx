import styled from '@emotion/styled';

import { loadItem } from '../services/storage';

import LoginContainer from '../containers/LoginContainer'
import Logo from '../components/common/Logo';

const Wrapper = styled.div({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundColor: '#fafafa',
});

const LoginFieldBox = styled.div({
  width: '22em',
  margin: 'auto',
  padding: '2em',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundColor: 'white',
  border: '1px solid lightgray',
});

export default function LoginPage({ setEmail }) {
  return (
    <Wrapper>
      <LoginFieldBox>
        <Logo size='70%'/>
        <LoginContainer
          setEmail={setEmail}
        />
      </LoginFieldBox>
    </Wrapper>
  )
}