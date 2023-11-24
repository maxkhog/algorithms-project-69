// @ts-check

import { test, expect } from '@jest/globals';
import search from '../index.js';

// создание документа
// документ имеет два атрибута "id" и "text"
const doc1 = { id: 'doc1', text: "I can't shoot straight unless I've had a pint!" };
const doc2 = { id: 'doc2', text: "Don't shoot shoot shoot that thing at me." };
const doc3 = { id: 'doc3', text: "I'm your shooter." };
const docs = [doc1, doc2, doc3];

test('search word', () => {
  expect(search(docs, 'shoot')).toEqual(expect.arrayContaining(['doc1', 'doc2']));
});

test('search word in empty array', () => {
  expect(search([], 'shoot')).toEqual(expect.arrayContaining([]));
});
