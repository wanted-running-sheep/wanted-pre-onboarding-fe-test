import styled from '@emotion/styled';

import { FaRegSmile } from 'react-icons/fa';

export default function CommentWriteField({
  handleKeyPress,
  commentRef,
  handleClickPostingButton,
}) {
  return (
    <Wrapper>
      <FaRegSmile size={18} />
      <InputField
        placeholder="댓글달기..."
        onKeyPress={handleKeyPress}
        ref={commentRef}
      />
      <PostingButton type="button" onClick={handleClickPostingButton}>
        게시
      </PostingButton>
    </Wrapper>
  );
}

const Wrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  borderTop: '1px solid #F1F1F1',
  padding: '12px 8px',
});

const InputField = styled.input({
  flex: '1',
  padding: '4px',
});

const PostingButton = styled.button({
  color: '#0095F6',
  fontWeight: 'bold',
  cursor: 'pointer',
  background: 'transparent',
});
