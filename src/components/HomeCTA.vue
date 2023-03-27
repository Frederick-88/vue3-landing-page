<script setup></script>

<template>
  <div class="home-cta__container">
    <h1 class="title">Start using our product today.</h1>
    <p class="subtitle">Faster than free analytics tools. Access to all your data, with respect to the privacy of your users.</p>

    <div class="btn-list">
      <button type="button" class="btn btn--purple">Get started</button>
      <button type="button" class="btn">Book Demo</button>
    </div>
  </div>
</template>

<style lang="scss">
.home-cta__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 200px 0;

  .title {
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.03em;
    margin-bottom: 20px;
    color: $black4;
  }

  .subtitle {
    max-width: 580px;
    text-align: center;
    font-size: 1.5rem;
    letter-spacing: -0.03em;
    line-height: 1.5;
    margin-bottom: 40px;
    color: $grey3;
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

  @include small-desktop {
    .title {
      font-size: 3.25rem;
    }

    .subtitle {
      font-size: 1.375rem;
    }
  }

  @include non-desktop {
    padding: 150px 15px;
    text-align: center;

    .title {
      font-size: 3.25rem;
      max-width: 500px;
      margin-bottom: 30px;
    }

    .subtitle {
      font-size: 1.25rem;
    }

    .btn-list .btn {
      font-size: 1rem;
    }
  }

  @include mobile {
    .title {
      font-size: 3rem;
      margin-bottom: 30px;
    }

    .subtitle {
      font-size: 1.125rem;
    }

    .btn-list .btn {
      width: 130px;
      height: 48px;
      margin-right: 20px;
    }
  }
}
</style>
