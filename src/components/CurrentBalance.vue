<template>
  <div class="col-md-6 mb-3">
    
    <div class="h-100 p-5 bg-light rounded-big">
      <h5 class="position-relative">Current Balance<span class="position-absolute start-100 text-muted"><i class="bi bi-three-dots"></i></span></h5>
      <h1 class="mt-5"><span class="text-muted">$ </span>{{ balance.toFixed(2) }}</h1>
      <p class="mb-4 fw-bold" v-bind:class="percent > 0 ?
        'text-success': percent < 0 ? 'text-danger' : 'text-black'"><i v-bind:class="percent > 0 ? 'bi bi-arrow-up-right-circle-fill' : percent < 0 ? 
        'bi bi-arrow-down-right-circle-fill' : 'bi bi-arrow-right-circle-fill'"></i> {{ percent.toFixed(0)}}% vs last month</p>
        <button class="btn btn-purple mt-5 mb-0 me-3" type="button">Quick Invest</button>
        <button class="btn btn-light mt-5 mb-0" type="button">Show Report</button>
    </div>

  </div>
</template>

<script>
export default {
  data: () => ({
    balance: 0,
    percent: 0
  }),

  methods: {
    currentBalance(value) {
      this.balance = 0;
      this.percent = 0;
      value.forEach(p => {
        this.balance += p.quote.USD.price;
        this.percent += p.quote.USD.percent_change_30d;
      })
    }
  },
  
  created() {
    this.emitter.on('current-balance', this.currentBalance);
  }
}
</script>
