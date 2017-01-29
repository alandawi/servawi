<template>
  <div class="content section-holidays">
    <div class="phone-viewport">
      <md-list class="md-double-line">
        <md-list-item class="md-inset" v-for="holiday in holidays">
          <div class="md-list-text-container">
            <span>{{holiday.dia}}/{{holiday.mes}}</span>
            <span>{{holiday.motivo}} ({{holiday.tipo}})</span>
            <md-divider class="md-inset"></md-divider>
          </div>
        </md-list-item>
      </md-list>
    </div>
  </div>
</template>

<script>
import API from '../api/endpoints'

export default {
  name: 'holidays',
  data () {
    return {
      holidays: null
    }
  },
  mounted: function() {
    this.axios.get(API.holidays).then((response) => {
      this.holidays = response.data;
    })
  }
}
</script>

<style scoped>
</style>
