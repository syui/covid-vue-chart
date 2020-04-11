<template>
	<div id="covid19">
		<h1>covid19</h1>
		<div>
			<apexchart width="95%" type="line" :options="chartOptions" :series="series"></apexchart>
		</div>
		<div v-for="(item, idx) in items" v-bind:key="idx">
			<li  v-if="idx === 'Japan'">
				{{ idx }} {{ item }}
			</li>
		</div>
	<footer>
	<p>timeseries.json : <a href="https://github.com/pomber/covid19/">pomber/covid19</a></p>
	<p>© <a href="https://github.com/syui/covid-vue-chart">syui</a></p>
	</footer>
	</div>
</template>

<script>
import axios from 'axios';
export default {
	created(){
		axios.get('https://raw.githubusercontent.com/pomber/covid19/master/docs/timeseries.json').then((res) => {
			var confirmed = []
			var confirmedt = []
			var date = []
			res.data.Japan.forEach(function (key) {
						confirmed.push(key.confirmed)
			})
			res.data.Thailand.forEach(function (key) {
						confirmedt.push(key.confirmed)
			})
			res.data.Japan.forEach(function (key) {
						date.push(key.date)
			})
			this.series = [{ data: confirmed },{ data: confirmedt }]
			this.chartOptions = {
				xaxis: { 
					categories:	date
			}}
			this.items = res.data
		}).catch((error) => {
			console.error(error)
		})
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
			series: [ {name: "japan", data: [] }, {name: "Thailand", data: [] } ]
		}
	}
}
</script>
