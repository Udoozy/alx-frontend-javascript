export default function cleanSet(set, startString) {
  if (!startString || !startString.length || typeof startString !== 'string') return '';

  let actualString = '';
  set.forEach((element) => {
    if (element && element.startsWith(startString)) actualString += `${element.slice(startString.length)}-`;
  });

  return actualString.slice(0, actualString.length - 1);
}
