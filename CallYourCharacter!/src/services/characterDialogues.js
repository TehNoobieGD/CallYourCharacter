const dialogues = {
    'Among Us': {
        'en': {
            'hello': 'Hello, crewmate! How can I assist you?',
            'default': 'I am just a crewmate, trying to complete my tasks.'
        },
        'fr': {
            'hello': 'Bonjour, coéquipier! Comment puis-je vous aider?',
            'default': 'Je suis juste un coéquipier, essayant de terminer mes tâches.'
        },
        'es': {
            'hello': 'Hola, compañero! ¿Cómo puedo ayudarte?',
            'default': 'Solo soy un compañero, tratando de completar mis tareas.'
        }
    },
    'KreekCraft': {
        'en': {
            'hello': 'Hey there! What’s up?',
            'default': 'I am busy streaming, but I can chat for a bit.'
        },
        'fr': {
            'hello': 'Salut! Quoi de neuf?',
            'default': 'Je suis occupé à streamer, mais je peux parler un peu.'
        },
        'es': {
            'hello': '¡Hola! ¿Qué pasa?',
            'default': 'Estoy ocupado transmitiendo, pero puedo hablar un poco.'
        }
    }
};

export function getCharacterResponse(character, userSpeech, userLanguage) {
    const characterDialogue = dialogues[character][userLanguage];
    for (const key in characterDialogue) {
        if (userSpeech.includes(key)) {
            return characterDialogue[key];
        }
    }
    return characterDialogue['default'];
}
