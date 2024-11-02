<script setup></script>

<template>
  <div class="hero_boxs">
    <div class="left">
      <div class="box h-[50%] !bg-white">
        <div class="image">
          <img
            src="../assets/images/PlayStation.png"
            alt="hero_box"
            class="block md:hidden"
          />
          <img
            src="../assets/images/PlayStation-2.png"
            alt="hero_box"
            class="hidden md:block"
          />
        </div>
        <div class="text">
          <h1 class="title">Playstation 5</h1>
          <p class="desc">
            Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will
            redefine your PlayStation experience.
          </p>
        </div>
      </div>
      <div class="flex items-center h-[50%] flex-col md:flex-row w-full">
        <div class="box h-full">
          <div class="image">
            <img
              src="../assets/images/headphone.png"
              alt="hero_box"
              class="block md:hidden"
            />
            <img
              src="../assets/images/headphone-2.png"
              alt="hero_box"
              class="hidden md:block"
            />
          </div>
          <div class="text">
            <h1 class="title">Apple AirPods Max</h1>
            <p class="desc">Computational audio. Listen, it's powerful</p>
          </div>
        </div>
        <div class="box h-full !bg-[#353535] text-white">
          <div class="image">
            <img
              src="../assets/images/glasses.png"
              alt="hero_box"
              class="block md:hidden"
            />
            <img
              src="../assets/images/glasses-2.png"
              alt="hero_box"
              class="hidden md:block"
            />
          </div>
          <div class="text">
            <h1 class="title">
              Apple <br />
              Vision Pro
            </h1>
            <p class="desc">An immersive way to experience entertainment</p>
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="box h-full !flex-col-reverse md:!flex-row">
        <div class="text">
          <h1 class="title">Macbook <span>Air</span></h1>
          <p class="desc">
            The new 15‑inch MacBook Air makes room for more of what you love
            with a spacious Liquid Retina display.
          </p>
          <button class="shop_now">Shop Now</button>
        </div>
        <div class="image">
          <img
            src="../assets/images/MacBook Pro 14.png"
            alt="hero_box"
            class="block md:hidden"
          />
          <img
            src="../assets/images/MacBook Pro 14-2.png"
            alt="hero_box"
            class="hidden md:block"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.hero_boxs {
  display: flex;
  height: 570px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }

  .left,
  .right {
    width: 50%;
    height: 100%;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .right,
  .left {
    .box {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #ededed;
      overflow: hidden;

      @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
        width: 100%;
        gap: 0;
      }

      .text {
        padding: 40px;
        flex: 1;

        @media (max-width: 768px) {
          padding: 15px;
        }

        .title {
          font-size: 70px;
          font-weight: 100;
          line-height: 1.2;

          span {
            font-weight: 400;
          }

          @media (max-width: 768px) {
            font-size: 40px;
          }
        }

        .desc {
          color: gray;
          font-size: 18px;
          margin-bottom: 10px;

          @media (max-width: 768px) {
            font-size: 15px;
            margin-bottom: 5px;
          }
        }

        .shop_now {
          background-color: transparent;
          border: 1px solid black !important;
          color: black;
          padding: 8px 50px;
          border-radius: 7px;
          width: fit-content;

          @media (max-width: 768px) {
            padding: 4px 20px;
          }
        }
      }

      .image {
        img {
          width: 90%;
          margin-left: auto;

          @media (max-width: 768px) {
            margin: 0 auto !important;
            width: 80%;
            padding: 10px;
          }
        }
      }
    }
  }

  .left {
    .box {
      .text {
        .title {
          font-size: 30px;
          font-weight: 200;
        }
      }

      .image {
        img {
          margin-left: unset;
          margin-right: auto;
        }
      }
    }
  }
}
</style>
