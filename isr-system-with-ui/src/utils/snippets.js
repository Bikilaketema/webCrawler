import { preprocess } from "./preprocess";

export function extractSnippet(text, query) {
    const queryTokens = preprocess(query);
    const regex = new RegExp(`(${queryTokens.join("|")})`, "gi");
    const snippet = text.split(regex).slice(0, 10).join(" ");
  
    return snippet;
  }
  
  export function highlightSnippet(snippet, query) {
    const queryTokens = preprocess(query);
    const regex = new RegExp(`(${queryTokens.join("|")})`, "gi");
  
    return snippet.replace(regex, match => `<mark>${match}</mark>`);
  }
  