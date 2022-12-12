<template>
  <div class="container-fluid bg-white px-4">
    
    <navbar></navbar>
    
    <div class="row align-items-md-stretch py-3">
      <current-balance></current-balance>
      <summary-chart></summary-chart>
      <data-content></data-content>
    </div>
    
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue'
  import CurrentBalance from './components/CurrentBalance.vue'
  import SummaryChart from './components/SummaryChart.vue'
  import DataContent from './components/DataContent.vue'
  
  export default {
    name: 'crypto-app',
    components: { Navbar, CurrentBalance, SummaryChart, DataContent }
  }
</script>
