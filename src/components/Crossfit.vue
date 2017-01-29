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
export default {
  name: 'crossfit',
  data () {
    return {
      crossfit: null
    }
  },
  mounted: function() {
    this.axios.get('https://graph.facebook.com/v2.8/394479783985567/posts/?fields=attachments%7Bmedia%7D&limit=6&access_token=646098862244678%7C4WrxTQays9OoJa2PmVaiN3e-tyg').then((response) => {
      this.crossfit = response.data.data;
      console.log(this.crossfit);
    })
  }
}
</script>

<style scoped>
.item-crossfit {
  margin: 10px 0 !important;
}
</style>
