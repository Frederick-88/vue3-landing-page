<script setup>
import HexadecimalSvg from "./children/HexadecimalSvg.vue";

const logoWhite = new URL("../assets/images/logo-white.png", import.meta.url).href;

const techFeatures = [
  "Globally Available",
  "Up to 1 million data points/s",
  "Up to 10 global data centers in parallel",
  "Up to 100PB fast storage per team account",
];
</script>

<template>
  <div class="home-tech__container">
    <h1 class="title" data-aos="fade-up">
      Built on powerful <br />
      <span class="pink">enterprise</span>
      <br class="hidden-xs" />
      tech.
    </h1>
    <p class="subtitle" data-aos="fade-up" data-aos-delay="200">
      We use the latest software to power your data. Used by the biggest enterprises today, our stack has stood the test of time.
    </p>

    <div class="tech-illustration" data-aos="zoom-in-up" data-aos-delay="200">
      <div class="left-icons">
        <i class="icon--pink1 icon-wifi-hotspot"></i>
        <div class="flex--space-between">
          <i class="icon--pink2 icon-bug"></i>
          <i class="icon--pink1 icon-cloud"></i>
        </div>
        <div class="flex--space-between flex--high">
          <i class="icon--pink2 icon-atom"></i>
          <i class="icon--pink1 icon-chat"></i>
          <i class="icon--pink2 icon-heart"></i>
        </div>
      </div>
      <div class="center-icon">
        <span class="glow" />
        <HexadecimalSvg />
        <img class="logo" :src="logoWhite" alt="logo" />
      </div>
      <div class="right-icons">
        <div class="flex--space-between flex--high">
          <i class="icon--purple1 icon-activity"></i>
          <i class="icon--purple1 icon-database"></i>
          <i class="icon--purple2 icon-check-circle"></i>
        </div>
        <div class="flex--space-between">
          <i class="icon--purple2 icon-paper-plane"></i>
          <i class="icon--purple1 icon-coin"></i>
        </div>
        <i class="icon--purple2 icon-mail"></i>
      </div>
    </div>

    <div class="tech-features">
      <h3 class="tech-name" data-aos="fade-up" data-aos-delay="200">Northstar 3.0</h3>
      <p class="tech-feature-text" v-for="(text, index) in techFeatures" :key="index" data-aos="fade-up" :data-aos-delay="200 * (index + 1)">
        {{ text }}
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.home-tech__container {
  width: 100%;
  min-height: 100vh;
  padding: 120px 0 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: radial-gradient(75% 50% at 50% 44.9%, $black5 0%, rgb(17, 16, 19) 100%);

  .title {
    color: $white;
    font-weight: 700;
    font-size: 4.5rem;
    letter-spacing: -2px;
    line-height: 1.1;
    text-align: center;

    .pink {
      color: $pink1;
    }

    .hidden-xs {
      display: none;
    }
  }

  .subtitle {
    display: block;
    max-width: 530px;
    margin-top: 40px;
    color: $grey4;
    line-height: 1.5;
    text-align: center;
    font-size: 1.5rem;
  }

  .tech-illustration {
    margin-top: 110px;
    display: flex;
    justify-content: center;
    align-items: center;

    .center-icon {
      position: relative;

      .glow {
        position: absolute;
        z-index: 1;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: block;
        width: 250px;
        height: 250px;
        background: linear-gradient(141deg, #ea80ff 0%, #e2558d 100%);
        border-radius: 50%;
        filter: blur(50px);
        opacity: 0.5;
      }

      svg {
        position: relative;
        z-index: 2;
        width: 300px;
        height: 300px;
      }

      .logo {
        position: absolute;
        z-index: 3;
        margin-top: -5px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100px;
        height: 100px;
      }
    }

    .left-icons,
    .right-icons {
      display: flex;
      align-items: center;

      i {
        font-size: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        width: 50px;
        border-radius: 50%;
        color: $white;

        &.icon--pink1 {
          background: $pink3;
        }

        &.icon--pink2 {
          background: $pink2;
        }

        &.icon--purple1 {
          background: $purple6;
        }

        &.icon--purple2 {
          background: $purple5;
        }
      }
    }

    .left-icons {
      margin-right: 30px;
    }

    .right-icons {
      margin-left: 30px;
    }

    .flex--space-between {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 180px;

      &:not(.flex--high) {
        margin: 0 50px;
      }

      &.flex--high {
        height: 300px;
      }
    }
  }

  .tech-features {
    text-align: center;

    .tech-name {
      color: $white;
      font-weight: 700;
      font-size: 1.5rem;
    }

    .tech-feature-text {
      font-weight: 700;
      font-size: 1.5rem;
      margin-top: 24px;
      letter-spacing: -0.6px;

      &:nth-child(2) {
        color: $pink2;
      }

      &:nth-child(3) {
        color: $pink4;
      }

      &:nth-child(4) {
        color: $pink3;
      }

      &:nth-child(5) {
        color: $purple7;
      }
    }
  }

  @include slim-desktop {
    padding: 120px 0;

    .title {
      font-size: 3.75rem;
    }

    .subtitle {
      margin-top: 30px;
      font-size: 1.25rem;
    }

    .tech-illustration {
      margin-top: 80px;

      .center-icon {
        transform: scale(0.9);
      }

      .left-icons {
        margin-right: 10px;
      }

      .right-icons {
        margin-left: 10px;
      }

      .flex--space-between {
        &:not(.flex--high) {
          margin: 0 30px;
        }
      }
    }

    .tech-features {
      .tech-name,
      .tech-feature-text {
        font-size: 1.375rem;
      }
    }
  }

  @include non-desktop {
    padding: 120px 0 0;
    min-height: initial;

    .title {
      font-size: 3.25rem;
    }

    .tech-illustration {
      .flex--high {
        display: none;
      }

      .left-icons {
        .flex--space-between {
          &:not(.flex--high) {
            margin: 0;
            margin-left: 20px;
          }
        }
      }

      .right-icons {
        .flex--space-between {
          &:not(.flex--high) {
            margin: 0;
            margin-right: 20px;
          }
        }
      }
    }

    .tech-features {
      .tech-name,
      .tech-feature-text {
        font-size: 1.25rem;
      }
    }
  }

  @include mobile {
    padding: 120px 15px 0;

    .title {
      font-size: 3rem;
    }

    .subtitle {
      font-size: 1.125rem;
    }

    .tech-illustration {
      margin-top: 40px;

      .left-icons,
      .right-icons {
        display: none;
      }
    }

    .tech-features {
      .tech-name,
      .tech-feature-text {
        font-size: 1.125rem;
      }
    }
  }

  @include small-mobile {
    .title {
      .hidden-xs {
        display: block;
      }
    }
  }
}
</style>
