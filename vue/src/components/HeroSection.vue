<template>
  <section class="relative pt-24 pb-20 md:pt-32 md:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
    <!-- Background gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>

    <!-- Floating elements -->
    <div class="absolute top-20 left-10 w-20 h-20 bg-maia-blue/10 rounded-full animate-float"></div>
    <div class="absolute top-40 right-20 w-16 h-16 bg-maia-purple/10 rounded-full animate-float" style="animation-delay: -2s;"></div>
    <div class="absolute bottom-20 left-1/4 w-12 h-12 bg-maia-green/10 rounded-full animate-float" style="animation-delay: -4s;"></div>

    <div class="relative max-w-7xl mx-auto text-center">
      <h1 class="text-6xl md:text-8xl font-bold mb-8 text-balance leading-tight">
        Bridge the Experience Gap with
        <span class="bg-gradient-to-r from-maia-blue to-maia-purple bg-clip-text text-transparent">
          AI Assistants
        </span>
      </h1>

      <p class="text-xl md:text-2xl text-gray-700 mb-16 max-w-4xl mx-auto text-pretty leading-relaxed">
        Transform your junior talent into senior-level performers. Maia's AI assistants work alongside your team, delivering consistent, high-quality results while keeping your data completely private.
      </p>

      <div class="flex flex-col sm:flex-row gap-6 justify-center mb-16">
        <button @click="scrollToSection('cta')" class="group bg-gradient-to-r from-maia-blue to-maia-purple text-white px-10 py-5 rounded-xl text-lg font-semibold hover:shadow-2xl hover:shadow-maia-blue/25 transition-all duration-300 transform hover:-translate-y-1">
          <span class="flex items-center justify-center">
            Schedule a Demo
            <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </span>
        </button>
        <button @click="scrollToSection('how-it-works')" class="group border-2 border-gray-300 text-gray-900 px-10 py-5 rounded-xl text-lg font-semibold hover:border-maia-blue hover:text-maia-blue transition-all duration-300 transform hover:-translate-y-1">
          <span class="flex items-center justify-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            Watch Demo
          </span>
        </button>
      </div>

      <!-- Trust indicators -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-600">
        <div class="flex items-center">
          <svg class="w-5 h-5 text-maia-green mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
          </svg>
          Enterprise Security
        </div>
        <div class="flex items-center">
          <svg class="w-5 h-5 text-maia-green mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
          </svg>
          Private by Design
        </div>
        <div class="flex items-center">
          <svg class="w-5 h-5 text-maia-green mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
          </svg>
          No Third-Party Data
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    }
  }
}
</script>
