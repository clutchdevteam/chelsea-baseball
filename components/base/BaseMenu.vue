<template>
  <div>
    <template v-if="menu.submenus">
      <BaseMenuItem :menu="menu" />
    </template>

    <nuxt-link
      class="block"
      v-else
      :id="menu.title.toLowerCase().replace(' ', '-')"
      :to="$formRoute({ url: menu.link.cached_url })"
    >
      {{ menu.title }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    menu: {
      type: Object,
      required: true,
    },
  },
};
</script>
