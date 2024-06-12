import { preprocess } from './preprocess';

export function cosineSimilarity(query, tfidf) {
    const queryTokens = preprocess(query);
    const scores = {};

    for (let docId in tfidf) {
        let score = 0;
        let queryMagnitude = 0;
        let docMagnitude = 0;
        let termFound = false; // Flag to indicate if at least one term is found in the document

        queryTokens.forEach(term => {
            if (tfidf[docId][term]) {
                score += tfidf[docId][term];
                termFound = true; // Set flag to true if term is found
            }
            queryMagnitude += 1;
        });

        if (termFound) { // Calculate similarity score only if at least one term is found
            Object.values(tfidf[docId]).forEach(value => {
                docMagnitude += value * value;
            });

            if (queryMagnitude && docMagnitude) {
                scores[docId] = score / (Math.sqrt(queryMagnitude) * Math.sqrt(docMagnitude));
            }
        }
    }

    return scores;
}
