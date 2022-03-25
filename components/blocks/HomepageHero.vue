<template>
  <div>
    <section class="bg-primary-700">
      <div
        class="
          container
          mx-auto
          grid
          lg:grid-cols-2
          gap-8
          items-center
          px-6
          lg:px-0
          pt-[74px]
          lg:pt-20
        "
      >
        <div class="py-24 lg:py-40">
          <BaseHeading class="text-tertiary mb-6" size="h1">{{ block.heading }}</BaseHeading>
          <BaseText class="text-white text-lg lg:w-5/6 mb-8">{{ block.text }}</BaseText>

          <div>
            <BaseButton class="w-full lg:w-auto">{{ block.button[0].text }}</BaseButton>
          </div>
        </div>

        <div
          class="
            hero-image
            hidden
            lg:block
            overflow-hidden
            absolute
            right-0
            pointer-events-auto
            top-0
            w-[45%]
            mt-24
          "
        >
          <BaseImage
            class="h-full object-cover"
            :src="block.image.filename"
            :alt="block.image.alt"
          />
        </div>
      </div>
    </section>

    <section class="bg-tertiary py-20 z-20">
      <div class="container mx-auto grid lg:grid-cols-4 lg:gap-4 px-6 lg:px-0">
        <div v-for="item in block.postHeaderContent" :key="item._uid">
          <BaseHeading class="text-secondary-500 mb-4 font-bold" size="h4" tag="h2">
            {{ item.heading }}
          </BaseHeading>
          <BaseText>
            {{ item.text }}
          </BaseText>
        </div>
        <div />
        <div class="flex flex-col mt-auto">
          <div>
            <BaseButton
              class="inline lg:float-right"
              theme="secondary"
              :href="block.postHeaderButton[0].link.cached_url"
            >
              {{ block.postHeaderButton[0].text }}
            </BaseButton>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BgPattern from '~/assets/bgPattern.svg?inline'
export default {
  components: {
    BgPattern,
  },
  props: {
    block: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="postcss" scoped>
.hero-image {
  border-top-left-radius: 80px;
  border-bottom-left-radius: 80px;
  max-height: 700px;
  aspect-ratio: 1 / 1.1;
}

@supports (aspect-ratio) {
  .hero-image {
    aspect-ratio: 1 / 1.1;
  }
}
</style>
