export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let called = weakMap.get(endpoint) || 0;

  numofQuery += 1;

  weakMap.set(endpoint, numofQuery);

  if (numofQuery >= 5) {
    throw Error('Endpoint load is high');
  }

  return numofQuery;
}
