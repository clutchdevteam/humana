<template>
  <section class="container mx-auto base-wrapper content-width flex flex-col items-center">
    <BaseHeading class="text-center mb-8 lg:mb-12" size="h2">{{ block.heading }}</BaseHeading>

    <div class="grid lg:grid-cols-3 gap-12 lg:gap-24 mb-8 lg:mb-12">
      <div
        class="flex flex-col items-center justify-between"
        v-for="item in block.columns"
        :key="item._uid"
      >
        <div class="flex flex-col items-center lg:items-start w-full">
          <BaseIconWrapper v-if="item.icon.length" class="mb-6">
            <BaseIcon
              class="text-secondary-500 h-9 w-9"
              :file="item.icon[0].file"
              :alt="item.icon[0].alt"
            />
          </BaseIconWrapper>
          <BaseHeading
            class="text-secondary-500 mb-6 w-3/4 text-center lg:text-left"
            size="h4"
            tag="h3"
          >
            {{ item.heading }}
          </BaseHeading>
        </div>
        <BaseText class="text-center lg:text-left">{{ item.text }}</BaseText>
      </div>
    </div>

    <div v-if="block.button.length">
      <BaseButton :href="block.button[0].link.cached_url" theme="secondary">
        {{ block.button[0].text }}
      </BaseButton>
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
