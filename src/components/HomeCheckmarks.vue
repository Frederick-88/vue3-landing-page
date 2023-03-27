<script setup>
const checkmarkList = [
  {
    title: "Complete picture",
    description: "Combine all your data into one clear overview.",
  },
  {
    title: "Insights",
    description: "Look at your data in multiple ways.",
  },
  {
    title: "Insights to Results",
    description: "Turn insights into action with our tools.",
  },
  {
    title: "Make your data work",
    description: "Create automated workflows with data.",
  },
  {
    title: "Track Ads",
    description: "All your ads stats in one clear overview.",
  },
  {
    title: "Data Overview",
    description: "Powerful tools to learn from your data lake.",
  },
  {
    title: "A/B Testing",
    description: "Know what works before shipping it.",
  },
  {
    title: "User flow reporting",
    description: "Track how vistors go through your app.",
  },
];
</script>

<template>
  <div class="home-checkmarks__container">
    <div v-for="(item, index) in checkmarkList" :key="index" class="checkmark-box">
      <i class="icon-check" />
      <div class="box-description">
        <h3 class="title">{{ item.title }}</h3>
        <p class="description">{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.home-checkmarks__container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 200px 0 160px;
  max-width: 990px;
  margin: 0 auto;

  .checkmark-box {
    display: flex;
    padding-bottom: 40px;
    padding-right: 50px;

    &:nth-child(4n) {
      padding-right: 0;
    }

    .icon-check {
      font-size: 1rem;
      color: $purple2;
      margin-right: 10px;
      width: 20px;
      height: 20px;
    }

    .box-description {
      max-width: 180px;

      .title {
        font-weight: 700;
        font-size: 1.125rem;
        letter-spacing: -0.03em;
        line-height: 1.2;
        color: $black4;
        margin-bottom: 10px;
      }

      .description {
        font-size: 1.125rem;
        letter-spacing: -0.03em;
        line-height: 1.5;
        color: $grey3;
      }
    }
  }

  @include slim-desktop {
    .checkmark-box {
      padding-right: 25px;
    }
  }

  @include non-desktop {
    padding: 150px 15px 110px;
    max-width: 480px;

    .checkmark-box {
      width: 50%;
    }
  }

  @include mobile {
    .checkmark-box {
      padding-right: 20px;

      .box-description {
        .title,
        .description {
          font-size: 1rem;
        }
      }
    }
  }
}
</style>
