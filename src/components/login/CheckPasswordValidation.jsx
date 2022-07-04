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
)

export default function CheckPasswordValidation({ errorCodes }) {
  const firstMessage = passwordErrorCodes[1];
  const secondMessage = passwordErrorCodes[2];
  const thirdMessage = passwordErrorCodes[3];

  return (
    <ul>
      <CheckItem
        check={errorCodes.includes(1) ? true : false}
      >
        <AiOutlineCheckCircle/>
        {' '}{firstMessage}
      </CheckItem>
      <CheckItem
        check={errorCodes.includes(2) ? true : false}
      >
        <AiOutlineCheckCircle/>
        {' '}{secondMessage}
      </CheckItem>
      <CheckItem
        check={errorCodes.includes(3) ? true : false}
      >
        <AiOutlineCheckCircle/>
        {' '}{thirdMessage}
      </CheckItem>
    </ul>
  )
}