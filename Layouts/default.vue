<template>
  <div>
    <header>
      <nav
        class="flex align-items-center justify-content-between fixed h-4rem top-0 left-0 w-full py-0 px-5 shadow-4 surface-50 nav-bar"
      >
        <div class="flex align-items-center justify-content-between gap-3">
          <button class="border-none border-round-2xl surface-50" @click="navigateTo('/')"><img src="@/assets/brandLogo.jpg" class="border-round-3xl" /></button>
          <p>EleganTela</p>
        </div>
        <DropDownMenu></DropDownMenu>
        <div class="flex align-items-center gap-3">
          <MenuTextButton
            icon="pi pi-user"
            profile="Profile"
            :showBadge="false"
          ></MenuTextButton>
          <MenuTextButton
            icon="pi pi-shopping-cart"
            profile="Card"
            :showBadge="true"
          ></MenuTextButton>
        </div>
      </nav>
    </header>

    <div>
      <slot />
    </div>
  </div>
</template>

<script setup></script>

<style>
html {
  font-family: "Roboto";
}
.nav-bar {
  z-index: 999;
}
</style>
