<template>
  <header class="absolute w-full z-[51]">
    <div class="container mx-auto flex justify-between items-center py-4 px-6 xl:px-0">
      <div class="w-28 lg:w-32 z-50">
        <BaseLink href="/" :inert="isMobileMenuOpen">
          <BaseImage v-if="logo" :src="logo.filename" :alt="logo.alt" />
        </BaseLink>
      </div>

      <nav class="hidden md:block">
        <ul class="desktop flex space-x-6 items-center">
          <li v-for="(menu, index) in nav" :key="menu._uid" class="flex items-center">
            <BaseMenu
              :id="`${menu.title.toLowerCase().replace(' ', '-')}-${index}`"
              classes="font-display text-white tracking-wider"
              :menu="menu"
              :depth="0"
            />
            <BaseIcon file="right-chevron-icon" class="h-5 w-5 text-secondary-500 ml-2" alt="" />
          </li>

          <li class="text-tertiary font-display flex items-center">
            <p class="mr-2">Spots Open:</p>
            <p class="text-xl">{{ spotsAvailable }}</p>
          </li>

          <li>
            <BaseButton href="/contact-us">Register</BaseButton>
          </li>
        </ul>
      </nav>

      <div class="mobile md:hidden">
        <button
          ref="openButtonRef"
          @click="toggleMobileMenu"
          type="button"
          :inert="isMobileMenuOpen"
        >
          <span class="sr-only">Open main menu</span>
          <BaseIcon file="menu-icon" class="h-6 w-6 text-tertiary" alt="Open Menu" />

          <Portal to="mobile-menu">
            <div
              :class="`z-[52] fixed inset-0 bg-black transition duration-150 ${
                isMobileMenuOpen ? 'bg-opacity-75' : 'bg-opacity-0 pointer-events-none'
              }`"
              :inert="!isMobileMenuOpen"
              @keydown.esc="closeMenu"
            >
              <div
                :class="`flex transform transition-transform duration-150 ease-in-out ${
                  isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`"
              >
                <div>
                  <button
                    class="flex justify-center items-center bg-white rounded-full ml-4 mr-4 mt-4 h-12 w-12"
                    ref="closeButtonRef"
                    @click="closeMenu"
                    type="button"
                  >
                    <span class="sr-only">Close menu</span>
                    <BaseIcon file="close-icon" class="h-6 w-6" alt="Close menu" />
                  </button>
                </div>

                <div class="flex flex-col justify-between h-screen w-full bg-white">
                  <nav class="mobile-nav" role="navigation">
                    <ul>
                      <li v-for="menu in nav" :key="menu.id">
                        <BaseMenu :menu="menu" :depth="0" classes="text-xl" />
                      </li>
                    </ul>
                  </nav>

                  <div class="px-3 py-6">
                    <BaseButton theme="secondary" class="text-center" href="/contact-us">
                      Start Your Adventure
                    </BaseButton>
                  </div>
                </div>
              </div>
            </div>
          </Portal>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
  import { mapState } from 'vuex'
  import { Portal } from 'portal-vue'

  export default {
    components: {
      Portal,
    },
    props: {
      nav: {
        type: Array,
        required: true,
      },
      logo: {
        type: Object,
        required: true,
      },
      spotsAvailable: {
        type: String,
        default: '00',
      },
    },
    computed: {
      ...mapState('global', ['isMobileMenuOpen', 'pageHasModalOpen']),
      isHomepage() {
        return this.$route.fullPath === '/'
      },
    },
    methods: {
      async toggleMobileMenu() {
        await this.$store.commit('global/isMobileMenuOpen', !this.isMobileMenuOpen)
        await this.$nextTick()
        await this.$nextTick()

        this.$refs.closeButtonRef?.focus()
      },
      async closeMenu() {
        await this.$store.commit('global/isMobileMenuOpen', false)
        await this.$nextTick()
        await this.$nextTick()

        this.$refs.openButtonRef?.focus()
      },
    },
  }
</script>

<style lang="postcss">
  .mobile-nav ul li div a {
    @apply px-5 py-4 border-b border-gray-300;
  }

  .desktop li div a {
    @apply opacity-75;

    &:hover {
      @apply opacity-100;
    }
  }

  .nuxt-link-exact-active {
    @apply opacity-100;
  }
</style>
