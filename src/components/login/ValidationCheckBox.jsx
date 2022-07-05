import { AiOutlineCheckCircle } from 'react-icons/ai';

export default function ValidationCheckBox({ validation }) {
  const changeColor =
    validation === undefined ? 'lightgray' : validation ? 'green' : '#EA6666';

  return (
    <AiOutlineCheckCircle
      style={{
        height: '100%',
        width: '24px',
        marginLeft: '5px',
        color: changeColor,
      }}
    />
  );
}
