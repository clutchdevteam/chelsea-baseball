<template>
  <nuxt-link
    :class="`btn btn-${theme}`"
    v-if="href"
    :to="$formRoute({ url: href })"
  >
    <slot />
  </nuxt-link>

  <button
    v-else
    :class="`btn btn-${theme}`"
    :type="type"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "button",
    },
    theme: {
      type: String,
      default: "primary",
    },
    href: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="postcss" scoped>
.btn {
  @apply px-10 py-2 font-display uppercase font-bold transition duration-150 ease-in-out border-2 border-transparent;

  &.btn-primary {
    @apply border-white border-2 text-white;

    &:hover {
      @apply bg-white bg-opacity-10;
    }
  }

  &.btn-secondary {
    @apply bg-primary-dark text-white;
  }
}

@screen lg {
  .btn {
    @apply text-lg;
  }
}
</style>
