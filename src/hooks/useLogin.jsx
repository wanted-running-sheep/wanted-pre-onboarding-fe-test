import { useRef, useState, useContext, useEffect } from 'react';
import LoginInputValueContext from '../context/LoginInputValueContext';
import LoginValidateContext from '../context/LoginValidateContext';
import {
  checkEmailValidation,
  checkPasswordValidation,
} from '../services/validation';

function useLogin(validationType) {
  const EMAIL = 'email';
  const PASSWORD = 'password';

  const placeHolder =
    validationType === EMAIL
      ? '[테스트용] test@test.com'
      : '[테스트용] HelloWorld!';
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const inputRef = validationType === EMAIL ? emailRef : passwordRef;

  const { validation, setValidation } = useContext(LoginValidateContext);
  const { inputValue, setInputValue } = useContext(LoginInputValueContext);

  const passwordValidate = (errorCodes) => {
    return errorCodes ? errorCodes.length === 0 : errorCodes;
  };

  const checkValidateEmail = (value) => {
    return validationType === EMAIL && checkEmailValidation(value);
  };

  const onChangeInput = () => {
    const { current } = validationType === EMAIL ? emailRef : passwordRef;
    if (!current) return;

    if (checkValidateEmail(current.value)) {
      setValidation({
        ...validation,
        [validationType]: checkValidateEmail(current.value),
      });
      setInputValue({
        ...inputValue,
        [validationType]: current.value,
      });
      return;
    }

    if (validationType === PASSWORD) {
      setValidation({
        ...validation,
        errorCodes: checkPasswordValidation(current.value),
      });

      if (passwordValidate(checkPasswordValidation(current.value))) {
        setValidation((prevValidateState) => {
          return {
            ...prevValidateState,
            [validationType]: passwordValidate(
              checkPasswordValidation(current.value)
            ),
          };
        });
        setInputValue({
          ...inputValue,
          [validationType]: current.value,
        });
        return;
      }

      if (
        validation[validationType] &&
        !passwordValidate(checkPasswordValidation(current.value))
      ) {
        setValidation({
          ...validation,
          [validationType]: false,
          errorCodes: checkPasswordValidation(current.value),
        });
        return;
      }
    }

    validation[validationType] &&
      setValidation({ ...validation, [validationType]: false });
  };

  return {
    inputRef,
    onChangeInput,
    placeHolder,
    validation,
  };
}

export default useLogin;
