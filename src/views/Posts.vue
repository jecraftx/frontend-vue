<template>
  <div>
      <div v-for="post in posts" :key="post.id">
          <p>{{ post.title }}</p>
          <p>{{ post.body }}</p>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Posts Page',
  data() {
    return {
      posts: []
    }
  },
  async mounted(){
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    this.posts = data
  },
}
</script>

<style scoped>

</style>