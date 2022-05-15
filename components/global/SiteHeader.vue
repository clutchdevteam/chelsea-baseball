<template>
  <header class="absolute w-full z-[51] my-4 lg:my-8">
    <div
      class="
        desktop
        hidden
        lg:flex
        desktop-container
        relative
        bg-black
        justify-between
        items-center
        shadow-lg
      "
    >
      <nav>
        <ul class="flex">
          <li v-for="menu in nav" :key="menu.id">
            <BaseMenu :menu="menu" :depth="0" />
          </li>
        </ul>
      </nav>

      <div class="absolute w-full">
        <BaseLink href="/" :inert="isMobileMenuOpen">
          <BaseImage
            class="w-24 mx-auto"
            v-if="logo"
            :src="logo.filename"
            :alt="logo.alt"
          />
        </BaseLink>
      </div>

      <nav>
        <ul class="flex">
          <li v-for="menu in legalNav" :key="menu.id">
            <BaseMenu :menu="menu" :depth="0" />
          </li>
        </ul>
      </nav>
    </div>

    <div class="mobile lg:hidden flex justify-between pl-4">
      <div>
        <BaseLink href="/" :inert="isMobileMenuOpen">
          <BaseImage
            class="w-20"
            v-if="logo"
            :src="logo.filename"
            :alt="logo.alt"
          />
        </BaseLink>
      </div>

      <div class="mobile lg:hidden">
        <button
          ref="openButtonRef"
          @click="toggleMobileMenu"
          type="button"
          :inert="isMobileMenuOpen"
        >
          <span class="sr-only">Open main menu</span>
          <div class="p-4">
            <BaseIcon
              class="w-8 h-8 text-white"
              file="menu-icon"
              alt="Open Menu"
            />
          </div>

          <Portal to="mobile-menu">
            <div
              :class="`z-[52] fixed inset-0 bg-black transition duration-150 ${
                isMobileMenuOpen
                  ? 'bg-opacity-75'
                  : 'bg-opacity-0 pointer-events-none'
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
                    class="
                      flex
                      justify-center
                      items-center
                      bg-white
                      rounded-full
                      ml-4
                      mr-4
                      mt-4
                      h-12
                      w-12
                    "
                    ref="closeButtonRef"
                    @click="closeMenu"
                    type="button"
                  >
                    <span class="sr-only">Close menu</span>
                    <BaseIcon
                      class="w-6 h-6 text-primary-light"
                      file="close-icon"
                      alt="Close Menu"
                    />
                  </button>
                </div>

                <div
                  class="flex flex-col justify-between h-screen w-full bg-white"
                >
                  <nav role="navigation">
                    <ul>
                      <li
                        class="py-3 px-4 border-b border-gray-300"
                        v-for="menu in nav"
                        :key="menu.id"
                      >
                        <BaseMenu :menu="menu" :depth="0" />
                      </li>
                      <li
                        class="py-3 px-4 border-b border-gray-300"
                        v-for="menu in legalNav"
                        :key="menu.id"
                      >
                        <BaseMenu :menu="menu" :depth="0" />
                      </li>
                    </ul>
                  </nav>
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
import { mapState } from "vuex";
import { Portal } from "portal-vue";

export default {
  components: {
    Portal,
  },
  props: {
    nav: {
      type: Array,
      required: true,
    },
    legalNav: {
      type: Array,
      required: true,
    },
    logo: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    ...mapState("global", ["isMobileMenuOpen", "pageHasModalOpen"]),
    isHomePage() {
      return this.$route.fullPath === "/" || this.$route.fullPath === "/home";
    },
  },
  watch: {
    $route(to, from) {
      this.closeMenu();
    },
  },
  methods: {
    async toggleMobileMenu() {
      await this.$store.commit(
        "global/isMobileMenuOpen",
        !this.isMobileMenuOpen
      );
      await this.$nextTick();
      await this.$nextTick();

      this.$refs.closeButtonRef?.focus();
    },
    async closeMenu() {
      await this.$store.commit("global/isMobileMenuOpen", false);
      await this.$nextTick();
      await this.$nextTick();

      this.$refs.openButtonRef?.focus();
    },
  },
};
</script>

<style lang="postcss">
.desktop nav {
  @apply z-50;
}
.desktop nav ul li div div button,
.desktop nav ul li div a {
  @apply text-white p-6;
}

.desktop nav ul li div .submenu ul {
  @apply absolute bg-white shadow-md;
}

.desktop .nuxt-link-exact-active {
  @apply border-t-2 opacity-100 text-primary-light lg:border-primary-light lg:border-opacity-100;
}
</style>
