<template>
  <div class="flex align-items-center justify-content-between gap-2">
    <i :class="icon"></i>
    <h3 class="hidden md:block sm:block font-normal">{{ profile }}</h3>
    <span v-if="showBadge">{{ store.cartStates }}</span>
  </div>
</template>

<script setup>
import { productStore } from "@/stores/Products";
const store = productStore();

const props = defineProps({
  icon: {
    type: String,
    default: "",
  },
  state: {
    type: Number,
    default: 0,
  },
  profile: {
    type: String,
    deafult: "",
  },
  showBadge: {
    type: Boolean,
    default: "true",
  },
});
</script>
