<template>
  <section class="container mx-auto base-wrapper">
    <div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
      <div :class="{ 'lg:order-last': block.imageRight }">
        <div
          class="rounded-bl-3xl rounded-tr-3xl lg:rounded-bl-[80px] lg:rounded-tr-[80px] overflow-hidden"
        >
          <BaseImage
            class="w-full object-cover"
            :src="block.image.filename"
            :alt="block.image.al"
          />
        </div>
      </div>

      <div>
        <BaseHeading class="mb-8" size="h2">{{ block.heading }}</BaseHeading>
        <BaseRichText :content="block.text" />
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
