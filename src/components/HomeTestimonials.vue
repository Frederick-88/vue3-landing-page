<script setup>
import TestimonialCarousel from "./children/TestimonialCarousel.vue";

const acmeCorpLogo = new URL("../assets/images/logos/acme-corp.png", import.meta.url).href;
const testimonyPerson = new URL("../assets/images/testimoni-pic.PNG", import.meta.url).href;
</script>

<template>
  <div class="home-testimonial__container">
    <h1 class="title">Trusted by the world’s largest companies.</h1>

    <div class="testimonial-box">
      <div class="box--left">
        <div class="content--top">
          <img class="logo" :src="acmeCorpLogo" alt="logo" />
          <p class="testimony">
            <span class="grey">“</span>As we grow, it becomes increasingly important that we use software that we can trust and know is secure.<span
              class="grey"
              >”</span
            >
          </p>
        </div>

        <div class="content--bottom">
          <p class="person-name">John Max</p>
          <p class="person-role">CTO at Company</p>
        </div>
      </div>
      <div class="box--right">
        <img class="testimony-person-image" :src="testimonyPerson" alt="testimony-person" />
      </div>
    </div>

    <div class="testimonial-carousel">
      <TestimonialCarousel />
    </div>
  </div>
</template>

<style lang="scss">
.home-testimonial__container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 160px 100px;
  background: radial-gradient(86% 100% at 50% 100%, $black3 0%, $darkPurple1 100%);

  .title {
    max-width: 800px;
    font-size: 4.5rem;
    color: $white;
    line-height: 1.2;
    text-align: center;
    margin-bottom: 100px;
  }

  .testimonial-box {
    margin-bottom: 80px;
    display: flex;
    width: 100%;
    max-width: 1200px;
    background: $white;
    border-radius: 10px;
    overflow: hidden;

    .box--left,
    .box--right {
      width: 50%;
    }

    .box--left {
      padding: 60px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .logo {
        width: 40px;
        margin-bottom: 30px;
      }

      .testimony {
        color: $black;
        width: 100%;
        max-width: 480px;
        font-size: 2.125rem;
        letter-spacing: -1px;
        line-height: 1.5;

        .grey {
          color: $grey5;
        }
      }

      .person-name {
        width: 100%;
        font-weight: 700;
        color: $black4;
        font-size: 1.25rem;
        letter-spacing: -0.7px;
        line-height: 1;
        margin-bottom: 5px;
      }

      .person-role {
        color: $grey5;
        font-size: 1.25rem;
        letter-spacing: -0.7px;
        line-height: 1.5;
      }
    }

    .testimony-person-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .testimonial-carousel {
    width: 100%;
    max-width: 1200px;
  }

  @include large-desktop {
    .testimonial-box {
      max-width: 1000px;

      .testimony {
        margin-bottom: 50px;
      }
    }
  }

  @include mid-desktop {
    .title {
      font-size: 4rem;
      margin-bottom: 70px;
    }

    .testimonial-box {
      max-width: 950px;
      margin-bottom: 70px;

      .box--left {
        .testimony {
          font-size: 1.875rem;
          margin-bottom: 50px;
        }
      }
    }
  }

  @include slim-desktop {
    .title {
      font-size: 3.5rem;
      margin-bottom: 50px;
      max-width: 600px;
    }

    .testimonial-box {
      .box--left {
        width: 55%;
      }

      .box--right {
        width: 45%;
      }

      .box--left {
        .testimony {
          font-size: 1.75rem;
        }

        .person-name,
        .person-role {
          font-size: 1.125rem;
        }
      }
    }
  }

  @include non-desktop {
    padding: 150px 40px;

    .title {
      font-size: 3.25rem;
    }

    .testimonial-box {
      max-width: 450px;

      .box--left {
        width: 100%;
        padding: 50px;
      }

      .box--right {
        display: none;
      }

      .box--left {
        .testimony {
          font-size: 1.5rem;
        }
      }
    }
  }

  @include mobile {
    padding: 150px 15px;

    .title {
      font-size: 3rem;
    }

    .testimonial-box {
      .box--left {
        padding: 40px;
      }
    }
  }
}
</style>
