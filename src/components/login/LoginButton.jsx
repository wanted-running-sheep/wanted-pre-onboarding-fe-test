import styled from '@emotion/styled';

const Button = styled.button(
  (props) => ({
    cursor: (props.disabled) ? '' : 'pointer',
    backgroundColor: (props.disabled) ? 'gray' : '#0095f6',
  }),
  {
    color: 'white',
    width: '100%',
    padding: '6px',
    marginTop: '7px',
    fontWeight: 'bolder',
    borderRadius: '3px',
  });

export default function LoginButton({ disabled, onSubmit }) {
  return (
    <Button
      type="button"
      disabled={disabled}
      onClick={onSubmit}
    >
        로그인
    </Button>
  )
}