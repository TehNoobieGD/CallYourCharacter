import React from 'react';

const Conversation = ({ conversation }) => {
    return (
        <div id="conversation">
            {conversation.map((entry, index) => (
                <div key={index}>
                    <p id="user-speech">You: {entry.user}</p>
                    <p id="character-response">Character: {entry.character}</p>
                </div>
            ))}
        </div>
    );
};

export default Conversation;
