<template>
  <section class="container mx-auto base-wrapper content-width">
    <div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
      <div :class="{ 'lg:order-last': block.imageRight }">
        <div
          class="rounded-bl-3xl rounded-tr-3xl lg:rounded-bl-[80px] lg:rounded-tr-[80px] overflow-hidden"
        >
          <BaseImage
            v-if="block.image"
            class="w-full object-cover"
            :src="block.image.filename"
            :alt="block.image.alt"
          />
        </div>
      </div>

      <div>
        <BaseHeading v-if="block.heading" class="mb-8" size="h2">{{ block.heading }}</BaseHeading>
        <BaseRichText v-if="block.text" :content="block.text" />
        <div>
          <BaseButton
            theme="secondary"
            v-if="block.button.length"
            :href="block.button[0].link.cached_url"
          >
            {{ block.button[0].text }}
          </BaseButton>
        </div>
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

<style lang="postcss" scoped></style>
