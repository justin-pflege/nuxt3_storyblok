<template>
  <div v-editable="blok" class="headline">
    <p> {{ blok.text }}</p>
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
  margin-top: 10px;
}
</style>
