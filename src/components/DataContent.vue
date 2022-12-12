<template>
  <div class="col my-3 order-1 order-md-2">

    <div class="ps-4 pt-4 rounded-top-big bg-light">
      <ul class="nav">
        <li v-for="i in linksList" v-bind:key="i" class="nav-item">
          <a href="#" class="nav-link">
            <span v-on:click="linkSelect(i)" :class="[ i == linkClicked ? 'active-link' : '']">{{ i }}</span>
          </a>
        </li>
      </ul>
      <hr class="h-line">
    </div>

    <div class="p-4 rounded-bottom-big bg-light">
      <div class="table-responsive px-3" v-if="linkIsClicked">
        <table class="table table-sm align-middle">
          <tbody>
            <tr class="bg-white tr-height" v-for="value in dataContent" v-bind:key="value.id">
              <td class="td-first"><div class="ms-3 d-flex align-items-center justify-content-center rounded-circle icon-border"><img width="32" height="32" v-bind:src="imgUrl + value.id + '.png'" /></div></td>
              <td class="td-other"><p class="mb-1 text-muted">{{ value.symbol }}</p><p class="mb-0 fw-bold ">{{ value.name }}</p></td>
              <td class="td-other"><p class="mb-1 text-muted">Price</p><p class="mb-0 fw-bold">{{ currency(value.quote.USD.price) }}</p></td>
              <td class="td-other"><p class="mb-1 text-muted">Change</p><p class="mb-0 fw-bold" v-bind:class="value.quote.USD.percent_change_30d > 0 ?
                'text-success': value.quote.USD.percent_change_30d < 0 ? 'text-danger' : 'text-black'">{{ percent((value.quote.USD.percent_change_30d).toFixed(2)) }}
                <i v-bind:class="value.quote.USD.percent_change_30d > 0 ? 'bi bi-arrow-up-right-circle-fill' : value.quote.USD.percent_change_30d < 0 ?
                'bi bi-arrow-down-right-circle-fill' : 'bi bi-arrow-right-circle-fill'"></i></p>
              </td>
              <td class="td-other">
                <sparkline class="sparkline-up" v-if="value.quote.USD.percent_change_30d > 0" v-bind:data="sparkLineDataIncrease"></sparkline>
                  <svg style="width: 145px; height: 50px;" v-else-if="value.quote.USD.percent_change_30d == 0" xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <line x1="0" y1="25" x2="145" y2="25" style="stroke:rgb(0,0,0); stroke-width:2;"></line>
                  </svg>
                <sparkline class="sparkline-down" v-else v-bind:data="sparkLineDataDecrease"></sparkline>
              </td>
              <td class="text-end td-last">
                <button class="btn btn-light me-3">Sell</button>
                <button class="btn btn-purple me-3">Buy</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
import Sparkline from './Sparkline.vue'
export default {
  data: () => ({
    linksList: ['Summary', 'Table', 'Charts', 'Reporting', 'Analysis'],
    linkIsClicked: false,
    linkClicked: 'Summary',
    dataContent: [],
    imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/32x32/',
    sparkLineDataIncrease: [2, 3, 9, 9, 4, 5, 7, 9, 14, 19],
    sparkLineDataDecrease: [29, 23, 19, 17, 13, 11, 7, 5, 3, 2]
  }),

  components: {
    Sparkline,
  },

  created() {
    this.linkSelect(this.linksList[0]);
  },
  
  methods: {
    currency(value) {
      return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);
    },
    percent(value) {
      if (value > 0) {
        return `+${value}%`;
      } else if (value < 0) {
        return `${value}%`;
      } else {
        return `${value}%`;
      }
    },
    async linkSelect(i) {
      if (i == 'Summary') {
        this.linkClicked = 'Summary';
        this.linkIsClicked = true;
        let response = null;
        new Promise(async (resolve, reject) => {
          try {
            response = await axios.get('/api', {
              headers: {
                'X-CMC_PRO_API_KEY': '', // API Key
              },
            });
          } catch(ex) {
            response = null;
            // error
            console.log(ex);
            reject(ex);
          }
          if (response) {
            // success
            this.dataContent = response.data.data;
            this.currentBalance(this.dataContent);
            resolve(this.dataContent);
          }
        });
      } else {
        this.linkIsClicked = false;
        this.linkClicked = i;
      }
    },
    currentBalance(value) {
      this.emitter.emit('current-balance', value);
    }
  }
}
</script>
