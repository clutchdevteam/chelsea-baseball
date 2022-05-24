<template>
  <section class="relative my-24 lg:my-32">
    <div class="bg-clip">
      <div
        class="
          desktop-container
          grid
          lg:grid-cols-4
          py-44
          lg:py-24
          gap-12
          items-center
        "
      >
        <BaseImage :src="block.image.filename" :alt="block.image.alt" />

        <div class="col-span-3">
          <BaseHeading class="text-primary-default mb-5" size="h3">
            {{ block.heading }}
          </BaseHeading>
          <BaseRichText :content="block.text" />
        </div>
      </div>
    </div>

    <div class="bg-inner-clip" />
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
.bg-inner-clip {
  @apply absolute h-full w-full bg-primary-dark inset-0;
  z-index: -2;
  clip-path: polygon(0 0, 100% 10%, 100% 100%, 0 90%);
}
.bg-clip {
  @apply bg-gray-100;
  clip-path: polygon(0 10%, 100% 0, 100% 90%, 0 100%);
}
</style>
