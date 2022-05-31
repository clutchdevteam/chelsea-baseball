<template>
  <div class="desktop-container my-24 lg:my-32">
    <BaseHeading class="text-primary-default text-center mb-5" size="h2">
      {{ block.title }}
    </BaseHeading>

    <BaseCarousel
      class="bg-white shadow-lg p-6 lg:p-12"
      :desktop-slides-per-view="1"
      has-pagination
      has-navigation
    >
      <BaseCarouselSlide
        class="grid lg:grid-cols-2 gap-12"
        v-for="slide in block.slides"
        :key="slide._uid"
      >
        <BaseImage
          class="slide-image"
          :src="slide.image.filename"
          :alt="slide.image.alt"
        />
        <div>
          <BaseHeading class="mb-3" size="h3">{{ slide.heading }}</BaseHeading>
          <BaseRichText :content="slide.text" />
        </div>
      </BaseCarouselSlide>
    </BaseCarousel>
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
};
</script>

<style scoped>
.slide-image {
  height: 200px;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

@screen lg {
  .slide-image {
    height: 300px;
    aspect-ratio: 16 / 9;
    object-fit: cover;
  }
}
</style>
