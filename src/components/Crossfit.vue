<template>
  <div class="content section-crossfit">
    <md-card v-for="item in crossfit" class="item-crossfit">
      <md-card-media>
        <img v-bind:src="item.attachments.data[0].media.image.src">
      </md-card-media>
    </md-card>
  </div>
</template>

<script>
import API from '../api/endpoints'

export default {
  name: 'crossfit',
  data () {
    return {
      crossfit: null
    }
  },
  mounted: function() {
    this.axios.get(API.crossfit).then((response) => {
      this.crossfit = response.data.data;
    })
  }
}
</script>

<style scoped>
.item-crossfit {
  margin-bottom: 10px !important;
}
</style>
