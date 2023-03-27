<script setup>
import ArrowUp from "./ArrowUpSvg.vue";
import ArrowLeft from "./ArrowLeftSvg.vue";
import ArrowRight from "./ArrowRightSvg.vue";

const logo = new URL("../../assets/images/logo.png", import.meta.url).href;
const desktopIllustration = new URL("../../assets/images/desktops.png", import.meta.url).href;
</script>

<template>
  <div class="home-data__container">
    <h1 class="title">
      Empower your team <br />
      with good data
    </h1>
    <p class="subtitle">
      We collect events from your web & mobile apps and provide <br />
      a complete data toolkit for every team in your company.
    </p>
    <div class="data-illustration">
      <img class="desktop-image" :src="desktopIllustration" alt="desktop image" />
      <div class="arrow-up">
        <ArrowUp />
      </div>
      <div class="arrow-left">
        <ArrowLeft />
      </div>
      <div class="resonating-logo">
        <div class="logo-bg">
          <img class="logo" :src="logo" alt="logo" />
        </div>
        <div class="water-circle">
          <span class="circle" />
          <span class="circle circle--2" />
          <span class="circle circle--3" />
          <span class="circle circle--4" />
        </div>
      </div>
      <div class="arrow-right">
        <ArrowRight />
      </div>
      <div class="features-list">
        <div class="list-item">
          <h3 class="item-title">Analytics</h3>
          <p class="item-subtitle">All your data in one single place.</p>
        </div>
        <div class="list-item">
          <h3 class="item-title">Insights</h3>
          <p class="item-subtitle">Turn your data into actions.</p>
        </div>
        <div class="list-item">
          <h3 class="item-title">Reports</h3>
          <p class="item-subtitle">Get every team aligned.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.home-data__container {
  padding: 200px 0 280px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    margin-bottom: 40px;
    font-size: 4.5rem;
    font-weight: 700;
    line-height: 1;
    color: $black4;
    letter-spacing: -2px;
  }

  .subtitle {
    font-size: 1.5rem;
    line-height: 1.5;
    color: $grey3;
  }

  .data-illustration {
    width: 1200px; // keep it center horizontally
    margin-top: 160px;
    display: flex;
    align-items: center;

    .desktop-image {
      width: 410px;
      filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.15));
    }

    .resonating-logo {
      position: relative;

      .logo-bg {
        position: relative;
        z-index: 2;
        width: 160px;
        height: 160px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(0deg, $purple4 0%, $white 100%);
        border-radius: 50%;

        .logo {
          height: 72px;
        }
      }

      .water-circle {
        width: 240px;
        height: 240px;
        position: absolute;
        z-index: 1;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        .circle {
          position: absolute;
          top: 50%;
          left: 50%;
          display: block;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: $purple1;
          transform: scale(0.5) translate(-50%, -50%);
          opacity: 0;
          transform-origin: 0 0;
          animation: pulseLoop 8s linear infinite;

          &.circle--2 {
            animation-delay: -2s;
          }

          &.circle--3 {
            animation-delay: -4s;
          }

          &.circle--4 {
            animation-delay: -6s;
          }
        }
      }

      @keyframes pulseLoop {
        0% {
          opacity: 0;
          transform: scale(0.5) translate(-50%, -50%);
        }
        40% {
          opacity: 1;
        }
        60% {
          opacity: 1;
        }
        100% {
          opacity: 0;
          transform: scale(1.2) translate(-50%, -50%);
        }
      }
    }

    .arrow-up {
      display: none;
    }

    .arrow-left,
    .arrow-right {
      svg {
        display: block;
        width: 140px;
        height: 185px;
      }
    }

    .arrow-right {
      transform: rotateY(180deg);
    }

    .features-list {
      margin-left: 30px;

      .list-item {
        text-align: left;
        margin-bottom: 40px;

        &:last-of-type {
          margin-bottom: 0;
        }
      }

      .item-title {
        font-size: 1.125rem;
        letter-spacing: -0.3px;
        font-weight: 700;
        line-height: 1.5;
        color: $black4;
        margin-bottom: 5px;
      }

      .item-subtitle {
        font-size: 1.125rem;
        letter-spacing: -0.3px;
        line-height: 1.5;
        color: $grey3;
      }
    }
  }

  @include small-desktop {
    .title {
      font-size: 3.75rem;
      margin-bottom: 30px;
    }

    .subtitle {
      font-size: 1.25rem;
    }

    .data-illustration {
      margin-top: 80px;
      position: relative;
      width: 915px;

      .desktop-image {
        width: 310px;
      }

      .resonating-logo {
        z-index: 3;
        margin: 0 100px;

        .logo-bg {
          width: 120px;
          height: 120px;

          .logo {
            height: 64px;
          }
        }

        .water-circle {
          width: 180px;
          height: 180px;
        }
      }

      .arrow-left,
      .arrow-right {
        position: absolute;
        top: 25px;
        z-index: 1;
      }

      .arrow-left {
        left: 300px;
        transform: scale(0.7);
      }

      .arrow-right {
        left: 500px;
        transform: scale(0.7) rotateY(180deg);
      }

      .features-list {
        margin-left: 0;

        .list-item {
          margin-bottom: 20px;
        }

        .item-title {
          display: block;
          font-size: 1.125rem;
          margin-bottom: 5px;
        }

        .item-subtitle {
          font-size: 1.125rem;
        }
      }
    }
  }

  @include non-desktop {
    padding: 200px 40px 150px;

    .title {
      font-size: 3.25rem;
    }

    .data-illustration {
      flex-direction: column;
      width: auto;

      .desktop-image {
        position: relative;
        z-index: 2;
      }

      .resonating-logo {
        position: relative;
        margin: 0;
        margin-top: -30px;
        margin-bottom: 80px;

        .logo-bg {
          position: relative;
          z-index: 2;
        }
      }

      .arrow-up {
        margin-top: -30px;
        display: block;

        svg {
          display: block;
          width: 140px;
          height: 185px;
        }
      }

      .arrow-left,
      .arrow-right {
        display: none;
      }

      .features-list {
        display: flex;
        margin-left: 0;
        max-width: 500px;

        .list-item {
          margin-bottom: 0;
          margin-right: 30px;

          &:last-of-type {
            margin-right: 0;
          }
        }
      }
    }
  }

  @include small-tablet {
    .subtitle {
      br {
        display: none;
      }
    }
  }

  @include mobile {
    padding: 120px 15px 150px;

    .title {
      font-size: 3rem;
    }

    .subtitle {
      font-size: 1.125rem;
    }

    .data-illustration {
      .desktop-image {
        width: 280px;
      }

      .resonating-logo {
        .logo-bg {
          width: 110px;
          height: 110px;

          .logo {
            height: 54px;
          }
        }
      }

      .features-list {
        .list-item {
          margin-right: 20px;
          text-align: center;
        }
      }
    }
  }
}
</style>
