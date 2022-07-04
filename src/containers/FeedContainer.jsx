import { useEffect, useRef, useState } from 'react';

import styled from '@emotion/styled';

import { loadImage } from '../services/api';

import FeedImage from '../components/feed/FeedImage';
import FeedHeader from '../components/feed/FeedHeader';
import FeedIcons from '../components/feed/FeedIcons';
import ThumbsUp from '../components/feed/ThumbsUp';
import Comments from '../components/feed/Comments';
import CommentWriteField from '../components/feed/CommentWriteField';

export default function FeedContainer({ feed }) {
  const { username, img, thumbs_up, comments } = feed;

  const commentRef = useRef();

  const [imageSrc, setImageSrc] = useState();
  const [imageLoading, setImageloading] = useState(true);
  const [commentList, setCommentList] = useState(comments);

  useEffect(() => {
    loadImage(img, setImageSrc);
  }, []);

  function addNewComment() {
    const newComment = commentRef.current.value;
    setCommentList([
      ...commentList,
      {
        name: 'admin',
        comment: newComment,
      },
    ]);
    commentRef.current.value = '';
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && commentRef.current.value !== '') {
      addNewComment();
    }
  };

  const handleClickPostingButton = () => {
    if (commentRef.current.value !== '') {
      addNewComment();
    }
  };

  return (
    <FeedBox imageLoading={imageLoading}>
      <FeedHeader username={username} />
      <FeedImage imageSrc={imageSrc} setImageSrc={setImageSrc} />
      <FeedIcons />
      <ThumbsUp thumbs_up={thumbs_up} />
      <Comments commentList={commentList} />
      <CommentWriteField
        handleKeyPress={handleKeyPress}
        commentRef={commentRef}
        onClickPostingButton={handleClickPostingButton}
      />
    </FeedBox>
  );
}

const FeedBox = styled.div(
  (props) => ({
    display: props.imageLoading ? 'none' : 'block',
  }),
  {
    margin: '15px',
    fontSize: '14px',
    backgroundColor: 'white',
    borderRadius: '7px',
    border: '1px solid lightgray',
  }
);
