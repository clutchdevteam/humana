<template>
  <section class="mx-auto base-wrapper max-w-3xl">
    <BaseRichText :content="block.text" />
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
  div .rich-text-image-wrapper {
    & img {
      width: 100%;
    }
  }

  @screen lg {
    div .rich-text-image-wrapper img {
      @apply my-20;
      transform: scale(1.05);
    }
  }
</style>
