<script setup>
const pricingList = [
  {
    value: "free",
    name: "Free",
    description: "Perfect for getting started.",
    price: "$0",
    priceDescription: "free forever",
    featureList: ["1 project", "Analytics board", "Insights panel", "CLI access"],
    ctaText: "Sign up for Free",
  },
  {
    value: "pro",
    name: "Pro",
    description: "A complete analytics platform.",
    price: "$49",
    priceDescription: "per project/month",
    featureList: ["Up to 10 projects", "Analytics board", "Insights panel", "CLI access", "Automation features", "Team features"],
    ctaText: "Subscribe now",
  },
  {
    value: "enterprise",
    name: "Enterprise",
    description: "Flexible power and security.",
    price: "$949",
    priceDescription: "starting price, customizable",
    featureList: ["Everything in Pro", "Volume discounts", "Custom security package"],
    ctaText: "Contact Us",
  },
];
</script>

<template>
  <div class="home-pricing__container">
    <div v-for="(pricing, index) in pricingList" :key="index" :class="`box--${pricing.value}`" class="pricing-box">
      <p class="name">{{ pricing.name }}</p>
      <p class="description">{{ pricing.description }}</p>

      <p class="price">{{ pricing.price }}</p>
      <p class="price-description">{{ pricing.priceDescription }}</p>

      <hr class="divider" />

      <ul class="feature-list">
        <li v-for="(feature, itemIndex) in pricing.featureList" :key="itemIndex" class="feature">{{ feature }}</li>
      </ul>

      <button type="button" class="cta-button">{{ pricing.ctaText }}</button>
    </div>
  </div>
</template>

<style lang="scss">
.home-pricing__container {
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  margin: 0 auto;

  .pricing-box {
    width: 33%;
    padding: 50px;
    box-shadow: 0px 20px 40px 0px rgba($black, 0.05), 0px 2px 10px 0px rgba($black, 0.1);
    background: $white;
    border-radius: 10px;
    border: 1px solid rgba($white, 0.08);

    &.box--free,
    &.box--enterprise {
      height: 615px;
    }

    &.box--free {
      background: linear-gradient(149deg, $purple8 0%, $purple2 100%);
      color: $white;

      .description {
        color: $grey7;
      }

      .price-description {
        color: $purple10;
      }

      .divider {
        border-color: $purple8;
      }

      .feature-list .feature {
        color: $white;

        &::before {
          color: $white;
        }
      }

      .cta-button {
        background: $white;
        color: $purple8;

        &:hover {
          background: darken($white, 8%);
        }
      }
    }

    &.box--pro {
      height: 695px;
      margin: 0 40px;

      .price {
        color: $purple9;
      }

      .cta-button {
        background: $purple2;
        color: $white;

        &:hover {
          background: darken($purple2, 8%);
        }
      }
    }

    &.box--enterprise {
      .price {
        color: $black3;
      }

      .cta-button {
        background: $black3;
        color: $white;

        &:hover {
          background: darken($black3, 8%);
        }
      }
    }

    .name {
      font-weight: 700;
      font-size: 1.5rem;
      letter-spacing: -0.8px;
      line-height: 1;
      margin-bottom: 6px;
    }

    .description {
      display: block;
      margin-bottom: 40px;
      font-size: 1.125rem;
      letter-spacing: -0.3px;
      color: $grey3;
      line-height: 1.2;
    }

    .price {
      font-weight: 500;
      font-size: 4rem;
      letter-spacing: -1px;
      line-height: 1;
      margin-bottom: 10px;
    }

    .price-description {
      font-size: 1.125rem;
      letter-spacing: -0.2px;
      line-height: 1;
      color: $grey9;
    }

    .divider {
      margin: 40px 0;
      border-top: 1px solid $grey8;
    }

    .feature-list {
      .feature {
        display: flex;
        align-items: center;
        font-weight: 500;
        color: $black3;
        font-size: 1.125rem;
        letter-spacing: -0.4px;
        line-height: 1.2;
        margin-bottom: 18px;

        &::before {
          content: $icon-check;
          font-family: "icomoon";
          margin-right: 10px;
          font-size: 1.25rem;
          color: $purple2;
        }

        &:last-of-type {
          margin-bottom: 0;
        }
      }
    }

    .cta-button {
      margin-top: 40px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 12px 20px;
      border-radius: 10px;
      font-weight: 700;
      font-size: 1.125rem;
      letter-spacing: -0.3px;
      transition: all 0.3s ease-in-out;
    }
  }

  @include small-desktop {
    max-width: 1100px;

    .pricing-box {
      padding: 40px;

      &.box--free,
      &.box--enterprise {
        height: auto;
        min-height: 550px;
      }

      &.box--pro {
        height: auto;
        min-height: 630px;
        margin: 0 30px;
      }

      .description {
        margin-bottom: 30px;
      }

      .price {
        font-size: 3.5rem;
      }

      .feature-list .feature {
        margin-bottom: 15px;
      }

      .cta-button {
        margin-top: 30px;
      }
    }
  }

  @include slim-desktop {
    padding: 0 40px;
    max-width: initial;

    .pricing-box {
      &.box--free,
      &.box--enterprise {
        min-height: 570px;
      }

      &.box--pro {
        min-height: 650px;
      }
    }
  }

  @include non-desktop {
    flex-direction: column;

    .pricing-box {
      width: 350px;

      &.box--free,
      &.box--enterprise {
        min-height: initial;
      }

      &.box--pro {
        min-height: initial;
        margin: 50px 0;
      }

      .name {
        font-size: 1.25rem;
      }

      .description {
        font-size: 1rem;
      }

      .price {
        font-size: 3rem;
      }

      .price-description {
        font-size: 1rem;
      }

      .feature-list .feature {
        margin-bottom: 15px;
        font-size: 1rem;

        &::before {
          font-size: 1.125rem;
        }
      }

      .cta-button {
        margin-top: 30px;
        font-size: 1rem;
      }
    }
  }

  @include mobile {
    padding: 0 30px;

    .pricing-box {
      width: 100%;
      max-width: 320px;
    }
  }
}
</style>
