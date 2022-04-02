export const state = () => ({
  loaded: false,
  isMobileMenuOpen: false,
  pageHasModalOpen: false,
  mainNav: [],
  logo: null,
  footer: {
    footerNav: [],
    logo: null,
  },
  spotsAvailable: {},
})

export const mutations = {
  isMobileMenuOpen(state, isMenuOpen) {
    state.isMobileMenuOpen = isMenuOpen
  },
  isModalOpen(state, isModalOpen) {
    state.pageHasModalOpen = isModalOpen
  },
  isLoaded(state, isLoaded) {
    state.loaded = isLoaded
  },
  setGlobals(state, globals) {
    state.mainNav = globals.mainNav
    state.logo = globals.logo

    state.footer.footerNav = globals?.footer[0]?.footerNav
    state.footer.logo = globals?.footer[0]?.logo
    state.spotsAvailable = globals?.spotsAvailable[0]
  },
}
