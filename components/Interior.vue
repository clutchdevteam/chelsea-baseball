<template>
  <div v-editable="block" class="w-full">
    <InteriorTitle :block="block.title[0]" />

    <component
      v-for="block in block.body"
      :key="block._uid"
      :block="block"
      :is="block.component"
    />
  </div>
</template>

<script>
import InteriorTitle from "~/components/blocks/InteriorTitle.vue";

export default {
  props: {
    block: {
      type: Object,
      required: true,
    },
  },
  components: { InteriorTitle },
};
</script>
