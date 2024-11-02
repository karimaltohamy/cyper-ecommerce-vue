<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="search">
    <button>
      <Icon icon="bitcoin-icons:search-outline" class="w-6 h-6" />
    </button>
    <input type="text" placeholder="Search" />
  </div>
</template>

<style scoped lang="scss">
.search {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: 10px;
  background-color: #f5f5f5;
  width: 430px;

  button {
    svg {
      color: #989898;
    }
  }

  input {
    flex: 1;
    background-color: transparent;

    &:focus {
      border: none;
      outline: none;
    }
  }
}
</style>
