<template>
  <section id="how-it-works" class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-20">
        <h2 class="text-5xl md:text-6xl font-bold mb-8">
          {{ $t('howItWorks.title') }} <span class="text-maia-blue">{{ $t('howItWorks.titleHighlight') }}</span>
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          {{ $t('howItWorks.subtitle') }}
        </p>
      </div>

      <div class="relative">
        <!-- Connection lines -->
        <div class="hidden lg:block absolute top-24 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-maia-blue via-maia-purple to-maia-green"></div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div class="group relative">
            <div class="relative z-10">
              <div class="w-20 h-20 bg-gradient-to-br from-maia-blue to-maia-purple rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110">
                1
              </div>
              <h3 class="text-xl font-bold mb-4 text-gray-900">{{ $t('howItWorks.step1.title') }}</h3>
              <p class="text-gray-700 leading-relaxed">
                {{ $t('howItWorks.step1.description') }}
              </p>
            </div>
          </div>

          <div class="group relative">
            <div class="relative z-10">
              <div class="w-20 h-20 bg-gradient-to-br from-maia-purple to-maia-green rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110">
                2
              </div>
              <h3 class="text-xl font-bold mb-4 text-gray-900">{{ $t('howItWorks.step2.title') }}</h3>
              <p class="text-gray-700 leading-relaxed">
                {{ $t('howItWorks.step2.description') }}
              </p>
            </div>
          </div>

          <div class="group relative">
            <div class="relative z-10">
              <div class="w-20 h-20 bg-gradient-to-br from-maia-green to-maia-orange rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110">
                3
              </div>
              <h3 class="text-xl font-bold mb-4 text-gray-900">{{ $t('howItWorks.step3.title') }}</h3>
              <p class="text-gray-700 leading-relaxed">
                {{ $t('howItWorks.step3.description') }}
              </p>
            </div>
          </div>

          <div class="group relative">
            <div class="relative z-10">
              <div class="w-20 h-20 bg-gradient-to-br from-maia-orange to-maia-blue rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110">
                4
              </div>
              <h3 class="text-xl font-bold mb-4 text-gray-900">{{ $t('howItWorks.step4.title') }}</h3>
              <p class="text-gray-700 leading-relaxed">
                {{ $t('howItWorks.step4.description') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HowItWorksSection'
}
</script>
