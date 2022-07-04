import { useContext } from 'react';
import styled from '@emotion/styled';
import { AiOutlineCheckCircle } from 'react-icons/ai';

import {
  ERROR_PASSWORD_LENGTH,
  ERROR_UPPERCASE_TEXT,
  ERROR_SPECIAL_TEXT,
  passwordErrorMsg,
} from '../../constants';

export default function CheckPasswordValidation({ errorCodes }) {
  return (
    <ul>
      <CheckItem check={errorCodes.includes(1)}>
        <AiOutlineCheckCircle /> {passwordErrorMsg[0]}
        {/* {passwordErrorCodes[ERROR_PASSWORD_LENGTH]} */}
      </CheckItem>
      <CheckItem check={errorCodes.includes(2)}>
        <AiOutlineCheckCircle /> {passwordErrorMsg[1]}
        {/* {passwordErrorCodes[ERROR_UPPERCASE_TEXT]} */}
      </CheckItem>
      <CheckItem check={errorCodes.includes(3)}>
        <AiOutlineCheckCircle /> {passwordErrorMsg[2]}
        {/* {passwordErrorCodes[ERROR_SPECIAL_TEXT]} */}
      </CheckItem>
    </ul>
  );
}

const CheckItem = styled.li`
  font-size: 11px;
  line-height: 24px;
  color: ${(props) => (props.check ? 'lightgray' : 'green')};
`;
