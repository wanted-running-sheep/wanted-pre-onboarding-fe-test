import { AiOutlineCheckCircle, AiOutlineExclamationCircle } from 'react-icons/ai';

export default function ValidationCheckBox({ validation }) {
  if (validation === undefined) {
    return (
      <AiOutlineCheckCircle 
        style={{
          height: '100%',
          width: '24px',
          marginLeft: '5px',
          color: 'lightgray',
        }}
      />
    )
  }

  if (validation === true) {
    return (
      <AiOutlineCheckCircle
        style={{
          height: '100%',
          width: '24px',
          marginLeft: '5px',
          color: 'green',
        }}
      />
    )
  }

  return (
    <AiOutlineExclamationCircle
      style={{
        height: '100%',
        width: '24px',
        marginLeft: '5px',
        color: '#EA6666',
      }}
    />
  )
}