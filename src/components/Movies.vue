<template>
  <div class="movies">
  {{msg}}

  <router-link to="/">home</router-link>
  </div>
</template>

<script>
export default {
  name: 'movies',
  data () {
    return {
      msg: 'Movies section'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
