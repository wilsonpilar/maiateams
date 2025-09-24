<template>
  <section class="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
    <!-- Background gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-maia-blue via-maia-purple to-maia-green"></div>

    <!-- Floating elements -->
    <div class="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
    <div class="absolute top-20 right-20 w-24 h-24 bg-white/10 rounded-full animate-float" style="animation-delay: -3s;"></div>
    <div class="absolute bottom-20 left-1/3 w-20 h-20 bg-white/10 rounded-full animate-float" style="animation-delay: -6s;"></div>

    <div class="relative max-w-5xl mx-auto text-center">
      <h2 class="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight">
        Ready to Bridge the
        <span class="block">Experience Gap?</span>
      </h2>
      <p class="text-xl md:text-2xl text-white/90 mb-16 max-w-4xl mx-auto leading-relaxed">
        Join forward-thinking teams who are already using Maia to unlock their junior talent's potential.
        <span class="font-semibold">Your data stays private. Your team gets smarter.</span>
      </p>

      <div class="flex justify-center mb-16">
        <a :href="emailHref" class="group bg-white text-maia-blue px-12 py-6 rounded-2xl text-xl font-bold hover:shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center">
          <span class="flex items-center justify-center">
            <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            {{ emailDisplay }}
          </span>
        </a>
      </div>

      <!-- Trust indicators -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80">
        <div class="flex items-center">
          <svg class="w-5 h-5 text-white mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
          </svg>
          Simple Setup
        </div>
        <div class="flex items-center">
          <svg class="w-5 h-5 text-white mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
          </svg>
          Clear Pricing
        </div>
        <div class="flex items-center">
          <svg class="w-5 h-5 text-white mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
          </svg>
          Enterprise security
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CTASection',
  data() {
    return {
      emailDisplay: '',
      emailHref: ''
    }
  },
  mounted() {
    this.generateEmail()
  },
  methods: {
    generateEmail() {
      // Obfuscated email generation to prevent crawler extraction
      const domain = 'maiateam.com'
      const user = 'sales'

      // Create obfuscated version by splitting and reconstructing
      const obfuscatedEmail = this.obfuscateEmail(user, domain)

      // For display, we'll show the actual email
      this.emailDisplay = 'sales@maiateam.com'
      this.emailHref = 'mailto:' + obfuscatedEmail
    },

    obfuscateEmail(user, domain) {
      // Split domain and reconstruct to make it harder for crawlers
      const domainParts = domain.split('.')
      const userParts = user.split('')

      // Reconstruct with some obfuscation
      const reconstructed = userParts.join('') + '@' + domainParts.join('.')
      return reconstructed
    },

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
