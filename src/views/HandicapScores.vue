<template>

    <div class="handicaps"><h2>Category ID: {{ id }}</h2></div>
    <p v-for="(value,index) in scores" key="index">{{ value }} <button @click="increaseScore(index)">+</button>
      <button @click="decreaseScore(index)">-</button>
      <button @click="deleteScore(index)">delete</button></p>
  <form @submit.prevent="addScore()"><label>Add new score</label>
    <input type="text" v-model="newScore"/><button type="submit">add</button></form>

</template>

<script>
export default {
  props: ['id','scores'],
  data() {
    return {
      uri: ' http://localhost:3000/handicaps/' + this.id,
      newScore: []
    }
  },
  methods: {
    increaseScore(index) {
      this.scores[index] = parseInt(this.scores[index])+1
      let handicap = {
        'scores': this.scores
      }
      this.updateDb(handicap)

    },
    decreaseScore(index) {
      this.scores[index] = parseInt(this.scores[index])-1
      let handicap = {
        'scores': this.scores
      }
      this.updateDb(handicap)

    },
    deleteScore(index) {
      let newScores = this.scores
      newScores = newScores.splice(index,1)
      let handicap = {
        'scores': newScores
      }
      this.updateDb(handicap)
    },
    addScore(){
      this.scores.push(this.newScore)
      let handicap = {
        'scores': this.scores
      }
      this.updateDb(handicap)
      this.newScore = ''
    },
    updateDb(handicap){
      fetch( this.uri,{
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(handicap)
      }).catch((err) => console.log(err))
      this.$forceUpdate();
    }
  },
  computed: {
    scoresAsNumbers(){
      return this.scores.map(scores => parseInt(scores))
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
</style>
