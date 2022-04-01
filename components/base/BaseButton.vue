<template>
  <nuxt-link
    :class="`btn btn-${theme} block lg:inline-block w-full lg:w-auto`"
    v-if="href"
    :to="href"
  >
    <div
      class="bg-secondary-500 absolute inset-0 z-0 origin-left scale-x-0 transform transition duration-150 ease-in-out rounded-full"
    />

    <span class="relative">
      <slot />
    </span>
  </nuxt-link>

  <button v-else :class="`btn btn-${theme}`" :type="btnType" @click="$emit('click')">
    <div
      class="bg-secondary-500 absolute inset-0 z-0 origin-left scale-x-0 transform transition duration-150 ease-in-out rounded-full"
    />

    <span class="relative">
      <slot />
    </span>
  </button>
</template>

<script>
  export default {
    props: {
      btnType: {
        type: String,
        default: 'button',
      },
      theme: {
        type: String,
        default: 'primary',
      },
      href: {
        type: String,
      },
    },
  }
</script>

<style lang="postcss" scoped>
  .btn {
    @apply relative overflow-hidden font-display px-8 py-1 rounded-full border-2 border-secondary-500 tracking-widest text-center;

    &.btn-primary {
      @apply text-white;
    }

    &.btn-secondary {
      @apply text-primary-700;

      &:hover {
        @apply text-white duration-75;
      }
    }

    &:hover div {
      @apply scale-100;
    }
  }
</style>
