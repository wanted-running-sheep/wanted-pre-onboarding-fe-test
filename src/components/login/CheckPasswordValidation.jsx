import styled from '@emotion/styled';

import { passwordErrorCodes } from '../../services/validation';

import { AiOutlineCheckCircle } from 'react-icons/ai';

const CheckItem = styled.li(
  {
    fontSize: '11px',
    lineHeight: '24px',
  },
  (props) => ({
    color: props.check ? 'lightgray' : 'green',
  })
);

export default function CheckPasswordValidation({ errorCodes }) {
  const codes = [1, 2, 3];

  return (
    <ul>
      {codes.map((code, i) => {
        return (
          <CheckItem key={i} check={errorCodes.includes(code) ? true : false}>
            <AiOutlineCheckCircle /> {passwordErrorCodes[code]}
          </CheckItem>
        );
      })}
    </ul>
  );
}
