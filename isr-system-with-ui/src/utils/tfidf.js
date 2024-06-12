// src/utils/tfidf.js
export function calculateTFIDF(index, documents) {
    const tfidf = {};
    const totalDocs = documents.length;
  
    for (let term in index) {
      const docsWithTerm = index[term].length;
      index[term].forEach(docId => {
        if (!tfidf[docId]) tfidf[docId] = {};
        if (!tfidf[docId][term]) tfidf[docId][term] = 0;
  
        const termFreq = index[term].filter(id => id === docId).length;
        const inverseDocFreq = Math.log(totalDocs / docsWithTerm);
  
        tfidf[docId][term] = termFreq * inverseDocFreq;
      });
    }
  
    return tfidf;
  }
  
