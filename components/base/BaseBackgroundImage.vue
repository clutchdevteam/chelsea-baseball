<template>
  <div
    class="
      absolute
      inset-0
      width-full
      height-full
      overflow-hidden
      pointer-events-none
    "
  >
    <div
      class="absolute inset-0 width-full height-full bg-primary-dark opacity-75"
    />
    <BaseImage
      :src="image.src"
      :alt="image.alt"
      class="object-fit object-cover object-center w-full h-full"
    />
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      required: true,
    },
  },
};
</script>
