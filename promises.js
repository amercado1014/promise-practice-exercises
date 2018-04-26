const testNum = num => {
  return new Promise((resolve, reject) => {
    if (num > 10) {
      resolve(`${num} is greater than 10, success!`);
    } else {
      reject(`${num} is less than 10, error!`);
    }
  });
}

const makeAllCaps = wordsArray => {
  const caps = wordsArray.map(word => {
    return new Promise((resolve, reject) => {
      if (typeof word === 'string') {
        resolve(word.toUpperCase());
      } else {
        reject('No, the array you passed in contained an element that was not a string');
      }
    });
  });

  return Promise.all(caps);
}

const sortWords = wordsArray => {
  return Promise.resolve(wordsArray.sort());
}