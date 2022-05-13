<template>
  <section>
    <!-- <BaseImage
      src="../../assets/images/NicePng_baseball-png_36804 1.png"
      alt=""
    /> -->
    <BaseHeading size="h2">{{ block.heading }}</BaseHeading>
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
