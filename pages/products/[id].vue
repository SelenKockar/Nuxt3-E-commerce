<template>
  <div class="flex align-items-center flex-nowrap gap-8 mt-8">
    <div>
      <img
        :src="products.image"
        alt="product thumb"
        class="w-full max-w-19rem h-full max-h-25rem border-round-3xl"
      />
    </div>
    <div>
      <p>{{ products.title }}</p>
      <p>Price - ${{ products.price }}</p>
      <p>{{ products.description }}</p>
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
const { incrementCartState } = productStore();

const { id } = useRoute().params;
const uri = "https://fakestoreapi.com/products/" + id;

const { data: products } = await useFetch(uri, { key: id });
</script>
