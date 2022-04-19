<template>
<h1>Add Handicap</h1>
  <form @submit.prevent="handleSubmit">
    <label>Name: </label>
    <input type="text" required  v-model="name"/>
    <button>Add Handicap</button>
  </form>
</template>

<script>
export default {
  props: ['handicapCategoryId'],
  data(){
    return {
      name: ''
    }
  },
  mounted(){
    console.log('Handicap Category: ' + this.handicapCategoryId)
  },
  methods: {
    handleSubmit() {
      let handicap = {
        name: this.name,
        scores: [0,0,0,0],
        handicapCategoryId: parseInt(this.handicapCategoryId)
      }
      console.log(handicap)

      fetch('http://localhost:3000/handicaps', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(handicap)
      }).then(() => {
        this.$router.push('/handicaps/' + parseInt(this.handicapCategoryId))
      }).catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>
form {
  background: white;
  padding: 20px;
  border-radius: 10px;
}
label {
  display: block;
  color: #bbb;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 20px 0 10px 0
}
input {
  padding: 10px;
  border: 0;
  border-bottom: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}
textarea {
  border: 1px solid #ddd;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  height: 100px;
}
form button {
  display: block;
  margin: 20px auto 0;
  background: #00ce89;
  color: white;
  padding: 10px;
  border: 0;
  border-radius: 6px;
  font-size: 16px;
}
</style>
