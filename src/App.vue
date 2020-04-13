<template>
	<div id="covid-vue-chart">
		<h1>covid-vue-chart</h1>
		<div>
			<apexchart width="95%" type="line" :options="chartOptions" :series="series"></apexchart>
		</div>
		<!--
		<div v-for="(item, idx) in items" v-bind:key="idx">
			<li  v-if="idx === 'Japan'">
				{{ idx }} {{ item }}
			</li>
		</div>
		-->
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
			var confirmedj = []
			var confirmedk = []
			var confirmeduk = []
			var confirmedc = []
			var date = []
			res.data.Japan.forEach(function (key) {
						confirmedj.push(key.confirmed)
			})
			res.data["Korea, South"].forEach(function (key) {
						confirmedk.push(key.confirmed)
			})
			res.data["United Kingdom"].forEach(function (key) {
						confirmeduk.push(key.confirmed)
			})
			res.data["China"].forEach(function (key) {
						confirmedc.push(key.confirmed)
			})
			res.data.Japan.forEach(function (key) {
						date.push(key.date)
			})
					console.log(res.data)
			this.series = [{ data: confirmedj },{ data: confirmedk },{ data: confirmeduk },{ data: confirmedc }]
			this.chartOptions = {
				xaxis: { 
					categories: date
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
					id: 'covid-vue-chart'
				},
				xaxis: {
					categories: [] 
				}
			},
			series: [ {name: "japan", data: [] }, {name: "Korea, South", data: [] }, {name: "United Kingdom", data: [] }, {name: "China", data: [] } ]
		}
	}
}
</script>
