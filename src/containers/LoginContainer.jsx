import { useEffect, useRef, useState, useContext } from 'react';
import styled from '@emotion/styled';

import {
  Inputform,
  LoginButton,
  LoginToastMessage,
  ValidationCheckBox,
  CheckPasswordValidation,
} from '../components/login';
import {
  checkEmailValidation,
  checkPasswordValidation,
} from '../services/validation';
import { setLocalStorage } from '../services/storage';
import { adminAccountInfo } from '../constants';

import LoginCheckContext from '../context/LoginCheckContext';

export default function LoginContainer() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [emailValidation, setEmailValidation] = useState();
  const [errorCodes, setErrorCodes] = useState();
  const [disabled, setDisabled] = useState(true);
  const [toastMessageVisible, setToastMessageVisible] = useState(false);
  const { setIsSigned } = useContext(LoginCheckContext);

  useEffect(() => {
    if (emailValidation && errorCodes && errorCodes.length === 0) {
      setDisabled(false);
      return;
    }
    setDisabled(true);
  }, [emailValidation, errorCodes]);

  useEffect(() => {
    setTimeout(function () {
      setToastMessageVisible(false);
    }, 2000);
  }, [toastMessageVisible]);

  const handleChangeEmail = () => {
    setEmailValidation(checkEmailValidation(emailRef.current.value));
  };

  const handleChangePassword = () => {
    setErrorCodes(checkPasswordValidation(passwordRef.current.value));
  };

  const handleSubmit = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (
      emailValidation &&
      errorCodes.length === 0 &&
      email === adminAccountInfo.email &&
      password === adminAccountInfo.password
    ) {
      setLocalStorage('isSigned', true);
      setIsSigned(true);
      return;
    }

    setToastMessageVisible(true);
  };

  return (
    <>
      <Wrapper>
        <LoginToastMessage visible={toastMessageVisible} />
        <Inputform
          validationType="email"
          /* info={{
            type: 'email',
            id: 'email',
            name: 'email',
            ref: emailRef,
          }}
          onChange={handleChangeEmail}
          placeholder="[테스트용] test@test.com" */
        />
        <ValidationCheckBox validation={emailValidation} />
      </Wrapper>
      <Wrapper>
        <Inputform
          validationType="password"
          /* info={{
            type: 'password',
            id: 'password',
            name: 'password',
            ref: passwordRef,
          }}
          onChange={handleChangePassword}
          placeholder="[테스트용] HelloWorld!" */
        />
        <ValidationCheckBox
          validation={errorCodes ? errorCodes.length === 0 : errorCodes}
        />
      </Wrapper>
      <Wrapper>
        <CheckPasswordValidation
          errorCodes={errorCodes ? errorCodes : [1, 2, 3]}
        />
      </Wrapper>
      <LoginButton disabled={disabled} onSubmit={handleSubmit} />
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  vertical-align: center;
`;
