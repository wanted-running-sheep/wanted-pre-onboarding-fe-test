import styled from '@emotion/styled';

import { MdFace } from 'react-icons/md';
import { BsThreeDots } from 'react-icons/bs';

export default function FeedHeader({ username }) {
  return (
    <Header>
      <UserField>
        <MdFace size={18} />
        {username}
      </UserField>
      <BsThreeDots />
    </Header>
  );
}

const Header = styled.div({
  padding: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const UserField = styled.div({
  gap: '8px',
  display: 'flex',
  fontWeight: 'bold',
  alignItems: 'center',
});
