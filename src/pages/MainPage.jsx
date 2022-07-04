import { useState, useEffect } from 'react';

import { getFeeds } from '../services/api';

import GnbContainer from '../containers/GnbContainer';
import FeedContainer from '../containers/FeedContainer';

export default function MainPage({ setEmail }) {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    getFeeds(setFeeds);
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#FAFAFA', overflow: 'auto' }}>
      <GnbContainer setEmail={setEmail}/>
      <FeedContainer feeds={feeds}/> 
    </div>
  )
}