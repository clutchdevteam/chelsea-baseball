<template>
  <button
    class="open-button"
    @click="openModal"
    ref="openButtonRef"
    type="button"
  >
    <slot name="button" />
    <Portal v-if="isOpen" to="modal">
      <div
        class="modal-wrapper"
        @keydown.esc="closeModal"
        v-click-outside="closeModal"
      >
        <div class="modal-content">
          <button @click="closeModal" ref="closeButtonRef" type="button">
            Close Modal
          </button>
          <slot name="content" />
        </div>
      </div>
    </Portal>
  </button>
</template>

<script>
import { mapState } from "vuex";
import { Portal } from "portal-vue";
import vClickOutside from "v-click-outside";

export default {
  directives: {
    clickOutside: vClickOutside.directive,
  },
  components: {
    Portal,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    ...mapState("global", ["pageHasModalOpen"]),
  },
  methods: {
    async closeModal() {
      if (this.isOpen) {
        this.isOpen = false;

        await this.$store.commit("global/isModalOpen", false);
        await this.$nextTick();
        await this.$nextTick();
        this.$refs.openButtonRef?.focus();
      }
    },
    async openModal() {
      this.isOpen = true;
      await this.$store.commit("global/isModalOpen", true);
      await this.$nextTick();
      await this.$nextTick();
      this.$refs.closeButtonRef?.focus();
    },
  },
};
</script>

<style lang="postcss" scoped>
.modal-wrapper {
  @apply bg-primary-dark bg-opacity-75 z-[52];
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  @apply mx-6;
  background-color: white;
}
</style>
