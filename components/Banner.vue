<template>
  <div class="p-3">
    <div
      class="flex flex-wrap justify-content-between align-items-center gap-3 flex-shrink-10 w-full min-h-24rem border-round-3xl bg-indigo-100"
      :class="{ 'flex-row-reverse': reverse }"
    >
      <div class="text-button">
        <h2 class="text-2xl w-full max-w-27rem">
          {{ text }}
        </h2>

        <NuxtLink to="/products">
          <Button
            class="flex justify-content-center align-items-center border-round-2xl"
            label="Shop Now"
        /></NuxtLink>
      </div>
      <NuxtImg
        :src="imageSrc"
        class="border-round-3xl max-w-24rem w-full h-full banner-image"
      ></NuxtImg>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  text: {
    type: String,
    default: "",
  },
  imageSrc: {
    type: String,
    default: "",
  },
  reverse: {
    type: Boolean,
    default: false,
  },
});
</script>

<style>
.text-button {
  padding: 0 2.7rem 1.5rem 2.7rem;
}
@media screen and (max-width: 790px) {
  .banner-image {
    display: none;
  }
}
</style>
