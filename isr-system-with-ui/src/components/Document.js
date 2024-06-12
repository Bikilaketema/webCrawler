import React from 'react';

function Document({ text, snippet }) {
  return (
    <div className="document" class="bg-blue-600 p-2 m-4 rounded-lg text-white text-lg">
      <p dangerouslySetInnerHTML={{ __html: snippet }}></p>
    </div>
  );
}

export default Document;
