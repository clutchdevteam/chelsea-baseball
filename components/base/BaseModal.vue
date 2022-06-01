<template>
  <button
    class="open-button"
    @click="openModal"
    ref="openButtonRef"
    type="button"
  >
    <slot name="button" />
    <Portal v-if="isOpen" to="modal">
      <div class="modal-wrapper" @keydown.esc="closeModal">
        <div class="modal-content" v-click-outside="closeModal">
          <button
            class="
              absolute
              left-0
              top-0
              mt-2
              ml-2
              lg:-mt-3 lg:-ml-3
              bg-white
              p-1
              rounded-full
            "
            @click="closeModal"
            ref="closeButtonRef"
            type="button"
          >
            <BaseIcon class="h-4 w-4 text-primary-default" file="close-icon" />
            <span class="sr-only">Close Modal</span>
          </button>
          <div class="bg-white">
            <slot name="content" />
          </div>
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
  position: relative;
  width: 90%;
  max-height: 90%;
  min-height: 350px;
  max-width: 768px;
  overflow-y: scroll;
}

@screen lg {
  .modal-content {
    overflow-y: visible;
  }
}
</style>
