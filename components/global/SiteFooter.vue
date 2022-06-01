<template>
  <div class="flex flex-col mt-16">
    <footer class="bg-black text-white">
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
            class="w-32 h-auto lg:w-28"
            :src="footerContent.logo.filename"
            :alt="footerContent.logo.alt"
          />
        </div>

        <div class="flex flex-col items-center lg:items-end w-full">
          <nav class="w-full lg:w-auto py-5 text-lg">
            <ul
              class="
                flex flex-col
                items-center
                lg:items-start
                lg:flex-row
                justify-between
                md:justify-around
                space-y-6
                lg:space-y-0 lg:space-x-12
              "
            >
              <li v-for="menu in footerContent.footerNav" :key="menu.id">
                <BaseLink
                  :href="menu.link.cached_url"
                  class="text-white opacity-75 border-none"
                >
                  {{ menu.title }}
                </BaseLink>
              </li>
            </ul>
          </nav>
          <div>
            <a href="https://www.facebook.com/profile.php?id=100057089036250">
              Follow us on Facebook!
              <BaseIcon
                class="w-4 h-4 inline-block -mt-1 ml-2"
                file="facebook-icon"
                alt="facebook icon"
              />
            </a>
          </div>
        </div>
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
