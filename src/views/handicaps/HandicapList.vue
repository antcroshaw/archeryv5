<template>
<div class="container">
  <h2>Handicaps List Page</h2>
  <div v-if="handicapCategories.length">
  <div v-for="handicapCategories in handicapCategories" :key="handicapCategories.id" class="handicapCategories">
    <router-link :to="{ name: 'HandicapDetails', params: {
     id: handicapCategories.id
   }}"> <h2>{{ handicapCategories.title }}</h2></router-link>
  </div>
</div>
  <div v-else>
    <p> Categories loading ....</p>
  </div>
</div>

</template>

<script>
export default {
  name: "handicapsList",
  data() {
    return {
      handicapCategories: []
    }
  },
  mounted() {
    fetch(' http://localhost:3000/handicapCategories')
        .then(res => res.json())
        .then(data => this.handicapCategories = data)
        .catch(err => console.log(err.message))
  }
}
</script>

<style scoped>
.handicapCategories h2 {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
}
.handicapCategories h2:hover {
  background: #ddd;
}
.handicapCategories a {
  text-decoration: none;
}
</style>
