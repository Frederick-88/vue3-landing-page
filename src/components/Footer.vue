<script setup></script>

<template>
  <div class="footer">
    <div class="footer-content">
      <div class="footer-section-list">
        <div class="footer-section">
          <h3 class="section-title">Solutions</h3>
          <a class="section-link" href="#">Marketing</a>
          <a class="section-link" href="#">Analytics</a>
          <a class="section-link" href="#">Commerce</a>
          <a class="section-link" href="#">Insights</a>
        </div>

        <div class="footer-section">
          <h3 class="section-title">Support</h3>
          <a class="section-link" href="#">Pricing</a>
          <a class="section-link" href="#">Documentation</a>
          <a class="section-link" href="#">Guides</a>
          <a class="section-link" href="#">API Status</a>
        </div>

        <div class="footer-section">
          <h3 class="section-title">Company</h3>
          <a class="section-link" href="#">About</a>
          <a class="section-link" href="#">Blog</a>
          <a class="section-link" href="#">Press</a>
          <a class="section-link" href="#">Partners</a>
        </div>

        <div class="footer-section">
          <h3 class="section-title">Legal</h3>
          <a class="section-link" href="#">Claim</a>
          <a class="section-link" href="#">Privacy</a>
          <a class="section-link" href="#">Terms</a>
        </div>
      </div>
    </div>

    <div class="footer-copyright">
      <p class="copyright">© 2023 ChenFrederick.com - All Rights reserved</p>
      <div class="social-media-links">
        <a href="https://www.chenfrederick.com" target="_blank" class="icon-instagram link" />
        <a href="https://www.chenfrederick.com" target="_blank" class="icon-twitter link" />
        <a href="https://github.com/Frederick-88" target="_blank" class="icon-github link" />
        <a href="https://www.linkedin.com/in/chen-frederick/" target="_blank" class="icon-linkedin-square link" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.footer {
  width: 100%;
  padding: 100px 0 30px;
  background: radial-gradient(94% 58.3% at 50.3% 82.6%, #2a2541 0%, rgb(17, 16, 19) 100%);

  .footer-content {
    padding: 0 50px;
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .footer-section-list {
      display: flex;

      .footer-section {
        margin-right: 130px;

        &:last-of-type {
          margin-right: 0;
        }
      }

      .section-title {
        font-weight: 700;
        color: $white;
        font-size: 1rem;
        line-height: 1.2;
        text-transform: uppercase;
        margin-bottom: 20px;
      }

      .section-link {
        display: block;
        margin-bottom: 20px;
        font-weight: 500;
        color: $grey6;
        font-size: 1rem;
        line-height: 1.2;

        &:last-of-type {
          margin-bottom: 0;
        }
      }
    }
  }

  .footer-copyright {
    padding: 30px 50px 0;
    margin-top: 100px;
    border-top: 1px solid rgba($white, 0.1);
    width: 100%;
    display: flex;
    justify-content: space-between;

    .copyright {
      font-weight: 500;
      color: $grey6;
      font-size: 1rem;
      line-height: 1.2;
    }

    .social-media-links {
      display: flex;
      align-items: center;

      .link {
        font-size: 1.5rem;
        margin-right: 15px;
        color: $white;
        transition: all 0.3s ease-in-out;

        &:last-of-type {
          margin-right: 0;
        }

        &:hover {
          color: $grey6;
        }
      }
    }
  }

  @include non-desktop {
    .footer-content .footer-section-list {
      width: 100%;
      display: flex;
      justify-content: space-between;

      .footer-section {
        margin-right: 0;
      }
    }
  }

  @include mobile {
    .footer-content {
      padding: 0 15px;

      .footer-section-list {
        flex-wrap: wrap;
        max-width: 290px;
        justify-content: flex-start;

        .footer-section {
          margin-right: 50px;
          margin-bottom: 50px;
          width: 120px;

          &:nth-child(2),
          &:nth-child(4) {
            margin-right: 0;
          }

          &:nth-child(3),
          &:nth-child(4) {
            margin-bottom: 0;
          }
        }
      }
    }

    .footer-copyright {
      padding: 30px 15px 0;
      flex-direction: column;
      align-items: center;
      text-align: center;

      .social-media-links {
        margin-top: 20px;
      }
    }
  }
}
</style>
