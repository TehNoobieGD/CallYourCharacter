import { franc } from 'franc';

export function detectLanguage(text) {
    const langCode = franc(text);
    const langMap = {
        'eng': 'en',
        'fra': 'fr',
        'spa': 'es',
    };
    return langMap[langCode] || 'en';
}
