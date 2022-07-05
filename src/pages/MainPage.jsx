import GnbContainer from '../containers/GnbContainer';
import FeedsContainer from '../containers/FeedsContainer';

export default function MainPage() {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: '#FAFAFA',
        overflow: 'auto',
      }}
    >
      <GnbContainer />
      <FeedsContainer />
    </div>
  );
}
