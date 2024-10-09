export default function appendToEachArrayValue(array, appendString) {
  const myArr = [];
  for (const idx of array) {
    const value = array[idx];
    myArr.push(appendString + value);
  }

  return myArr;
}
