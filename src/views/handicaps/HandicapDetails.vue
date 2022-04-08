<template>
<div class="container">
  <h2>Handicaps In Category</h2>
  <div v-for="handicap in handicaps" :key="handicap.id" class="handicaps">
    <router-link :to="{ name: 'HandicapScores', params: {
     id: handicap.id, scores: handicap.scores
   }}" > <h2>{{ handicap.name }}</h2></router-link>
  </div>
</div>
</template>

<script>
import HandicapScores from "@/views/HandicapScores";
export default {
  components: [HandicapScores],
  props: ['id'],
  data() {
    return {
      handicaps: null
    }
  },
  mounted() {
    fetch(' http://localhost:3000/handicaps')
        .then(res => res.json())
        .then(data => this.handicaps = data.filter((data) => data['handicapCategoryId'] === parseInt(this.id) ))
        .catch(err => console.log(err.message))
  }

}
</script>

<style scoped>
.handicaps h2 {
  background: #f4f4f4;
  padding: 10px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 400px;
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
