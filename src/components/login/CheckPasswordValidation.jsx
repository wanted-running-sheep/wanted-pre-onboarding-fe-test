import styled from '@emotion/styled';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { passwordErrorMsg } from '../../constants';

export default function CheckPasswordValidation({ errorCodes }) {
  return (
    <ul>
      {passwordErrorMsg.map((message, index) => (
        <CheckItem key={index} check={errorCodes.includes(index + 1)}>
          <AiOutlineCheckCircle /> {message}
        </CheckItem>
      ))}
    </ul>
  );
}

const CheckItem = styled.li`
  font-size: 11px;
  line-height: 24px;
  color: ${(props) => (props.check ? 'lightgray' : 'green')};
`;
