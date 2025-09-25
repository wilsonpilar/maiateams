<template>
  <section id="outcomes" class="py-20 px-4 sm:px-6 lg:px-8 bg-gray-200">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">{{ $t('outcomes.title') }}</h2>
      </div>

      <div class="grid md:grid-cols-2 gap-12">
        <div>
          <h3 class="text-2xl font-bold mb-4 text-maia-blue">{{ $t('outcomes.benefit1.title') }}</h3>
          <p class="text-gray-700 text-lg mb-8">{{ $t('outcomes.benefit1.description') }}</p>

          <h3 class="text-2xl font-bold mb-4 text-maia-blue">{{ $t('outcomes.benefit2.title') }}</h3>
          <p class="text-gray-700 text-lg">{{ $t('outcomes.benefit2.description') }}</p>
        </div>

        <div>
          <h3 class="text-2xl font-bold mb-4 text-maia-blue">{{ $t('outcomes.benefit3.title') }}</h3>
          <p class="text-gray-700 text-lg mb-8">{{ $t('outcomes.benefit3.description') }}</p>

          <h3 class="text-2xl font-bold mb-4 text-maia-blue">{{ $t('outcomes.benefit4.title') }}</h3>
          <p class="text-gray-700 text-lg">{{ $t('outcomes.benefit4.description') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'OutcomesSection'
}
</script>
