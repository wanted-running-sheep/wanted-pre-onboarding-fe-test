import styled from '@emotion/styled';

export default function Comments({ commentList }) {
  return (
    <>
      {commentList.map((item, index) => (
        <CommentField key={index}>
          <CommentUsername>{item.name}</CommentUsername>
          <p>{item.comment}</p>
        </CommentField>
      ))}
    </>
  );
}

const CommentField = styled.div({
  display: 'flex',
  padding: '3px 8px',
  fontSize: '12px',
});

const CommentUsername = styled.div({
  fontWeight: 'bold',
  marginRight: '5px',
});
