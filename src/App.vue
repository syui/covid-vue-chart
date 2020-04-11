<template>
  <div id="covid19">
      <h1>covid19-timeseries.json</h1>
   <div>
     <apexchart width="95%" type="line" :options="chartOptions" :series="series"></apexchart>
   </div>
      <div v-for="(item, idx) in items" v-bind:key="idx">
					<li  v-if="idx === 'Japan'">
          {{ idx }} {{ item }}
					</li>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  created(){
    axios.get('https://raw.githubusercontent.com/pomber/covid19/master/docs/timeseries.json').then((res) => {
            this.series = [{
              data: [res.data.Japan[0].confirmed , res.data.Japan[5].confirmed]
            }]
						this.chartOptions = {
              xaxis: { categories: [ res.data.Japan[0].date , res.data.Japan[5].date ] }
            }
            this.items = res.data;
        }).catch((error) => {
            console.error(error);
        });
  },
  data () {
    return {
      chartOptions: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [] 
        }
      },
      series: [ {name: "japan-confirmed"},{ data: [] } ]
    }
  }
}
</script>
