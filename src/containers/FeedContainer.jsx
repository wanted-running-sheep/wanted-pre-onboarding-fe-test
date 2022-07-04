import styled from '@emotion/styled';

import Feed from '../components/feed/Feed';

const Wrapper = styled.div({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  paddingTop: '60px',
  width: '470px',
  '@media (max-width: 480px)': {
    width: '100%',
  }
});

export default function FeedContainer({ feeds }) {
  if (feeds.length === 0) {
    return (
      <div>Loading...</div>
    )
  }
    
  return (
    <Wrapper>
      <ul>
        {feeds.map((feed) => (
          <li key={feed.id}>
            <Feed feed={feed}/>
          </li>
        ))}
      </ul>
    </Wrapper>
  )
}