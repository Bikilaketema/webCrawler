// src/data/documents.js
import data from './documents.json';

export const documents = data.map((doc, index) => ({
  id: index + 1,
  title: doc.title || "",
  summary: doc.summary || "",
  text: `${doc.title} ${doc.summary}`.trim()
}));
