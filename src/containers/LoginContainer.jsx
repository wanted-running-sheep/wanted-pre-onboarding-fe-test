import { useEffect, useRef, useState } from 'react';

import styled from 'styled-components';

import Inputform from '../components/login/InputForm';
import LoginButton from '../components/login/LoginButton';
import LoginToastMessage from '../components/login/LoginToastMessage';
import ValidationCheckBox from '../components/login/ValidationCheckBox';
import CheckPasswordValidation from '../components/login/CheckPasswordValidation';

import {
  checkEmailValidation,
  checkPasswordValidation,
} from '../services/validation';
import { saveItem } from '../services/storage';
import { Admin } from '../fixtures/admin';

const Wrapper = styled.div({
  display: 'flex',
  width: '100%',
  verticalAlign: 'center',
});

export default function LoginContainer({ setEmail }) {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [emailValidation, setEmailValidation] = useState();
  const [errorCodes, setErrorCodes] = useState();
  const [disabled, setDisabled] = useState(true);
  const [toastMessageVisible, setToastMessageVisible] = useState(false);

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

    if (emailValidation && errorCodes.length === 0) {
      /* 이메일 정보가 Admin과 일치하는지 확인 */
      if (email === Admin.email && password === Admin.password) {
        saveItem('email', email);
        saveItem('password', password);
        window.location.reload();
      } else {
        setToastMessageVisible(true);
      }
    }
  };

  return (
    <>
      <Wrapper>
        <LoginToastMessage visible={toastMessageVisible} />
        <Inputform
          info={{
            type: 'email',
            id: 'email',
            name: 'email',
            ref: emailRef,
          }}
          onChange={handleChangeEmail}
          placeholder="[테스트용] test@test.com"
        />
        <ValidationCheckBox validation={emailValidation} />
      </Wrapper>
      <Wrapper>
        <Inputform
          info={{
            type: 'password',
            id: 'password',
            name: 'password',
            ref: passwordRef,
          }}
          onChange={handleChangePassword}
          placeholder="[테스트용] HelloWorld!"
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