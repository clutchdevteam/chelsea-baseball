<template>
  <div :class="`${block.size} ${block.color}`">
    {{ block.label }}
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

<style lang="postcss" scoped>
.h1 {
  @apply text-7xl;
}

.h2 {
  @apply text-5xl;
}

.h3 {
  @apply text-4xl;
}

.h4 {
  @apply text-xl;
}

.blue {
  @apply text-blue-500;
}

.green {
  @apply text-green-500;
}

.red {
  @apply text-red-500;
}
</style>
