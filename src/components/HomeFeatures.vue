<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";

const carouselSettings = {
  itemsToShow: 1,
  autoplay: 5000,
  transition: 500,
  snapAlign: "start",
  pauseAutoplayOnHover: true,
  wrapAround: true,
};

const carouselBreakpoints = {
  700: {
    itemsToShow: 2,
  },
  960: {
    itemsToShow: 1,
  },
};

const featureList = [
  {
    icon: "icon-paper-plane",
    title: "Activity report",
    description: "We use the latest software to power your data. Used by the biggest enterprises today, our stack has stood the test of time.",
  },
  {
    icon: "icon-filter",
    title: "Funnel report",
    description: "We use the latest software to power your data. Used by the biggest enterprises today, our stack has stood the test of time.",
  },
  {
    icon: "icon-coin",
    title: "Revenue report",
    description: "We use the latest software to power your data. Used by the biggest enterprises today, our stack has stood the test of time.",
  },
  {
    icon: "icon-refresh",
    title: "Retention report",
    description: "We use the latest software to power your data. Used by the biggest enterprises today, our stack has stood the test of time.",
  },
];
</script>

<template>
  <div class="home-features__container">
    <div class="left-content">
      <Carousel class="carousel" ref="carouselRef" :settings="carouselSettings" :breakpoints="carouselBreakpoints">
        <Slide v-for="(feature, index) in featureList" :key="index">
          <div class="card">
            <i class="card-icon" :class="feature.icon" />
            <h1 class="card-title">{{ feature.title }}</h1>
            <p class="card-description">{{ feature.description }}</p>
          </div>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>

    <div class="right-content" data-aos="zoom-in-up">
      <h1 class="title">
        Powerful
        <br />
        <span class="purple">reporting</span>
      </h1>
      <p class="subtitle">
        We use the latest software to power your data. Used by the biggest enterprises today, our stack has stood the test of time.
      </p>

      <button type="button" class="cta-button">Get started</button>
    </div>
  </div>
</template>

<style lang="scss">
.home-features__container {
  padding: 350px 0 250px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left-content {
    width: calc(100% - 650px);

    .carousel {
      .carousel__prev,
      .carousel__next {
        color: $black4;
      }
    }

    .card {
      max-width: 70%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      text-align: justify;
      margin: 30px 0;
      border-radius: 10px;
      padding: 40px;
      box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.05);
    }

    .card-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      font-size: 2rem;
      background-color: $purple2;
      color: $white;
      border-radius: 50%;

      &.icon-paper-plane {
        font-size: 1.75rem;
      }
    }

    .card-title {
      font-weight: 700;
      color: 2.25rem;
      letter-spacing: -2px;
      color: $black4;
      margin: 20px 0 25px;
    }

    .card-description {
      color: $grey3;
      font-size: 1.125rem;
      line-height: 1.5;
    }
  }

  .right-content {
    max-width: 550px;

    .title {
      color: $black4;
      font-weight: 700;
      font-size: 4.5rem;
      letter-spacing: -2px;
      line-height: 1;
      margin-bottom: 40px;

      .purple {
        color: $purple2;
      }
    }

    .subtitle {
      color: $grey3;
      font-size: 1.5rem;
      line-height: 1.6;
    }

    .cta-button {
      margin-top: 40px;
      width: 140px;
      height: 50px;
      font-weight: 700;
      font-size: 1.125rem;
      display: flex;
      justify-content: center;
      align-items: center;
      color: $white;
      box-shadow: 0px 4px 8px 0px rgba($black, 0.25);
      border-radius: 10px;
      transition: background 0.3s ease-in-out;
      background: $purple2;

      &:hover {
        background: darken($purple2, 8%);
      }
    }
  }

  @include large-desktop {
    padding: 300px 0 250px;
  }

  @include mid-desktop {
    padding: 250px 0 200px;
  }

  @include small-desktop {
    max-width: 1100px;

    .left-content {
      width: 50%;
      max-width: 500px;
    }

    .right-content {
      width: 45%;

      .title {
        font-size: 4rem;
        margin-bottom: 30px;
      }

      .subtitle {
        font-size: 1.375rem;
      }

      .cta-button {
        margin-top: 30px;
      }
    }
  }

  @include slim-desktop {
    padding: 150px 40px;
  }

  @include non-desktop {
    flex-direction: column;
    justify-content: center;

    .left-content {
      display: flex;
      justify-content: center;
      width: 100%;
      max-width: initial;
      order: 2;

      .card {
        max-width: 90%;
        box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.05);
      }

      .carousel {
        max-width: calc(100% - 100px);

        .carousel__prev {
          left: -40px;
        }

        .carousel__next {
          right: -40px;
        }
      }
    }

    .right-content {
      order: 1;
      width: 100%;
      margin-bottom: 50px;

      .title {
        font-size: 3.25rem;
        margin-bottom: 30px;
      }

      .subtitle {
        font-size: 1.25rem;
      }

      .cta-button {
        font-size: 1rem;
      }
    }
  }

  @include mobile {
    padding: 150px 15px;

    .left-content {
      .card {
        max-width: 80%;
      }

      .carousel {
        max-width: 100%;

        .carousel__prev {
          left: -20px;
        }

        .carousel__next {
          right: -20px;
        }
      }
    }

    .right-content {
      padding: 0 30px;

      .title {
        font-size: 3rem;
      }

      .subtitle {
        font-size: 1.125rem;
      }
    }
  }
}
</style>
