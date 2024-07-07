import React from 'react';
import Conversation from './Conversation';
import { initSpeechRecognition } from '../services/speechRecognition';
import { getCharacterResponse } from '../services/characterDialogues';
import { detectLanguage } from '../services/languageDetection';
import { speak } from '../services/speechSynthesis';

class CallScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            conversation: [],
        };
        this.recognition = null;
    }

    componentDidMount() {
        this.recognition = initSpeechRecognition(this.handleUserSpeech);
        this.recognition.start();
    }

    handleUserSpeech = (userSpeech) => {
        const userLanguage = detectLanguage(userSpeech) || 'en';
        const characterResponse = getCharacterResponse(this.props.character, userSpeech, userLanguage);

        this.setState((prevState) => ({
            conversation: [...prevState.conversation, { user: userSpeech, character: characterResponse }],
        }));

        speak(characterResponse, userLanguage);
    }

    render() {
        return (
            <div id="call-screen">
                <Conversation conversation={this.state.conversation} />
            </div>
        );
    }
}

export default CallScreen;
