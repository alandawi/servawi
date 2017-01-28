<template>
  <div id="app">

    <div class="wrapper">

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

        <!-- MENU -->
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
        <!-- MENU -->
      </md-sidenav>

      <router-view></router-view>
      

    </div>

    
  </div>
</template>

<script>
//import Menu from 'components/layout/Menu'

export default {
  /*components: {
    // <my-component> will only be available in parent's template
    'layout-menu': Menu
  },*/
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

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}*/
.wrapper {
  display: flex;
  flex-direction: column;            
  height: 100vh;
  overflow: hidden;
}
.header {
  flex: 0 0 auto;  
  background: #aaa;
}
.content {
  flex: 1 1 auto;     
  overflow-y: auto;
  padding: 5px 10px;    
}
</style>
