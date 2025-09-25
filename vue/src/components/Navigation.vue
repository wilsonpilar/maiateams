<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img src="/maia_logo.jpg" alt="MAIA" class="h-8 w-auto">
          </div>
        </div>

        <!-- Language Selector -->
        <div class="flex items-center">
          <div class="relative">
            <select
              v-model="currentLocale"
              @change="changeLanguage"
              class="appearance-none bg-white border border-gray-300 rounded-lg px-3 py-2 pr-8 text-sm font-medium text-gray-700 hover:border-maia-blue focus:outline-none focus:ring-2 focus:ring-maia-blue focus:border-transparent transition-colors"
            >
              <option value="en">🇺🇸 English</option>
              <option value="pt-BR">🇧🇷 Português (BR)</option>
            </select>
            <div class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  name: 'Navigation',
  setup() {
    const { locale } = useI18n()

    return {
      locale
    }
  },
  data() {
    return {
      currentLocale: this.$i18n.locale
    }
  },
  methods: {
    changeLanguage() {
      this.$i18n.locale = this.currentLocale
      // Save language preference to session storage
      sessionStorage.setItem('maia-language', this.currentLocale)
    }
  }
}
</script>
