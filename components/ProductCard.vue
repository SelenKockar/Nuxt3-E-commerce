<template>
  <div
    class="h-20rem flex flex-column mt-3 justify-content-between p-3 border-1 surface-border border-round-sm"
  >
    <div>
      <img
        class="w-max max-w-11rem h-11rem border-round-md"
        :src="product?.image"
      />
    </div>
    <p
      class="surface-overlay white-space-nowrap overflow-hidden text-overflow-ellipsis"
    >
      {{ product?.title }}
    </p>
    <div class="flex flex-row justify-content-between align-items-center">
      <NuxtLink :to="`/products/${product?.id}`" class="inline-block">
        <Button label="View" />
      </NuxtLink>
      <Button
        label="Add to cart"
        icon="pi pi-cart-plus"
        @click="incrementCartState()"
      />
    </div>
  </div>
</template>

<script setup>
import { productStore } from "@/stores/Products";
const { product } = defineProps(["product"]);
const { incrementCartState } = productStore();
</script>
