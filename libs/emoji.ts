// https://stackoverflow.com/a/70738479
export function getFlagEmoji(iso2: string) {
  const codePoints = iso2
    .toUpperCase()
    .split('')
    .map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}
