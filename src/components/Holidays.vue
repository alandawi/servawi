<template>
  <div class="section-holidays">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'holidays',
  data () {
    return {
      msg: 'Base template'
    }
  },
  mounted: function() {
    this.axios.get('http://nolaborables.com.ar/API/v1/actual').then((response) => {
      console.log(response.data)
    })
  }
}
</script>

<style scoped>
</style>
