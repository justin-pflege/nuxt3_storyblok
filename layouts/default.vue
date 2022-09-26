<template>
  <div class="app">
    <Header />
    <slot />
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
}

.app {
  //background-color: cadetblue;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

}
</style>
