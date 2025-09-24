<template>
  <section class="py-20 px-4 sm:px-6 lg:px-8 bg-slate-100">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">Security & Trust</h2>
        <h3 class="text-2xl md:text-3xl font-semibold text-maia-blue mb-8">
          Not ChatGPT. Not Third-Party. Your Data, Your Control.
        </h3>
        <p class="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
          Unlike generic AI tools, Maia never sends your data to ChatGPT or any other third-party provider. We run our own models in our own cloud, so your data stays private, compliant, and under your control.
        </p>
      </div>

      <div class="bg-white rounded-2xl p-8 md:p-12 shadow-lg max-w-4xl mx-auto">
        <h4 class="text-2xl font-bold mb-8 text-center">Enterprise-Grade by Design</h4>
        <div class="grid md:grid-cols-3 p-4 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-maia-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
            <p class="text-gray-700">Segregated environments and access controls.</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-maia-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <p class="text-gray-700">Full transparency into how assistants generate results.</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-maia-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
              </svg>
            </div>
            <p class="text-gray-700">Built-in guardrails aligned to your policies and compliance needs.</p>
          </div>
        </div>
        <p class="text-center text-gray-700 mt-8 text-lg">
          You can safely let your employees — even juniors — use Maia on sensitive tasks, knowing your data won't leak outside your environment.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SecurityTrustSection'
}
</script>
