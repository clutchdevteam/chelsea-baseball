<template>
  <div>
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

            <BaseHeading size="h6" class="font-display text-left">{{
              player.name
            }}</BaseHeading>
          </div>
        </div>
      </template>

      <template v-slot:content>
        <BaseImage
          v-if="player.image.filename"
          :src="player.image.filename"
          :alt="player.image.alt"
          class="flex"
        />
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
