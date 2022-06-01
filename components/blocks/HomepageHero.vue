<template>
  <section class="hero relative flex pt-48 lg:pt-32 lg:mb-48">
    <div class="bg-clip" />
    <BaseBackgroundImage class="bg-inner-clip" :image="bgImage" />

    <div
      class="
        desktop-container
        grid
        lg:grid-cols-4
        relative
        items-center
        z-30
        text-white
        space-y-12
        lg:space-y-0
      "
    >
      <div class="flex flex-col space-y-5 col-span-2">
        <BaseHeading size="h1">{{ block.heading }}</BaseHeading>

        <BaseText v-if="block.subheading.length" class="text-2xl">
          {{ block.subheading }}
        </BaseText>

        <div v-if="block.button.length">
          <BaseButton :href="block.button[0].link.cached_url">
            {{ block.button[0].text }}
          </BaseButton>
        </div>
      </div>

      <div class="col-span-2">
        <BaseImage
          class="w-auto mx-auto max-h-[540px] lg:translate-y-16"
          :src="block.image.filename"
          :alt="block.image.alt"
        />
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
  computed: {
    bgImage() {
      let image = {};

      if (this.block.backgroundImage.filename.length) {
        image = {
          src: this.block.backgroundImage.filename,
          alt: this.block.backgroundImage.alt,
        };
      } else {
        image = {
          src: "./bg_image.png",
          alt: "A crowd of people cheer at a baseball stadium",
        };
      }

      return image;
    },
  },
};
</script>

<style scoped>
.bg-clip {
  @apply absolute h-full w-full bg-gray-200;
  clip-path: polygon(0 0, 100% 0, 100% 70%, 0 65%);
}
.bg-inner-clip {
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 85%);
}

@screen lg {
  .bg-clip {
    clip-path: polygon(0 0, 100% 0, 100% 80%, 0 75%);
  }
  .bg-inner-clip {
    clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
  }
}
</style>
