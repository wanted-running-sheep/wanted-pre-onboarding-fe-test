import { useEffect, useState, useContext } from 'react';
import styled from '@emotion/styled';

import {
  Inputform,
  LoginButton,
  LoginToastMessage,
  ValidationCheckBox,
  CheckPasswordValidation,
} from '../components/login';
import { setLocalStorage } from '../services/storage';
import { adminAccountInfo } from '../constants';

import LoginCheckContext from '../context/LoginCheckContext';
import LoginValidateContext from '../context/LoginValidateContext';
import LoginInputValueContext from '../context/LoginInputValueContext';

export default function LoginContainer() {
  const {
    validation: {
      email: emailValidate,
      password: passwordValidate,
      errorCodes,
    },
  } = useContext(LoginValidateContext);

  const {
    inputValue: { email: emailValue, password: pwValue },
  } = useContext(LoginInputValueContext);

  const { setIsSigned } = useContext(LoginCheckContext);

  const [toastMessageVisible, setToastMessageVisible] = useState(false);

  useEffect(() => {
    setTimeout(function () {
      setToastMessageVisible(false);
    }, 2000);
  }, [toastMessageVisible]);

  const handleSubmit = () => {
    if (
      emailValidate &&
      passwordValidate &&
      emailValue === adminAccountInfo.email &&
      pwValue === adminAccountInfo.password
    ) {
      setLocalStorage('isSigned', true);
      setIsSigned(true);
      return;
    }

    setToastMessageVisible(true);
  };

  const isActiveBtn = () => {
    return emailValidate && passwordValidate;
  };

  return (
    <>
      <Wrapper>
        <LoginToastMessage visible={toastMessageVisible} />
        <Inputform validationType="email" />
        <ValidationCheckBox validation={emailValidate} />
      </Wrapper>
      <Wrapper>
        <Inputform validationType="password" />
        <ValidationCheckBox validation={passwordValidate} />
      </Wrapper>
      <Wrapper>
        <CheckPasswordValidation
          errorCodes={errorCodes ? errorCodes : [1, 2, 3]}
        />
      </Wrapper>
      <LoginButton disabled={!isActiveBtn()} onSubmit={handleSubmit} />
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  vertical-align: center;
`;
