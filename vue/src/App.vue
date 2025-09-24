<template>
  <div class="bg-gray-25 text-gray-900 font-sans" style="background-color: #f8f9fa;">
    <!-- Navigation -->
    <Navigation />

    <!-- Hero Section -->
    <section id="hero">
      <HeroSection />
    </section>

    <!-- Why Maia Section -->
    <section id="why-maia">
      <WhyMaiaSection />
    </section>

    <!-- Security & Trust Section -->
    <section id="security-trust">
      <SecurityTrustSection />
    </section>

    <!-- How It Works Section -->
    <section id="how-it-works">
      <HowItWorksSection />
    </section>

    <!-- Outcomes Section -->
    <section id="outcomes">
      <OutcomesSection />
    </section>

    <!-- Where Maia Helps Section -->
    <section id="where-maia-helps">
      <WhereMaiaHelpsSection />
    </section>

    <!-- What Makes Maia Different Section -->
    <section id="what-makes-different">
      <WhatMakesMaiaDifferentSection />
    </section>

    <!-- CTA Section -->
    <section id="cta">
      <CTASection />
    </section>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>

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
