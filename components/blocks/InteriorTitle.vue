<template>
  <section :class="`bg-pattern ${!isContactPage ? 'mb-24 lg:mb-36' : 'mb-12 lg:mb-20'}`">
    <div class="flex flex-col items-center text-center space-y-6 px-6 xl:px-0 text-tertiary py-14">
      <BaseHeading class="mt-12" size="h2" tag="h1">{{ block.heading }}</BaseHeading>
      <p v-if="block.subheading" class="max-w-2xl">{{ block.subheading }}</p>
      <div v-if="block.button.length">
        <BaseButton :href="block.button[0].link.cached_url">{{ block.button[0].text }}</BaseButton>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    props: {
      block: {
        type: Object,
        required: true,
      },
    },
    computed: {
      isContactPage() {
        return this.$route.fullPath === '/contact-us'
      },
    },
  }
</script>

<style lang="postcss" scoped>
  .bg-pattern {
    background: url(~/assets/bgPattern.png);
    background-size: cover;
    background-position: center;

    @apply bg-primary-700;
  }
</style>
