// @ts-check

// import _ from 'lodash';

export default (docs, searchedWord) => {
  if (docs.length === 0) {
    return [];
  }

  const term = searchedWord.match(/\w+/g);

  const result = [];
  docs.forEach((doc) => {
    if (doc.text.includes(term)) {
      result.push(doc.id);
    }
  });
  return result;
};
