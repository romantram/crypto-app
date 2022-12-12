<template>
  <div class="col-md-6 mb-3 order-2 order-md-1">

    <div class="h-100 p-5 bg-light rounded-big">
      <h5 class="position-relative">Summary<span class="position-absolute start-100 text-muted"><i class="bi bi-three-dots"></i></span></h5>
      <area-chart class="mb-3 mt-4" height="200px" empty="Brak danych" loading="Loading..." prefix="$" suffix="k" :points = "false" :legend="false" :library="{backgroundColor: 'linear-gradient(180deg, rgba(116, 69, 251, 0.16) 28.38%, rgba(116, 69, 251, 0) 100%)'}" :data="dataContent"></area-chart>
      <hr class="ms-0 mb-3 h-line">
      <span class="ms-2 text-muted">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#E99885" class="bi bi-circle-fill" viewBox="0 0 16 16">
          <circle cx="8" cy="8" r="6"></circle>
        </svg> 
        This month
      </span>
      <span class="ms-2 text-muted">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#95AEE2" class="bi bi-circle-fill" viewBox="0 0 16 16">
          <circle cx="8" cy="8" r="6"></circle>
        </svg> 
        Last month
      </span>
    </div>
  
  </div>
</template>

<script>
  export default {
    data: () => ({
      dataContent: [
        { name: 'This month', data: { '1 May': 1, '2 May': 5, '3 May': 10, '4 May': 15, '5 May': 10, '6 May': 14, '7 May': 11, '8 May': 2, '9 May': 18, '10 May': 22 }},
        { name: 'Last month', data: { '1 May': 22, '2 May': 18, '3 May': 2, '4 May': 11, '5 May': 14, '6 May': 10, '7 May': 15, '8 May': 10, '9 May': 6, '10 May': 1 }}
      ]
    })
  }
</script>
