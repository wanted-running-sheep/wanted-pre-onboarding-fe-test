import logo from '../../image/Logo.svg';

import { Link } from 'react-router-dom';

export default function Logo({ size }) {
  return (
    <Link 
      to="/"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <img 
        src={logo} 
        alt="instagram"
        style={{
          width: size,
        }}
      />
    </Link>
  )
}