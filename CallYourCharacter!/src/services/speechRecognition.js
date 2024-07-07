export function initSpeechRecognition(onResult) {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
        const userSpeech = event.results[0][0].transcript;
        onResult(userSpeech);
    };

    recognition.onerror = (event) => {
        console.error('Speech recognition error', event.error);
    };

    return recognition;
}
