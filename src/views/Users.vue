<template>
  <div>
      <div v-for="user in users" :key="user.id">
          <p>{{ user.username }}</p>
          <p>{{ user.username }}</p>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Users Page',
  data() {
    return {
      users: []
    }
  },
  async mounted(){
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
    this.users = data
  },
}
</script>

<style scoped>

</style>