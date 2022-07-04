import React, { useRef } from 'react';
import {
  checkEmailValidation,
  checkPasswordValidation,
} from '../services/validation';

function useLogin(validationType) {
  const EMAIL = 'email';
  const placeHolder =
    validationType === EMAIL
      ? '[테스트용] test@test.com'
      : '[테스트용] HelloWorld!';
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [emailValidation, setEmailValidation] = useState();
  const [errorCodes, setErrorCodes] = useState();
  const [disabled, setDisabled] = useState(true);

  const onChangeInput = () => {
    const { current } = validationType === EMAIL ? emailRef : passwordRef;
    if (!current) return;

    if (validationType === EMAIL) {
      setEmailValidation(checkEmailValidation(current.value));
      return;
    }

    setErrorCodes(checkPasswordValidation(current.value));
  };

  return {
    type: validationType
  };
}

export default useLogin;
