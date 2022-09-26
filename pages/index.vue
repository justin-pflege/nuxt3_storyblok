<template>
  <section class="home">
    <div class="home__posts">
      <nuxt-link
        :key="post.id"
        v-for="post in posts"
        :to="`post/${post.id}`"
      >
        <div class="post" :style="{backgroundImage: `url(${post.thumbnailUrl})`}">
          <p>Blog Post # {{ post.id }}</p>
          <p>{{ post.title }}</p>
        </div>
      </nuxt-link>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const headline = 'Home'
  const posts = ref(
    [
      {
        title: 'LOREM',
        thumbnailUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2972&q=80',
        id: '1'
      },
      {
        title: 'IPSUM',
        thumbnailUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2972&q=80',
        id: '2'
      },
      {
        title: 'DOLOR',
        thumbnailUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2972&q=80',
        id: '3'
      },
      {
        title: 'SITAMET',
        thumbnailUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2972&q=80',
        id: '4'
      },
    ]
  )
</script>


<style lang="scss">
.home {
  &__headline {
    text-align: center;
  }
  &__posts {
    display: flex;
    flex-direction: column;
    align-items: center;

    .post {
      width: 50vw;
      height: 20vh;
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: space-evenly;
      background-color: antiquewhite;
      margin-top: 15px;
      padding: 5px;
      border: 1px solid gray;
      border-radius: 5px;
    }
 }
}
</style>
