// @ts-check

// import _ from 'lodash';

export default (docs, searchedWord) => {
  if (docs.length === 0) {
    return [];
  }

  const result = [];
  docs.forEach((doc) => {
    if (doc.text.includes(searchedWord)) {
      result.push(doc.id);
    }
  });
  return result;
};
