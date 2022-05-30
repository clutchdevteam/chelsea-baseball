<template>
  <section class="my-20 base-wrapper">
    <!-- Styling and card limit for mobile/tablet screen sizes -->
    <div class="flex flex-col items-center lg:hidden">
      <NewsCard
        v-for="news_card in block.news_card.slice(0, 3)"
        :key="news_card._uid"
        :news-card="news_card"
        class="my-10"
      />
    </div>

    <!-- Syling and no card limit for desktop and up screen sizes -->
    <div class="hidden lg:flex flex-row gap-8 desktop-container">
      <NewsCard
        v-for="news_card in block.news_card"
        :key="news_card._uid"
        :news-card="news_card"
        class="my-10"
      />
    </div>
  </section>
</template>

<script>
import NewsCard from "~/components/atoms/NewsCard";

export default {
  name: "NewsUpdates",
  components: {
    NewsCard,
  },

  props: {
    block: {
      type: Object,
      required: true,
    },
  },
};
</script>
