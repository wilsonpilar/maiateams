<template>
  <section id="why-maia" class="py-20 px-4 sm:px-6 lg:px-8 bg-white">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-20">
        <h2 class="text-5xl md:text-6xl font-bold mb-8">
          {{ $t('whyMaia.title') }} <span class="text-maia-blue">{{ $t('whyMaia.titleHighlight') }}</span>{{ $t('whyMaia.titleSuffix') }}
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          {{ $t('whyMaia.subtitle') }}
        </p>
      </div>

      <div class="grid lg:grid-cols-3 gap-12">
        <div class="group relative">
          <div class="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-maia-blue to-maia-purple rounded-2xl flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <div class="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
            <h3 class="text-2xl font-bold mb-6 text-gray-900">{{ $t('whyMaia.card1.title') }}</h3>
            <p class="text-gray-700 text-lg leading-relaxed">
              {{ $t('whyMaia.card1.description') }}
            </p>
          </div>
        </div>

        <div class="group relative">
          <div class="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-maia-green to-maia-blue rounded-2xl flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-1.306-.835-2.418-2-2.83M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-1.306.835-2.418 2-2.83m0 0a3 3 0 012.83 0M9 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zm-6 4a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
          </div>
          <div class="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
            <h3 class="text-2xl font-bold mb-6 text-gray-900">{{ $t('whyMaia.card2.title') }}</h3>
            <p class="text-gray-700 text-lg leading-relaxed">
              {{ $t('whyMaia.card2.description') }}
            </p>
          </div>
        </div>

        <div class="group relative">
          <div class="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-maia-purple to-maia-orange rounded-2xl flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <div class="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
            <h3 class="text-2xl font-bold mb-6 text-gray-900">{{ $t('whyMaia.card3.title') }}</h3>
            <p class="text-gray-700 text-lg leading-relaxed">
              {{ $t('whyMaia.card3.description') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'WhyMaiaSection'
}
</script>
