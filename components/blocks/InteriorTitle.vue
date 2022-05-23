<template>
  <div>
    <div class="relative pt-24 lg:pt-32">
      <div class="bg-clip" />
      <BaseBackgroundImage class="bg-inner-clip z-0" :image="bgImage" />

      <div class="desktop-container relative pt-6 pb-24 lg:pb-16">
        <BaseHeading class="text-center text-white mb-10" size="h1">
          {{ block.heading }}
        </BaseHeading>
      </div>
    </div>

    <div
      class="relative desktop-container -mt-24 lg:-mt-12 z-40"
      v-if="block.rosterImage"
    >
      <BaseImage
        class="w-full lg:w-1/2 mx-auto"
        :src="block.rosterImage.filename"
        :alt="block.alt"
      />
    </div>
  </div>
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
          src: "../bg_image.png",
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
  clip-path: polygon(0 0, 100% 0, 100% 55%, 0 50%);
}
.bg-inner-clip {
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 85%);
}

@screen lg {
  .bg-clip {
    clip-path: polygon(0 0, 100% 0, 100% 65%, 0 50%);
  }
  .bg-inner-clip {
    clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
  }
}
</style>
