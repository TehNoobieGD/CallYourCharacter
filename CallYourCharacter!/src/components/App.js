import React from 'react';
import CharacterList from './CharacterList';
import CallScreen from './CallScreen';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentCharacter: null };
    }

    selectCharacter = (character) => {
        this.setState({ currentCharacter: character });
    }

    render() {
        return (
            <div>
                {this.state.currentCharacter ? (
                    <CallScreen character={this.state.currentCharacter} />
                ) : (
                    <CharacterList onSelectCharacter={this.selectCharacter} />
                )}
            </div>
        );
    }
}

export default App;
