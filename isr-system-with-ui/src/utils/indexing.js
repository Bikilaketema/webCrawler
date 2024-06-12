import { preprocess } from "./preprocess";

export function buildIndex(documents) {
    const index = {};
    
    documents.forEach(doc => {
      const words = preprocess(doc.text);
      words.forEach(word => {
        if (!index[word]) {
          index[word] = [];
        }
        index[word].push(doc.id);
      });
    });
    
    return index;
  }
  