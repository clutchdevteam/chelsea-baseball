<template>
  <div class="text-center my-6">
    <a
      class="text-2xl text-primary-default underline"
      :href="block.file.filename"
      >{{ block.text }}</a
    >
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
