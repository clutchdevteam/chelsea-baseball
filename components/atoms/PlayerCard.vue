<template>
  <div :id="player._uid">
    <BaseModal class="w-full">
      <template v-slot:button>
        <div>
          <div class="bg-primary-default mb-4">
            <BaseImage
              v-if="player.image.filename"
              :src="player.image.filename"
              :alt="player.image.alt"
              class="
                flex
                items-start
                w-full
                h-44
                md:h-96
                lg:h-48
                object-cover object-top
              "
            />

            <div
              v-else
              class="
                flex
                items-center
                justify-center
                w-full
                h-44
                md:h-96
                lg:h-48
              "
            >
              <img
                class="flex w-1/2"
                src="../../assets/images/cbc_colorlogo.png"
                alt="CBC Logo"
                loading="lazy"
              />
            </div>
          </div>

          <div class="relative flex">
            <BaseText
              class="
                font-display
                text-primary-default text-2xl
                font-semibold
                opacity-100
                mr-2
              "
              ><span class="text-base">#</span>{{ player.number }}</BaseText
            >

            <BaseHeading size="h6" class="font-display text-left">
              {{ player.name }}
            </BaseHeading>
          </div>
        </div>
      </template>

      <template v-slot:content>
        <div class="grid lg:grid-cols-5">
          <div class="lg:col-span-2 bg-primary-default w-full">
            <BaseImage
              v-if="player.image.filename"
              :src="player.image.filename"
              :alt="player.image.alt"
              class="modal-image"
            />
            <img
              v-else
              src="../../assets/images/cbc_colorlogo.png"
              alt="CBC Logo"
              class="w-3/4 mx-auto my-16"
              loading="lazy"
            />
          </div>
          <div class="p-8 lg:p-12 lg:col-span-3">
            <p class="font-display font-bold text-primary-default mb-3">
              #{{ player.number }}
            </p>
            <BaseHeading class="mb-5" size="h2">{{ player.name }}</BaseHeading>

            <ul class="flex flex-col space-y-4">
              <li
                class="flex items-center"
                v-for="attribute in player.Attributes"
                :key="attribute._uid"
              >
                <BaseIcon file="homeplate-icon" class="h-4 w-4 mr-4" />
                <p>{{ attribute.text }}</p>
              </li>
            </ul>
          </div>
        </div>
      </template>
    </BaseModal>
  </div>
</template>

<script>
export default {
  name: "PlayerCard",
  props: {
    player: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.modal-image {
  aspect-ratio: 1 / 1;
  object-fit: cover;
}

@screen lg {
  .modal-image {
    aspect-ratio: 3 / 5;
  }
}
</style>
