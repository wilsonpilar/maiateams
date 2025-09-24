<template>
  <div class="bg-gray-25 text-gray-900 font-sans" style="background-color: #f8f9fa;">
    <!-- Navigation -->
    <Navigation />

    <!-- Hero Section -->
    <HeroSection />

    <!-- Why Maia Section -->
    <WhyMaiaSection />

    <!-- Security & Trust Section -->
    <SecurityTrustSection />

    <!-- How It Works Section -->
    <HowItWorksSection />

    <!-- Outcomes Section -->
    <OutcomesSection />

    <!-- Where Maia Helps Section -->
    <WhereMaiaHelpsSection />

    <!-- What Makes Maia Different Section -->
    <WhatMakesMaiaDifferentSection />

    <!-- CTA Section -->
    <CTASection />

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import HeroSection from './components/HeroSection.vue'
import WhyMaiaSection from './components/WhyMaiaSection.vue'
import SecurityTrustSection from './components/SecurityTrustSection.vue'
import HowItWorksSection from './components/HowItWorksSection.vue'
import OutcomesSection from './components/OutcomesSection.vue'
import WhereMaiaHelpsSection from './components/WhereMaiaHelpsSection.vue'
import WhatMakesMaiaDifferentSection from './components/WhatMakesMaiaDifferentSection.vue'
import CTASection from './components/CTASection.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    HeroSection,
    WhyMaiaSection,
    SecurityTrustSection,
    HowItWorksSection,
    OutcomesSection,
    WhereMaiaHelpsSection,
    WhatMakesMaiaDifferentSection,
    CTASection,
    Footer,
  },
}
</script>
