<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";

const adobeLogo = new URL("../../assets/images/logos/adobe.png", import.meta.url).href;
const awsLogo = new URL("../../assets/images/logos/aws.png", import.meta.url).href;
const googleAnalyticsLogo = new URL("../../assets/images/logos/google-analytics.png", import.meta.url).href;
const googleCloudLogo = new URL("../../assets/images/logos/google-cloud.png", import.meta.url).href;
const mastercardLogo = new URL("../../assets/images/logos/mastercard-logo.png", import.meta.url).href;
const metaLogo = new URL("../../assets/images/logos/meta.png", import.meta.url).href;
const microsoftLogo = new URL("../../assets/images/logos/microsoft.png", import.meta.url).href;
const paypalLogo = new URL("../../assets/images/logos/paypal.png", import.meta.url).href;

const props = defineProps({
  withText: { type: Boolean, default: false },
});

const logoList = [adobeLogo, metaLogo, awsLogo, googleCloudLogo, mastercardLogo, googleAnalyticsLogo, paypalLogo, microsoftLogo];

const carouselSettings = {
  itemsToShow: 2,
  autoplay: 1000,
  transition: 500,
  wrapAround: true,
  snapAlign: "start",
};
const carouselBreakpoints = {
  // 360, 600 & 960 up
  360: {
    itemsToShow: 3,
  },
  600: {
    itemsToShow: 4,
  },
  960: {
    itemsToShow: 5,
  },
};
</script>

<template>
  <div class="testimonial-carousel">
    <p v-if="withText" class="text">Trusted by</p>
    <Carousel class="carousel" ref="carouselRef" :settings="carouselSettings" :breakpoints="carouselBreakpoints">
      <Slide v-for="(logo, index) in logoList" :key="index">
        <img class="logo" :src="logo" :class="{ 'logo--meta': index === 1 }" />
      </Slide>
    </Carousel>
  </div>
</template>

<style lang="scss">
.testimonial-carousel {
  width: 100%;

  .text {
    text-transform: uppercase;
    color: $grey5;
    font-weight: 700;
    font-size: 0.875rem;
    letter-spacing: 2px;
    margin-bottom: 36px;
  }

  .carousel {
    .logo {
      height: 40px;
      max-width: 100%;
      object-fit: contain;
      filter: grayscale(1) contrast(0.5);

      &.logo--meta {
        height: 30px;
      }
    }
  }

  @include slim-desktop {
    .carousel .logo {
      height: 32px;

      &.logo--meta {
        height: 24px;
      }
    }
  }

  @include non-desktop {
    .carousel .logo {
      max-width: 80%;
    }
  }
}
</style>
