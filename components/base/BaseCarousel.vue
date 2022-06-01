<template>
  <div class="swiper relative">
    <div ref="swiperRef" class="swiper-container">
      <ul class="swiper-wrapper">
        <!-- @slot The slider’s content. Should contain one or multiple `BaseSliderSlide` components. -->
        <slot />
      </ul>
    </div>

    <div v-if="hasNavigation" class="swiper-navigation hidden lg:block">
      <div ref="prevButtonRef" class="swiper-button-prev" />
      <div ref="nextButtonRef" class="swiper-button-next" />
    </div>

    <div class="flex justify-center" v-if="hasPagination">
      <div ref="paginationRef" class="swiper-pagination" @click.stop />
    </div>
  </div>
</template>

<script>
import Swiper, { Navigation, Pagination, A11y, Autoplay } from "swiper";

Swiper.use([Navigation, Pagination, A11y, Autoplay]);

/**
 * A swipeable slider (AKA carousel or slideshow).
 */
export default {
  props: {
    /** The active slide index. */
    activeIndex: {
      type: Number,
      default: 0,
    },
    /** The number of slides per view. If not set, it will be determined automatically based on the slides’ width. */
    mobileSlidesPerView: {
      type: Number,
      default: 1,
    },
    /** The number of slides per view. If not set, it will be determined automatically based on the slides’ width. */
    desktopSlidesPerView: {
      type: Number,
      default: 5,
    },
    /** Whether the slider has navigation (previous and next slide) buttons. */
    hasNavigation: {
      type: Boolean,
      default: false,
    },
    /** Whether the slider has pagination (dots indicating the selected slide and the total number of slides). */
    hasPagination: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      swiper: null,
      swiperRef: null,
      prevButtonRef: null,
      nextButtonRef: null,
      paginationRef: null,
      innerActiveIndex: null,
      slideNodes: [],
    };
  },
  watch: {
    activeIndex: {
      immediate: true,
      handler() {
        this.innerActiveIndex = this.activeIndex;
        if (this.swiper) {
          this.swiper.slideTo(this.innerActiveIndex);
        }
      },
    },
    slidesPerView() {
      if (this.swiper) {
        this.swiper.params.slidesPerView = this.slidesPerView;
      }
    },
  },
  mounted() {
    this.swiper = new Swiper(this.$refs.swiperRef, {
      initialSlide: this.activeIndex,
      slidesPerView: this.mobileSlidesPerView ?? "auto",
      watchOverflow: true,
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        pauseOnMouseEnter: true,
      },
      loop: true,
      breakpoints: {
        640: {
          slidesPerView: 3,
        },
        960: {
          slidesPerView: this.desktopSlidesPerView ?? "auto",
        },
      },
      navigation: {
        prevEl: this.$refs.prevButtonRef,
        nextEl: this.$refs.nextButtonRef,
      },
      pagination: {
        el: this.$refs.paginationRef,
        clickable: true,
      },
    });
    this.swiper.on("slideChange", () => {
      this.innerActiveIndex = this.swiper.activeIndex;
      /** Emitted when the active slide changes. */
      this.$emit("slideChange", this.innerActiveIndex);
    });
  },
  async updated() {
    this.swiper.update();
  },
  async beforeDestroy() {
    this.swiper.destroy();
  },
};
</script>

<style lang="postcss">
@import "swiper/swiper-bundle.css";

.swiper-pagination {
  @apply flex space-x-2 mt-1;
}

.swiper-pagination-bullet-active {
  @apply bg-primary-default;
}

.swiper-button-prev,
.swiper-button-next {
  @apply text-primary-default;
}

.swiper-button-prev::after,
.swiper-button-next::after {
  font-size: 24px;
}

@screen lg {
  .swiper-pagination {
    @apply mt-4;
  }
}
</style>
