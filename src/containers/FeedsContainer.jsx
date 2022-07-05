import { useState, useEffect } from 'react';

import styled from '@emotion/styled';

import Feed from '../containers/FeedContainer';

import { getFeeds } from '../services/api';

export default function FeedContainer() {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    getFeeds(setFeeds);
  }, []);

  if (feeds.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper>
      {feeds.map((feed) => (
        <FeedContainer key={feed.id} feed={feed} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 60px;
  width: 470px;
  @media (max-width: 480px) {
    width: 100%;
  }
`;
