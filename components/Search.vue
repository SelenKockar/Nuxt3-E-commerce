<template>
  <div class="search-container">
    <div
      class="flex align-items-center bg-white w-19rem border-1 border-black-alpha-20 p-2 border-round-xl"
    >
      <input
        class="border-none outline-none p-1 w-11rem border-round-bottom-xs border-round-top-xs"
        placeholder="Search..."
        type="text"
        @input="updateSearchTerm(searchTerm)"
        v-model="searchTerm"
      />
      <i class="pi pi-search" style="margin-left: 5.5rem"></i>
    </div>
  </div>
</template>

<script setup>
import { productStore } from "@/stores/Products";

const { searchTerm, updateSearchTerm } = productStore();
</script>
<style>
@media screen and (max-width: 750px) {
  .search-container {
    display: none;
  }
}
</style>
