<template>
  <div class="content section-news">
	<md-card v-for="item in news">
	  <md-card-media>
	    <img v-bind:src="item.attachments.data[0].media.image.src">
	  </md-card-media>

	  <md-card-header>
	    <a v-bind:href="item.link" target="_blank"><div class="md-title" v-text="item.attachments.data[0].title"></div></a>
	    <div class="md-subhead" v-text="item.attachments.data[0].description">Subtitle here</div>
	  </md-card-header>
	</md-card>
  </div>
</template>

<script>
import API from '../api/endpoints'

export default {
  name: 'news',
  data () {
    return {
      news: null
    }
  },
  mounted: function() {
    this.axios.get(API.news).then((response) => {
      this.news = response.data.data;
      console.log(this.news);
    })
  }
}
</script>

<style scoped>
a {
	color: #000000 !important;
}
</style>
