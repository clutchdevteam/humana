<template>
  <component :is="component" :class="classes">
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
      classes() {
        const classes = []

        switch (this.size) {
          case 'h1':
            classes.push('font-semibold', 'text-4xl', 'lg:text-6xl', 'leading-heading')
            break
          case 'h2-lg':
            classes.push('font-semibold', 'text-3xl', 'lg:text-5xl', 'leading-tighter')
            break
          case 'h2':
            classes.push('font-semibold', 'text-2xl', 'lg:text-4xl', 'leading-tighter')
            break
          case 'h3':
            classes.push('font-semibold', 'text-xl', 'lg:text-3xl', 'leading-tighter')
            break
          case 'h4':
            classes.push('font-semibold', 'text-lg', 'lg:text-2xl', 'leading-tighter')
            break
          case 'h5':
            classes.push('font-semibold', 'lg:text-xl', 'leading-snug')
            break
          case 'h6':
            classes.push('font-semibold', 'text-2xs', 'leading-snug', 'uppercase', 'tracking-wide')
            break
        }

        return classes.join(' ')
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
    @apply font-display;
  }
</style>
}
