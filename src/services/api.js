export async function getFeeds(setFeeds) {
  const url = 'http://localhost:3000/data/feed.json';
  const response = await fetch(url);
  const data = await response.json();
  setFeeds(data);
}

export async function loadImage(url, setImageSrc) {
  const response = await fetch(url);
  setImageSrc(response.url);
}