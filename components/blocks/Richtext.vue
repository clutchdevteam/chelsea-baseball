<template>
  <div class="max-w-3xl mx-6 my-12 lg:my-24">
    <BaseRichText class="rich-text-block" :content="block.body" />
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

<style lang="postcss">
.rich-text-block p,
.rich-text-block ul,
.rich-text-block ol,
.rich-text-block blockquote,
.rich-text-block a {
  @apply mx-12 break-words;
}

.rich-text-block img {
  @apply my-12;
}
</style>
