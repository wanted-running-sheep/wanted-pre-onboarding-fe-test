import styled from '@emotion/styled';
import useLogin from '../../hooks/useLogin';
import ValidationCheckBox from './ValidationCheckBox';

const InputFormBox = styled.div({
  width: '100%',
  marginBottom: '5px',
  borderRadius: '3px',
  backgroundColor: '#fafafa',
  border: '1px solid lightgray',
});

const InputField = styled.input({
  width: '100%',
  padding: '10px',
  backgroundColor: 'transparent',
});

export default function Inputform({ validationType }) {
  const { inputRef, onChangeInput, placeHolder } = useLogin(validationType);

  return (
    <InputFormBox>
      <InputField
        type={validationType}
        id={validationType}
        name={validationType}
        ref={inputRef}
        autocomplete="off"
        onChange={onChangeInput}
        placeholder={placeHolder}
      />
    </InputFormBox>
  );
}
