<template>
  <section class="temp desktop-container lg:grid grid-cols-2 my-20">
    <div class="hidden lg:block">
      <BaseImage
        class="mt-6"
        :src="block.image.filename"
        alt="block.image.alt"
      />
    </div>

    <div class="mx-6">
      <BaseHeading tag="h2" size="h3" class="my-5">{{
        block.heading
      }}</BaseHeading>

      <BaseImage
        class="my-5 lg:hidden"
        :src="block.image.filename"
        :alt="block.image.alt"
      />

      <BaseHeading tag="h4" size="h5" class="my-5">{{
        block.sub_heading
      }}</BaseHeading>

      <BaseText class="my-5"> {{ block.text }} </BaseText>
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

<style lang="postcss" scoped>
/* temporary top margin until hero is finished */
.temp {
  @apply mt-48;
}
</style>
