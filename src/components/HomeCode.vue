<script setup>
const smallCode = new URL("../assets/images/code-snippet-1.PNG", import.meta.url).href;
const largeCode = new URL("../assets/images/code-snippet-2.PNG", import.meta.url).href;
</script>

<template>
  <div class="home-code__container">
    <div class="content">
      <div class="left-content">
        <h1 class="title">
          Our features at <br />
          your
          <br class="hidden-lg" />
          <span class="peach">fingertips.</span>
        </h1>
        <p class="subtitle">Our Client is a query builder that composes the way you think and gets auto-generated.</p>
        <img class="image" :src="smallCode" alt="code snippet" />
      </div>

      <img class="image-banner" :src="largeCode" alt="code snippet" />
    </div>
  </div>
</template>

<style lang="scss">
.home-code__container {
  width: 100%;
  height: 580px;
  background: radial-gradient(94% 92.9% at 100% 96.1%, $black6 0%, rgb(17, 16, 19) 100%);
  padding: 120px 90px 80px;
  display: flex;
  justify-content: center;

  .content {
    position: relative;
    width: 100%;
    max-width: 1250px;
    height: 100%;
  }

  .left-content {
    .title {
      color: $white;
      font-weight: 700;
      font-size: 4.5rem;
      letter-spacing: -2px;
      line-height: 1;

      .peach {
        color: $peach1;
      }

      .hidden-lg {
        display: none;
      }
    }

    .subtitle {
      display: block;
      max-width: 510px;
      margin-top: 30px;
      color: $grey4;
      line-height: 1.2;
      font-size: 1.5rem;
    }

    .image {
      margin-top: 60px;
      width: 100%;
      max-width: 300px;
      border-radius: 10px;
    }
  }

  .image-banner {
    position: absolute;
    right: 0;
    bottom: -170px;
    width: 700px;
    z-index: 2;
    -webkit-filter: saturate(1.2);
    filter: saturate(1.2);
    box-shadow: 0px 20px 40px 0px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }

  @include large-desktop {
    padding: 120px 60px 80px;

    .left-content {
      .title {
        font-size: 4rem;
      }

      .subtitle {
        font-size: 1.375rem;
      }
    }

    .image-banner {
      top: 10px;
      bottom: initial;
      width: 52%;
    }
  }

  @include slim-desktop {
    .left-content {
      max-width: 45%;

      .title {
        font-size: 3.5rem;
      }

      .subtitle {
        font-size: 1.25rem;
      }

      .image {
        max-width: 300px;
      }
    }
  }

  @include non-desktop {
    padding: 150px 40px;
    height: auto;

    .content,
    .left-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .left-content {
      max-width: initial;

      .title {
        font-size: 3.25rem;
        max-width: 500px;

        br {
          display: none;
        }
      }
    }

    .image-banner {
      margin-top: 30px;
      position: relative;
      top: initial;
      right: initial;
      width: 100%;
      max-width: 400px;
    }
  }

  @include mobile {
    padding: 150px 15px;

    .left-content {
      .title {
        font-size: 3rem;

        .hidden-lg {
          display: block;
        }
      }

      .subtitle {
        font-size: 1.125rem;
      }
    }
  }
}
</style>
