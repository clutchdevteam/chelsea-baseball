<template>
  <section class="temp desktop-container lg:grid grid-cols-2 gap-11 my-20">
    <div class="hidden lg:block">
      <BaseImage :src="block.image.filename" alt="block.image.alt" />
    </div>

    <div class="lg:mx-6 flex flex-col space-y-5">
      <BaseHeading class="text-primary-default" size="h2">
        {{ block.heading }}
      </BaseHeading>

      <BaseImage
        class="lg:hidden"
        :src="block.image.filename"
        :alt="block.image.alt"
      />

      <BaseHeading size="h3">{{ block.sub_heading }}</BaseHeading>

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
