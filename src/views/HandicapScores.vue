<template>

    <div class="handicaps"><h2>Category ID: {{ id }}</h2></div>
    <p v-for="(value,index) in scoresAsNumbers" key="index">{{ value }} <button @click="increaseScore(index)">+</button></p>

</template>

<script>
export default {
  props: ['id','scores'],
  methods: {
    increaseScore(index) {
    this.scoresAsNumbers[index]++
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
