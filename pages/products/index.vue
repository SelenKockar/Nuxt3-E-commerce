<template>
  <div class="mt-8 mx-8">
    <div class="grid">
      <ProductCard
        class="md:col-4 col-12 lg:col-3"
        v-for="product in store.productList"
        :product="product"
      />
    </div>
  </div>
</template>

<script setup>
import { productStore } from "@/stores/Products";

const store = productStore();

definePageMeta({
  layout: "products",
});
onBeforeMount(async () => {
  await store.fetchProducts();
});
</script>
