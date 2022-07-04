import styled from '@emotion/styled';

import LoginContainer from '../containers/LoginContainer';
import Logo from '../components/common/Logo';

export default function LoginPage() {
  return (
    <Wrapper>
      <LoginFieldBox>
        <Logo size="70%" />
        <LoginContainer />
      </LoginFieldBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fafafa;
`;
const LoginFieldBox = styled.div`
  width: 22em;
  margin: auto;
  padding: 2em;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  border: 1px solid lightgray;
`;
