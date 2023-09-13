<template>
  <div class="hidden md:block sm:block">
    <ul
      class="flex flex-row justify-content-between align-items-center list-none font-medium gap-5 px-5 py-0"
    >
      <li>Women</li>
      <li>Men</li>
      <li>Kids</li>
      <li>Sale</li>
    </ul>
  </div>
  <div class="dropdown-menu">
    <div
      class="flex flex-row justify-content-between align-items-center px-5 py-0 relative"
    >
      <i @click="toggleMobilePanel" class="pi pi-ellipsis-v"></i>
      <ul
        v-if="isPanelOpen"
        class="absolute z-1 min-w-full list-none shadow-4 p-2 border-round surface-50"
        style="margin-top: 12rem"
      >
        <li>Women</li>
        <hr />
        <li>Men</li>
        <hr />
        <li>Kids</li>
        <hr />
        <li>Sale</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const isPanelOpen = ref(false);
const toggleMobilePanel = () => {
  isPanelOpen.value = !isPanelOpen.value;
};
</script>
<style>
@media screen and (min-width: 750px) {
  .dropdown-menu {
    display: none;
  }
}
</style>
