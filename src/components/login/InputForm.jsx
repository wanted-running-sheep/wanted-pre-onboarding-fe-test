import styled from '@emotion/styled';
import useLogin from '../hooks/useLogin';

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
  /* const { type, id, name, ref } = info; */
  const { type, id, name, inputRef, onChangeInput } = useLogin(validationType);

  return (
    <InputFormBox>
      <InputField
        type={type}
        id={id}
        name={name}
        ref={inputRef}
        autocomplete="off"
        onChange={onChangeInput}
        placeholder={placeHolder}
      />
    </InputFormBox>
  );
}
