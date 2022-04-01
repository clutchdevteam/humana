<template>
  <section class="bg-tertiary py-12 lg:py-20 px-6 lg:px-0">
    <div class="container mx-auto content-width">
      <BaseHeading size="h2" class="mb-8 lg:mb-12 lg:text-center text-secondary-500">
        {{ block.heading }}
      </BaseHeading>

      <div class="grid lg:grid-cols-2 gap-8 lg:gap-24 mx-auto">
        <BaseRichText :content="block.leftColumn" />
        <BaseRichText :content="block.rightColumn" />
      </div>

      <p
        v-if="block.kicker"
        class="font-display font-semibold text-lg lg:text-xl text-primary-500 lg:text-center lg:w-1/2 mx-auto"
      >
        {{ block.kicker }}
      </p>
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
