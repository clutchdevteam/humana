<template>
  <section class="bg-pattern bg-primary-700 py-12 px-6 xl:px-0">
    <div class="container mx-auto lg:flex justify-between items-center">
      <div>
        <BaseHeading class="lg:w-3/4 mb-8 lg:mb-0 text-tertiary" size="h3" tag="h2">
          {{ block.heading }}
        </BaseHeading>
      </div>

      <div>
        <BaseButton :href="block.button[0].link.cached_url">
          {{ block.button[0].text }}
        </BaseButton>
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
