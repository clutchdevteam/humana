<template>
  <div>
    <section class="container mx-auto content-width mb-12 lg:mb-20">
      <div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center px-6 lg:px-0">
        <div class="flex flex-col items-center lg:items-end">
          <BaseHeading class="mb-6" size="h2">Number of spots left</BaseHeading>
          <div class="numbers grid grid-cols-2 gap-4 font-display font-bold text-8xl leading-none">
            <p>{{ firstNumber }}</p>
            <p>{{ secondNumber }}</p>
          </div>
        </div>
        <div>
          <BaseText class="lg:w-3/4 mb-6">{{ spotsAvailable.text }}</BaseText>
          <BaseButton :href="spotsButton.link.cached_url" theme="secondary">
            {{ spotsButton.text }}
          </BaseButton>
        </div>
      </div>
    </section>
    <footer class="bg-primary-700 py-12 lg:py-16 px-6 xl:px-0">
      <div
        class="container mx-auto flex flex-col lg:flex-row justify-between items-center mb-8 lg:mb-16"
      >
        <div class="mb-8 lg:mb-0">
          <nuxt-link to="/">
            <BaseImage :src="footerContent.logo.filename" :alt="footerContent.logo.alt" />
          </nuxt-link>
        </div>

        <nav>
          <ul class="flex space-x-4">
            <li
              class="font-display text-tertiary flex items-center"
              v-for="menu in footerContent.footerNav"
              :key="menu.id"
            >
              <BaseLink :href="menu.link.cached_url">{{ menu.title }}</BaseLink>
              <BaseIcon file="right-chevron-icon" class="h-5 w-5 text-secondary-500 ml-2" alt="" />
            </li>
          </ul>
        </nav>
      </div>
      <div class="mx-auto text-tertiary font-light font-display text-xs">
        <p class="text-center">Copyright 2022 &copy; Humana Code Academy</p>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    props: {
      footerContent: {
        type: Object,
        required: true,
      },
      spotsAvailable: {
        type: Object,
        required: true,
      },
    },
    computed: {
      firstNumber() {
        return this.spotsAvailable?.spotsAvailable.charAt(0) > 0
          ? this.spotsAvailable.spotsAvailable.charAt(0)
          : '0'
      },
      secondNumber() {
        return this.spotsAvailable?.spotsAvailable.charAt(1)
      },
      spotsButton() {
        return this.spotsAvailable.button[0]
      },
    },
  }
</script>

<style lang="postcss" scoped>
  .numbers p {
    @apply bg-primary-500 text-white py-2 px-6;
  }
</style>
