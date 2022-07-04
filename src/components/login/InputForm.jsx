import styled from '@emotion/styled';

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

export default function Inputform({ info, placeholder, onChange }) {
  const { type, id, name, ref } = info;

  return (
    <InputFormBox>
      <InputField
        type={type}
        id={id}
        name={name}
        ref={ref}
        autocomplete='off'
        onChange={onChange}
        placeholder={placeholder}/>
    </InputFormBox>
  )
}