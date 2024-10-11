export default function (boolean) {
  return new Promise((resolve, reject) => {
    const myObj = {
      status: 200,
      body: 'Success',
    };
    if (boolean === true) {
      resolve(myObj);
    } else {
      reject(Error('The fake API is not working currently'));
    }
  });
}
