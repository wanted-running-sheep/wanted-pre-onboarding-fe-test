import styled from '@emotion/styled';

export default function FeedImage({ imageSrc, setImageloading }) {
  return (
    <Image>
      <img
        src={imageSrc}
        alt="instagram-image"
        onLoad={() => setImageloading(false)}
      />
    </Image>
  );
}

const Image = styled.div({
  maxHeight: '500px',
  overflow: 'hidden',
  '& img': {
    width: '100%',
  },
});
