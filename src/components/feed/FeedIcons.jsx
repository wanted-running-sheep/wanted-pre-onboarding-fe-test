import styled from '@emotion/styled';

import { BsBookmark } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaRegCommentDots } from 'react-icons/fa';
import { GrSend } from 'react-icons/gr';

export default function FeedIcons() {
  return (
    <Container>
      <Wrapper>
        <AiOutlineHeart />
        <FaRegCommentDots />
        <GrSend />
      </Wrapper>
      <div>
        <BsBookmark />
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding: 8px;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  font-size: 18px;
`;
