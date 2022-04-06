<template>
<div class="container">
  <h2>Handicaps List Page</h2>
  <div v-for="handicaps in handicapCategories" :key="handicaps.id" class="handicaps">
    <router-link :to="{ name: 'handicapDetails', params: {
     id: handicaps.id
   }}"> <h2>{{ handicaps.title }}</h2></router-link>
  </div>
</div>
</template>

<script>
export default {
  name: "handicapsList",
  data() {
    return {
      handicapCategories: [
        { title: 'Outdoor GNAS', id: 1, details: 'outdoor scores'},
        { title: 'Indoor GNAS', id: 2, details: 'indoor scores'}
      ]
    }
  }
}
</script>

<style scoped>
.handicaps h2 {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
}
.handicaps h2:hover {
  background: #ddd;
}
.handicaps a {
  text-decoration: none;
}
</style>
