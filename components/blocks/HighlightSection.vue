<template>
  <section class="container mx-auto base-wrapper content-width">
    <div class="grid lg:grid-cols-2 gap-16 lg:gap-24">
      <div class="flex flex-row">
        <BaseIconWrapper class="mr-6">
          <BaseIcon
            class="text-primary-700 h-9 w-9"
            :file="block.icon[0].file"
            :alt="block.icon[0].alt"
          />
        </BaseIconWrapper>

        <BaseHeading size="h2" class="lg:w-1/2">{{ block.heading }}</BaseHeading>
      </div>

      <div>
        <BaseRichText class="lg:w-3/4" :content="block.text" />

        <nuxt-link
          v-if="block.link.length"
          class="group font-display flex items-center text-secondary-500 mt-8"
          :to="block.link[0].link.cached_url"
        >
          {{ block.link[0].text }}
          <BaseIcon
            class="w-5 h-5 group-hover:translate-x-2 transition ml-4"
            file="right-arrow-icon"
            alt="Right arrow"
          />
        </nuxt-link>
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
