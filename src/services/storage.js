export function setLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

export function getLocalStorage(key) {
  const item = localStorage.getItem(key);

  if (!item || item === undefined) return null;

  return JSON.parse(item);
}

export function removeLocalStorage(key) {
  localStorage.removeItem(key);
}
