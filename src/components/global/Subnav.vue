<script setup>
import { Icon } from "@iconify/vue";

const categories = [
  {
    name: "Phones",
    icon: "fluent:phone-32-light",
  },
  {
    name: "Computers",
    icon: "proicons:computer",
  },
  {
    name: "Smart Watches",
    icon: "fluent:smartwatch-20-regular",
  },
  {
    name: "Cameras",
    icon: "mdi-light:camera",
  },
  {
    name: "Headphones",
    icon: "fluent:headphones-20-regular",
  },
  {
    name: "Gaming",
    icon: "streamline:cloud-gaming-1",
  },
];
</script>

<template>
  <div class="sub_nav">
    <div class="main_container">
      <div class="categories_container">
        <div class="categories">
          <div
            class="category"
            v-for="category in categories"
            :key="category.name"
          >
            <div class="icon">
              <Icon :icon="category.icon" class="w-6 h-6" />
            </div>
            <span>{{ category.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sub_nav {
  background-color: #2e2e2e;
  color: white;
  padding: 8px;
  display: none;

  @media (min-width: 1280px) {
    display: flex;
  }

  .categories_container {
    overflow-x: auto;
  }

  .categories {
    display: flex;
    align-content: center;
    justify-content: center;

    .category {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      /* padding: 0 60px; */
      min-width: 200px;

      &:not(:last-child) {
        border-right: 1px solid #4b4b4b;
      }
    }
  }
}
</style>
