import React from 'react';

const DocumentList = ({ documents }) => {
    return (
        <ol class="m-10 list-decimal text-white">
            {documents.map((document, index) => (
                <li key={index} class="bg-blue-400 rounded-md m-4 p-2">
                    <h3 class="text-white font-bold text-xl">{document.title}</h3>
                    <p>{document.summary}</p>
                </li>
            ))}
        </ol>
    );
};

export default DocumentList;
