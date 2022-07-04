import { useEffect, useRef, useState } from 'react';

import styled from '@emotion/styled';

import { loadImage } from '../../services/api';

import { MdFace } from 'react-icons/md'
import { BsThreeDots, BsBookmark } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaRegCommentDots, FaRegSmile } from 'react-icons/fa';
import { GrSend } from 'react-icons/gr';


const FeedBox = styled.div(
  /* image가 로딩된 이후에(imageLoading === false) 피드가 보입니다. */
  (props) => ({
    display: props.imageLoading ? 'none' : 'block',
  }),    
  {
    margin: '15px',
    fontSize: '14px',
    backgroundColor: 'white',
    borderRadius: '7px',
    border: '1px solid lightgray',
  });

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

const Image = styled.div({
  maxHeight: '500px',
  overflow: 'hidden',
  '& img': {
    width: '100%',
  }
});

const ToolBar = styled.div({
  display: 'flex',
  padding: '8px',
  justifyContent: 'space-between',
});

const ThumbsUp = styled.div({
  padding: '8px',
  fontSize: '12px',
  fontWeight: 'bold',
});

const CommentField = styled.li({
  display: 'flex',
  padding: '3px 8px',
  fontSize: '12px'
});

const CommentUsername = styled.div({
  fontWeight: 'bold',
  marginRight: '5px',
});

const CommentWriteField = styled.div({
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

export default function Feed({ feed }) {
  const commentRef = useRef();
    
  const { username, img, thumbs_up, comments } = feed;

  const [imageSrc, setImageSrc] = useState();
  const [imageLoading, setImageloading] = useState(true);
  const [commentList, setCommentList] = useState(comments);

  useEffect(() => {
    loadImage(img, setImageSrc)
  }, []);

  function addNewComment() {
    const newComment = commentRef.current.value;
    setCommentList([...commentList, {
      'name': 'admin', 
      'comment': newComment
    }]);
    commentRef.current.value = '';
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && commentRef.current.value !== '') {
      addNewComment();
    }
  }

  const handleClick = () => {
    if (commentRef.current.value !== '') {
      addNewComment();
    }
  }

  return (
    <FeedBox imageLoading={imageLoading}>
      <Header>
        <UserField>
          <MdFace size={18}/>
          {username}
        </UserField>
        <BsThreeDots/>
      </Header>
      <Image>
        <img
          src={imageSrc}
          alt="instagram-image"
          onLoad={() => setImageloading(false)}
        />
      </Image>
      <ToolBar>
        <div style={{ display: 'flex', gap: '8px', fontSize: '18px' }}>
          <AiOutlineHeart/>
          <FaRegCommentDots/>
          <GrSend/>
        </div>
        <div>
          <BsBookmark/>
        </div>
      </ToolBar>
      <ThumbsUp>
        좋아요 {thumbs_up}개
      </ThumbsUp>
      <ul style={{ marginBottom: '8px' }}>
        {commentList.map((item, index) => (
          <CommentField key={index}>
            <CommentUsername>{item.name}</CommentUsername>
            <p>{item.comment}</p>
          </CommentField>
        ))}
      </ul>
      <CommentWriteField>
        <FaRegSmile size={18}/>
        <InputField
          placeholder="댓글달기..."
          onKeyPress={handleKeyPress}
          ref={commentRef}
        />
        <PostingButton
          type="button"
          onClick={handleClick}
        >
            게시
        </PostingButton>
      </CommentWriteField>
    </FeedBox>
  )
}