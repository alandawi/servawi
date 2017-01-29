<template>
  <div class="content section-news">
	<md-tabs md-fixed>
	  <md-tab id="news-tn" md-label="TN">
	    <md-card v-for="item in tn">
		  <md-card-media>
		    <img v-bind:src="item.attachments.data[0].media.image.src">
		  </md-card-media>

		  <md-card-header>
		    <a v-bind:href="item.link" target="_blank"><div class="md-title" v-text="item.attachments.data[0].title"></div></a>
		    <div class="md-subhead" v-text="item.attachments.data[0].description">Subtitle here</div>
		  </md-card-header>
		</md-card>
	  </md-tab>

	  <md-tab id="news-clarin" md-label="Clarin">
	    <md-card v-for="item in clarin">
		  <md-card-media>
		    <img v-bind:src="item.attachments.data[0].media.image.src">
		  </md-card-media>

		  <md-card-header>
		    <a v-bind:href="item.link" target="_blank"><div class="md-title" v-text="item.attachments.data[0].title"></div></a>
		    <div class="md-subhead" v-text="item.attachments.data[0].description">Subtitle here</div>
		  </md-card-header>
		</md-card>
	  </md-tab>
	</md-tabs>
  </div>
</template>

<script>
import API from '../api/endpoints'

export default {
  name: 'news',
  data () {
    return {
      tn: null,
      clarin: null
    }
  },
  mounted: function() {
	this.callNews("tn");
	this.callNews("clarin");
  },
  methods: {
  	callNews: function(news) {
  		var endpoint;

  		if (news == 'tn') {
  			endpoint = API.news.tn;
  		} else {
  			endpoint = API.news.clarin;
  		}

  		this.axios.get(endpoint).then((response) => {
			if (news == 'tn') {
  				this.tn = response.data.data;
	  		} else {
	  			this.clarin = response.data.data;
	  		}
	    })
  	}
  }
}
</script>

<style scoped>
a {
	color: #000000 !important;
}
</style>
