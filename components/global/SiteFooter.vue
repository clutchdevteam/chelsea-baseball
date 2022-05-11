<template>
  <div class="flex flex-col mt-16">
    <footer class="bg-black">
      <div
        class="
          desktop-container
          flex flex-col
          items-center
          lg:flex-row
          lg:justify-between
          py-12
          lg:py-2
        "
      >
        <div class="py-5">
          <BaseImage
            class="w-56 h-auto lg:w-28"
            :src="footerContent.logo.filename"
            :alt="footerContent.logo.alt"
          />
        </div>

        <nav class="w-full lg:w-auto py-5">
          <ul class="flex justify-between md:justify-around lg:space-x-12">
            <li v-for="menu in footerContent.footerNav" :key="menu.id">
              <BaseLink
                :href="menu.link.cached_url"
                class="text-white opacity-75 border-none"
                >{{ menu.title }}</BaseLink
              >
            </li>
          </ul>
        </nav>
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
  },
};
</script>

<style lang="postcss" scoped>
.nuxt-link-exact-active {
  @apply opacity-100;
}
</style>
