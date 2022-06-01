<template>
  <section class="my-20 desktop-container">
    <div class="grid grid-cols-2 gap-6 lg:grid-cols-4">
      <PlayerCard
        v-for="player in block.player"
        :key="player._uid"
        :player="player"
      />
    </div>
  </section>
</template>

<script>
import PlayerCard from "~/components/atoms/PlayerCard";

export default {
  name: "RosterGrid",

  components: {
    PlayerCard,
  },

  props: {
    block: {
      type: Object,
      required: true,
    },
  },
};
</script>
