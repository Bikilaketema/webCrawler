import { oromoStopwords } from './stopwords';

export function preprocess(text) {
  // Convert to lowercase
  text = text.toLowerCase();

  // Handle empty strings
  if (!text) return [];

  // Remove diacritics and special characters (specific to Afaan Oromoo)
  text = text.normalize('NFD').replace(/[\u0300-\u036f]/g, ""); // Normalize Unicode
  
  // Remove punctuation
  text = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  
  // Tokenize
  let tokens = text.split(/\s+/);
  
  // Remove stopwords
  tokens = tokens.filter(word => !oromoStopwords.includes(word));
  
  return tokens;
}
