<template>
  <div>
    <header>
      <nav
        class="flex align-items-center justify-content-between fixed h-4rem top-0 left-0 w-full py-0 px-5 shadow-4 surface-50 nav-bar"
      >
        <div class="flex align-items-center justify-content-between gap-3">
          <NuxtLink to="/"
            ><img src="@/assets/Brandlogo.jpg" class="border-round-3xl" />
          </NuxtLink>
          <p>EleganTela</p>
        </div>
        <DropDownMenu></DropDownMenu>
        <Search />
        <div class="flex align-items-center gap-3">
          <MenuTextButton
            class="profile-bar"
            icon="pi pi-user"
            profile="Profile"
            :showBadge="false"
          ></MenuTextButton>
          <MenuTextButton
            class="cart-bar"
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

<style scoped>
.nav-bar {
  z-index: 999;
}
</style>
