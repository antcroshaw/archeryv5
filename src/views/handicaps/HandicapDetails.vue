<template>
<div class="container">
  <h2>Handicaps In Category</h2>
  <div v-for="handicap in handicaps" :key="handicap.id" class="handicaps">
    <h2><router-link :to="{ name: 'HandicapScores', params: {
     id: handicap.id, scores: handicap.scores
   }}" >{{ handicap.name }}</router-link>

        <span class="material-icons">edit</span>
      <span @click="deleteHandicap(handicap.id)" class="material-icons">delete</span></h2>


  </div>
  <router-link :to="{ name: 'AddHandicap', params: { handicapCategoryId: id}}"><p>Add new handicap</p></router-link>
</div>
</template>

<script>
import HandicapScores from "@/views/HandicapScores";
export default {
  components: [HandicapScores],
  props: ['id'],
  data() {
    return {
      handicaps: null,
      uri:'http://localhost:3000/handicaps/' + this.id,
      handicapUri: 'http://localhost:3000/handicaps/'
    }
  },
  mounted() {
    fetch(' http://localhost:3000/handicaps')
        .then(res => res.json())
        .then(data => this.handicaps = data.filter((data) => data['handicapCategoryId'] === parseInt(this.id) ))
        .catch(err => console.log(err.message))
  },
  methods: {
    handleDelete(id){
      this.handicaps = this.handicaps.filter((handicaps) => {
        return handicaps.id !== id
      })
    },
    deleteHandicap(id) {
      if(fetch(this.handicapUri + id, { method: 'DELETE' })
          .catch(err => console.log(err)))
        this.handleDelete(id)
    }
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
.material-icons {
  font-size: 24px;
  margin-left: 10px;
  color: #bbb;
  cursor: pointer;
}
.material-icons:hover {
  color: #777;
}
</style>
