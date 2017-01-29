<template>
  <div>
	<div class="header">
		<md-toolbar class="md-fixed">
		  <md-button class="md-icon-button" @click="toggleLeftSidenav">
		    <md-icon>menu</md-icon>
		  </md-button>

		  <h2 class="md-title">Servawi</h2>
		</md-toolbar>
	</div>

	<md-sidenav class="md-left" ref="leftSidenav">
		<md-toolbar class="md-small">
		  <div class="md-toolbar-container">
		    <h3 class="md-title">Sections</h3>
		  </div>
		</md-toolbar>

		<div class="phone-viewport">
		  <md-list>
		    <md-list-item>
		      <md-icon>whatshot</md-icon>
		      <span @click="openPage('')">Home</span>
		    </md-list-item>

		    <md-list-item>
		      <md-icon>whatshot</md-icon>
		      <span @click="openPage('crossfit')">Crossfit</span>
		    </md-list-item>

		    <md-list-item>
		      <md-icon>whatshot</md-icon>
		      <span @click="openPage('weather')">Weather</span>
		    </md-list-item>

		    <md-list-item>
		      <md-icon>whatshot</md-icon>
		      <span @click="openPage('holidays')">Holidays</span>
		    </md-list-item>

		    <md-list-item>
		      <md-icon>whatshot</md-icon>
		      <span @click="openPage('movies')">Movies</span>
		    </md-list-item>
		  </md-list>
		</div>
	</md-sidenav>
  </div>
</template>

<script>
export default {
  name: 'menu',
  data () {
    return {
    }
  },
  methods: {
    toggleLeftSidenav() {
      this.$refs.leftSidenav.toggle();
    },
    openPage(page) {
      this.$refs.leftSidenav.toggle();
      setTimeout(()=>{ this.$router.push('/' + page); }, 400); // Hack for the vue-material tab height
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
