<template>
  <component :is="component" :class="size">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      required: true,
      validator: (value) =>
        ["h1", "h2", "h3", "h4", "h5", "h6"].includes(value),
    },
    /** The semantic HTML element used for the heading. Defaults to the value of `size`. */
    tag: {
      type: String,
      default: undefined,
      validator: (value) =>
        ["h1", "h2", "h3", "h4", "h5", "h6", "div"].includes(value),
    },
  },
  computed: {
    component() {
      return this.tag ?? this.size.slice(0, 2);
    },
  },
};
</script>

<style lang="postcss" scoped>
h1,
h2,
h3,
h4,
h5,
h6 {
  @apply tracking-tight;
}

.h1,
.h2,
.h3 {
  @apply font-display font-semibold uppercase;
}

.h1 {
  @apply text-7xl lg:text-8xl;
}

.h2 {
  @apply text-3xl lg:text-4xl;
}

.h3 {
  @apply text-2xl lg:text-3xl;
}

.h4 {
  @apply text-xl font-semibold lg:text-2xl;
}

.h5 {
  @apply text-xl font-semibold;
}
</style>
