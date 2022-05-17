<template>
  <section
    class="
      desktop-container
      flex flex-col
      md:flex-row
      items-center
      space-y-12
      md:space-x-20
    "
  >
    <BaseImage
      class="object-contain max-w-xs w-3/4 lg:w-full"
      :src="block.image.filename"
      :alt="block.image.alt"
    />

    <BaseHeading class="text-primary-default" size="h2">{{
      block.heading
    }}</BaseHeading>
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
