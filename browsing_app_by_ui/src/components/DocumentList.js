import React from 'react';

const DocumentList = ({ documents }) => {
    return (
        <ul class="m-10">
            {documents.map((document, index) => (
                <li key={index} class="bg-blue-400 rounded-md m-4 p-2">
                    <h3 class="text-white font-bold text-xl">{document.title}</h3>
                    <p>{document.summary}</p>
                </li>
            ))}
        </ul>
    );
};

export default DocumentList;
