<template>
  <div class="section-holidays">
  {{msg}}

  <router-link to="/">home</router-link>
  </div>
</template>

<script>
export default {
  name: 'holidays',
  data () {
    return {
      msg: 'Base template'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
