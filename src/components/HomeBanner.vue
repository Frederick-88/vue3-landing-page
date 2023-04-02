<script setup>
import { ref, computed } from "vue";
import TestimonialCarousel from "./children/TestimonialCarousel.vue";
import HomeData from "./children/HomeData.vue";

const chartDesktop = new URL("../assets/images/chart-desktop.jpg", import.meta.url).href;
const chartMobile = new URL("../assets/images/chart-mobile.png", import.meta.url).href;

// ---

const chartOptionList = ["Dashboard", "Graphs", "Reports", "Real-time", "Collaboration"];

const activeOption = ref("Dashboard");
const isReloadImage = ref(false);

const getChartImage = computed(() => {
  const isMobile = screen.width <= 600;
  return isMobile ? chartMobile : chartDesktop;
});

const setActiveOption = (value) => {
  activeOption.value = value;
  isReloadImage.value = true;

  setTimeout(() => {
    isReloadImage.value = false;
  }, 500);
};
</script>

<template>
  <div class="home-banner__container">
    <div class="header" data-aos="fade-down">
      <h1 class="title">
        <span>Analytics for</span>
        <br />
        <span class="purple">developers</span>
      </h1>
      <h3 class="subtitle">Easy to install. Unlimited power.</h3>
      <div class="btn-list">
        <button type="button" class="btn btn--purple">Get started</button>
        <button type="button" class="btn">Book Demo</button>
      </div>
    </div>

    <div class="testimonial">
      <TestimonialCarousel :with-text="true" />
    </div>

    <div class="chart-container" data-aos="zoom-in-up" data-aos-offset="100">
      <img class="image" :class="{ 'image--play-anim': isReloadImage }" :src="getChartImage" alt="chart" />
      <ul class="option-list">
        <li
          v-for="(item, index) in chartOptionList"
          :key="index"
          class="list-item"
          :class="{ 'item--active': activeOption === item }"
          @click="setActiveOption(item)"
        >
          {{ item }}
        </li>
      </ul>
    </div>

    <HomeData />
  </div>
</template>

<style lang="scss">
.home-banner__container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 120px;

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: radial-gradient(94% 58.3% at 50.3% 82.6%, $black2 0%, $black3 100%);
  }

  .header {
    .title {
      color: $white;
      font-weight: 700;
      font-size: 6.25rem;
      letter-spacing: -2px;

      .purple {
        color: $purple1;
      }
    }

    .subtitle {
      margin: 40px 0;
      color: $grey1;
      line-height: 1.5;
      font-size: 2rem;
      opacity: 0.8;
    }

    .btn-list {
      display: flex;
      justify-content: center;

      .btn {
        width: 140px;
        height: 50px;
        margin-right: 30px;
        font-weight: 700;
        font-size: 1.125rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: $white;
        background: $grey2;
        box-shadow: 0px 4px 8px 0px rgba($black, 0.25);
        border-radius: 10px;
        transition: background 0.3s ease-in-out;

        &:last-of-type {
          margin-right: 0;
        }

        &:hover {
          background: darken($grey2, 8%);
        }

        &.btn--purple {
          background: $purple2;

          &:hover {
            background: darken($purple2, 8%);
          }
        }
      }
    }
  }

  .testimonial,
  .chart-container {
    max-width: 1200px;
  }

  .testimonial {
    margin: 80px 0 140px;
    width: 100%;
    animation: fade-down 0.5s;
  }

  .chart-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .image {
      width: 100%;
      display: block;
      margin-bottom: 40px;
      border-radius: 10px;
      box-shadow: 0px 20px 40px 0px rgba($black, 0.25);

      &.image--play-anim {
        animation: fade-down 0.5s;
      }
    }

    .option-list {
      display: flex;
      justify-content: center;
      list-style: none;

      .list-item {
        margin-left: 60px;
        color: $grey3;
        font-size: 1.125rem;
        cursor: pointer;

        &:hover {
          color: $black;
          transition: all 0.2s ease-in-out;
        }

        &:first-of-type {
          margin-left: 0;
        }

        &.item--active {
          color: $purple2;
        }
      }
    }
  }

  @include large-desktop {
    &::before {
      min-height: 1000px;
    }

    .testimonial {
      margin: 80px 0;
    }
  }

  @include mid-desktop {
    .header {
      .title {
        font-size: 5rem;
      }

      .subtitle {
        margin: 40px 0 30px;
        line-height: 1;
        font-size: 1.5rem;
      }
    }

    .testimonial,
    .chart-container {
      max-width: 1000px;
    }
  }

  @include slim-desktop() {
    .testimonial,
    .chart-container {
      max-width: 850px;
    }

    .chart-container .option-list {
      .list-item {
        margin-left: 45px;
      }
    }
  }

  @include non-desktop {
    padding-top: 100px;

    .header {
      .title {
        font-size: 4.25rem;
      }

      .subtitle {
        margin: 30px 0;
        font-size: 1.375rem;
      }

      .btn-list .btn {
        font-size: 1rem;
      }
    }

    .chart-container {
      max-width: calc(100% - 80px);

      .option-list .list-item {
        &:nth-child(4) {
          display: none;
        }
      }
    }
  }

  @include mobile {
    &::before {
      min-height: initial;
    }

    .header {
      .title {
        font-size: 3.75rem;
      }

      .subtitle {
        font-size: 1.25rem;
        padding: 0 15px;
      }

      .btn-list .btn {
        margin-right: 20px;
        width: 130px;
        height: 48px;
      }
    }

    .testimonial {
      margin: 60px 0 80px;
    }

    .chart-container {
      width: 90%;
      max-width: 400px;

      .option-list .list-item {
        &:nth-child(3) {
          display: none;
        }

        &:nth-child(5) {
          display: none;
        }
      }
    }
  }

  @keyframes fade-down {
    0% {
      opacity: 0;
      transform: translateY(-75px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
</style>
