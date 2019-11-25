<template>
  <div class="container">
    <h1>Users on this website</h1>
    <ul>
      <li
        v-for="user in users"
        :key="user.id">
          {{ user.first_name }} {{ user.last_name }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  async asyncData({ params }) {
    return {
      users: (await axios.get("https://reqres.in/api/users?page=2")).data.data
    };
  }
}
</script>

<style>
</style>
