<template>
  <router-link class="nav-link" to="/">Home</router-link>
  <router-link class="nav-link" to="/about">About</router-link>
  <router-link class="nav-link" to="/users">Users</router-link>
  <router-link class="nav-link" to="/posts">Posts</router-link>
  <router-view />
</template>

<script>
export default {
  name: 'App',
}
</script>

<style scoped>
  .nav-link {
    margin-right: 20px;
    text-decoration: none;
    color: black;
    border: 3px solid black;
    padding: 3px;
  }
  .nav-link:hover {
    background-color: black;
    color: white;
  }
</style>
