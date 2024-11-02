<script setup>
import Heroboxs from "./heroBoxs.vue";
</script>

<template>
  <div class="hero_section">
    <div class="main_container">
      <div class="content">
        <div class="hero_section_left">
          <span class="subtitle">Pro.Beyond.</span>
          <h1 class="title">Iphone <span>14 Pro</span></h1>
          <p class="desc">
            Created to change everything for the better. For everyone
          </p>
          <button class="shop_now">Shop Now</button>
        </div>
        <div class="hero_section_right">
          <div class="image">
            <img src="../assets/images/hero-img.png" alt="hero_section" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <Heroboxs />
</template>

<style lang="scss">
.hero_section {
  background-color: #211c24;
  color: white;

  .content {
    display: flex;
    align-content: center;

    @media (max-width: 768px) {
      flex-direction: column;
      height: auto;
    }

    .hero_section_left {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;

      @media (max-width: 768px) {
        width: 100%;
        text-align: center;
        padding: 18px;
      }

      .subtitle {
        font-size: 24px;
        font-weight: 200;
        color: gray;

        @media (max-width: 768px) {
          font-size: 18px;
        }
      }

      .title {
        font-size: 80px;
        font-weight: 100;
        line-height: 1.2;

        span {
          font-weight: 400;
        }

        @media (max-width: 768px) {
          font-size: 50px;
          line-height: 1.2;
        }
      }

      .desc {
        color: gray;
        font-size: 18px;
        margin-bottom: 10px;

        @media (max-width: 768px) {
          font-size: 15px;
        }
      }

      .shop_now {
        background-color: transparent;
        border: 1px solid white !important;
        color: white;
        padding: 6px 30px;
        border-radius: 7px;
        width: fit-content;

        @media (max-width: 768px) {
          padding: 4px 20px;
          margin: 0 auto;
        }
      }
    }

    .hero_section_right {
      width: 50%;
      display: flex;
      justify-content: center;

      @media (max-width: 768px) {
        width: 100%;
      }

      .image {
        img {
          width: 80%;
          margin: 0 auto;
        }
      }
    }
  }
}
</style>
