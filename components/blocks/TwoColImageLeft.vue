<template>
  <section class="temp desktop-container lg:grid grid-cols-2 gap-11 my-20">
    <div class="hidden lg:block">
      <BaseImage :src="block.image.filename" alt="block.image.alt" />
    </div>

    <div class="mx-6 flex flex-col space-y-5">
      <BaseHeading class="text-primary-dark" tag="h2" size="h3">{{
        block.heading
      }}</BaseHeading>

      <BaseImage
        class="lg:hidden"
        :src="block.image.filename"
        :alt="block.image.alt"
      />

      <BaseHeading tag="h3" size="h4">{{ block.sub_heading }}</BaseHeading>

      <BaseText> {{ block.text }} </BaseText>
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
