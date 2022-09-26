<template>
  <div v-editable="blok" class="headline">
    <div :style="{backgroundColor: blok.Background}">
    <h1> {{ blok.Title }}</h1>
    <h3> {{ blok.Subtitle }}</h3>
    </div>
  </div>
</template>

<script setup>
defineProps({
  blok: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="scss">
.headline {
  width: 80vw;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 30px;
}
</style>
