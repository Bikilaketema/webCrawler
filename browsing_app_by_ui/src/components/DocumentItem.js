import React from 'react';

const DocumentItem = ({ document }) => {
    return (
        <div>
            <h3 class="text-white font-bold text-xl">{document.title}</h3>
            <p class="text-white">{document.summary}</p>
        </div>
    );
};

export default DocumentItem;
