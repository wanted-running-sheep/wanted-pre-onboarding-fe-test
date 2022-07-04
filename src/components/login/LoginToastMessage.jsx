import styled from '@emotion/styled';

import { RiErrorWarningLine } from 'react-icons/ri';

const ToastBox = styled.div(
  (props) => ({
    opacity: props.visible ? '1' : '0',
  }),
  {
    top: '0',
    right: '0',
    margin: '15px',
    display: 'flex',
    fontSize: '14px',
    color: '#424242',
    fontWeight: 'bold',
    position: 'absolute',
    alignItems: 'center',
    borderRadius: '5px',
    backgroundColor: 'white',
    padding: '18px 25px 18px 30px',
    boxShadow: 'rgba(60, 64, 67, 0.1) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
    transition: 'all .3s',
  });

const PointColor = styled.div({
  left: 0,
  zIndex: '10',
  width: '10px',
  height: '100%',
  position: 'absolute',
  borderRadius: '5px 0 0 5px',
  backgroundColor: '#ff4a4a',
})

export default function LoginToastMessage({ visible }) {
  return (
    <ToastBox className={'toast-message'} visible={visible}>
      <PointColor/>
      <RiErrorWarningLine size={22} style={{ marginRight: '5px', color: '#ff4a4a' }}/>
        등록되지 않은 사용자입니다.
    </ToastBox>
  )
}