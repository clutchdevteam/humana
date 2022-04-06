<template>
  <div class="font-display">
    <BaseMenuItem v-if="menu.submenus" :menu="menu" :depth="depth + 1" />

    <nuxt-link :class="`${classes} block`" v-else :to="menu.link.cached_url">
      {{ menu.title }}
    </nuxt-link>
  </div>
</template>

<script>
  export default {
    props: {
      menu: {
        type: Object,
        required: true,
      },
      depth: {
        type: Number,
        required: true,
      },
      classes: {
        type: String,
        default: '',
      },
    },
  }
</script>
