import styled from '@emotion/styled';

export default function ThumbsUp({ thumbsUp }) {
  return <Wrapper>좋아요 {thumbs_up}개</Wrapper>;
}

const Wrapper = styled.div({
  padding: '8px',
  fontSize: '12px',
  fontWeight: 'bold',
});
