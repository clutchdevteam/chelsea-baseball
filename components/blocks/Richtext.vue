<template>
  <div class="max-w-3xl px-4 xl:px-0 mx-auto my-12 lg:my-24">
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
.rich-text-block > h1,
.rich-text-block > h2,
.rich-text-block > h3,
.rich-text-block > h4,
.rich-text-block > h5,
.rich-text-block > h6,
.rich-text-block > p,
.rich-text-block > ul,
.rich-text-block > ol,
.rich-text-block > blockquote,
.rich-text-block > a {
  @apply lg:px-12;
}

.rich-text-block li {
  @apply opacity-100;
}

.rich-text-block h2 {
  @apply text-2xl;
}

.rich-text-block h3 {
  @apply text-lg;
}
.rich-text-block p a {
  @apply text-primary-default font-light;
}

.rich-text-block img {
  @apply my-12;
}
</style>
