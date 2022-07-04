import styled from '@emotion/styled';

const Button = styled.button({
  margin: '2px',
  padding: '8px',
  borderRadius: '5px',
  ':hover': {
    cursor: 'pointer',
    opacity: '0.7',
  }
});

export default function LogoutButton({ onClickLogout }) {
  return (
    <Button
      type="button"
      onClick={onClickLogout}>
        logout
    </Button>
  )
}