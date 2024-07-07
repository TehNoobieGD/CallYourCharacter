import React from 'react';

const CharacterList = ({ onSelectCharacter }) => {
    return (
        <div id="character-list">
            <button data-character="Among Us" onClick={() => onSelectCharacter('Among Us')}>Among Us</button>
            <button data-character="KreekCraft" onClick={() => onSelectCharacter('KreekCraft')}>KreekCraft</button>
        </div>
    );
};

export default CharacterList;
