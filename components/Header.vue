<template>
  <header class="header">
    <nav class="header__nav">
      <ul class="header__nav-links">
        <nuxt-link to="/" class="header__nav-links-link"><a>Tutorial</a></nuxt-link>
        <nuxt-link to="/about" class="header__nav-links-link">About<a></a></nuxt-link>
      </ul>
    </nav>
  </header>
</template>

<script setup>

</script>

<style lang="scss">
.header {
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #e6eef2;
  &__nav {
    &-links {
      display: flex;
      justify-content: center;
      &-link {
        text-decoration: none;
        font-size: 18px;
        padding: 0 20px;
      }
    }
  }
}
</style>
