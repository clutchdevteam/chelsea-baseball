<template>
  <section class="desktop-container my-24 lg:my-32">
    <BaseHeading class="text-primary-default mb-5 text-center" size="h2">
      {{ block.title }}
    </BaseHeading>

    <BaseCarousel :mobile-slides-per-view="2" has-pagination>
      <BaseCarouselSlide v-for="slide in block.sponsors" :key="slide._uid">
        <BaseImage
          class="sponsor-slide-image"
          :src="slide.file.filename"
          :alt="slide.file.alt"
        />
      </BaseCarouselSlide>
    </BaseCarousel>

    <div class="flex justify-center w-full mt-12">
      <BaseButton theme="tertiary" :href="block.button[0].link.cached_url">
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
};
</script>

<style scoped>
.sponsor-slide-image {
  height: 150px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  @apply mb-5;
}
</style>
