import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import ptBR from './locales/pt-BR.json'

// Function to detect browser language
function detectLanguage() {
  // Check if user has a saved language preference
  const savedLanguage = sessionStorage.getItem('maia-language')
  if (savedLanguage) {
    return savedLanguage
  }

  // Always default to English unless user explicitly selects another language
  return 'en'
}

const i18n = createI18n({
  legacy: false,
  locale: detectLanguage(),
  fallbackLocale: 'en',
  messages: {
    en,
    'pt-BR': ptBR,
  },
})

export default i18n
