<template>
  <component :is="component" :class="size">
    <slot />
  </component>
</template>

<script>
  export default {
    props: {
      size: {
        type: String,
        required: true,
        validator: (value) => ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(value),
      },
      /** The semantic HTML element used for the heading. Defaults to the value of `size`. */
      tag: {
        type: String,
        default: undefined,
        validator: (value) => ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div'].includes(value),
      },
    },
    computed: {
      component() {
        return this.tag ?? this.size.slice(0, 2)
      },
    },
  }
</script>

{
<style lang="postcss" scoped>
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply font-display font-semibold leading-tight;
  }

  .h1 {
    @apply text-4xl;
  }
  .h2 {
    @apply text-3xl;
  }
  .h3 {
    @apply text-xl;
  }
  .h4 {
    @apply text-lg;
  }
  @screen md {
    .h1 {
      @apply text-6xl;
    }
    .h2 {
      @apply text-5xl;
    }
    .h3 {
      @apply text-3xl;
    }
    .h4 {
      @apply text-2xl;
    }
    .h5 {
      @apply text-xl leading-snug;
    }
    .h6 {
      @apply uppercase;
    }
  }
</style>
