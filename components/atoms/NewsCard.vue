<template>
  <div class="drop-shadow-lg bg-white w-72 relative">
    <div class="bg-black h-24 flex justify-center items-center mb-6">
      <BaseImage
        v-if="newsCard.logo.filename"
        :src="newsCard.logo.filename"
        :alt="newsCard.logo.alt"
        class="w-72 h-24 object-cover flex items-center"
      />

      <img
        v-else
        class="w-auto h-14 my-3"
        src="../../assets/images/cbc_colorlogo.png"
      />
    </div>

    <div class="flex flex-col mx-4">
      <BaseHeading tag="h2" size="h4" class="my-3">
        {{ newsCard.heading }}
      </BaseHeading>

      <BaseText class="mt-3 mb-12"> {{ newsCard.text }} </BaseText>
    </div>

    <div class="absolute bottom-2 left-4">
      <BaseLink :href="newsCard.link.cached_url" v-html="newsCard.link_text" />
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsCard",
  props: {
    newsCard: {
      type: Object,
      required: true,
    },
  },
};
</script>
